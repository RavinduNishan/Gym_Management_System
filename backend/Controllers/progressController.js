import Progress from "../Models/progressmodel.js";

// Create a new progress record
export const createProgress = async (req, res) => {
    try {
        // Validate required fields
        const requiredFields = ['userId', 'taskid', 'status', 'progress', 'time'];
        const missingFields = requiredFields.filter(field => !req.body[field] && req.body[field] !== 0);
        
        if (missingFields.length > 0) {
            return res.status(400).json({ 
                message: `Missing required fields: ${missingFields.join(', ')}` 
            });
        }
        
        // Validate numeric fields
        if (isNaN(Number(req.body.taskid))) {
            return res.status(400).json({ message: "Task ID must be a number" });
        }
        
        if (isNaN(Number(req.body.progress)) || Number(req.body.progress) < 0 || Number(req.body.progress) > 100) {
            return res.status(400).json({ message: "Progress must be a number between 0 and 100" });
        }
        
        if (isNaN(Number(req.body.time)) || Number(req.body.time) < 0) {
            return res.status(400).json({ message: "Time must be a positive number" });
        }
        
        const newProgress = {
            userId: req.body.userId,
            taskid: Number(req.body.taskid),
            status: req.body.status,
            progress: Number(req.body.progress),
            time: Number(req.body.time),
            createdAt: req.body.createdAt || new Date()
        };
        
        const progress = await Progress.create(newProgress);
        return res.status(201).json({ progress });
    } catch (error) {
        console.error("Create Progress Error:", error);
        
        // Check for MongoDB validation errors
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ 
                message: "Validation Error", 
                details: validationErrors 
            });
        }
        
        res.status(500).json({ message: error.message });
    }
};

// Get all progress records
export const getAllProgress = async (req, res) => {
    try {
        const progress = await Progress.find({});
        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get progress by ID
export const getProgressById = async (req, res) => {
    try {
        const { id } = req.params;
        const progress = await Progress.findById(id);
        
        if (!progress) {
            return res.status(404).json({ message: "Progress record not found" });
        }
        
        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update progress by ID
export const updateProgress = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Check if progress value is being updated and update status accordingly
        if (req.body.progress !== undefined) {
            // If progress is 0, set status to "Not Started"
            if (req.body.progress === 0) {
                req.body.status = "Not Started";
            }
            // If progress is 100, set status to "Completed"
            else if (req.body.progress === 100) {
                req.body.status = "Completed";
            }
            // For any other progress value, only update if coming from 0 or 100
            else {
                const currentProgress = await Progress.findById(id);
                if (currentProgress && (currentProgress.progress === 0 || currentProgress.progress === 100)) {
                    req.body.status = "In Progress";
                }
            }
        }
        
        const progress = await Progress.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!progress) {
            return res.status(404).json({ message: "Progress record not found" });
        }
        
        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete progress by ID
export const deleteProgress = async (req, res) => {
    try {
        const { id } = req.params;
        const progress = await Progress.findByIdAndDelete(id);
        
        if (!progress) {
            return res.status(404).json({ message: "Progress record not found" });
        }
        
        res.status(200).json({ message: "Progress record deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
