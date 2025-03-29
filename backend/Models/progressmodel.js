import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    taskid: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true,
        description: "Time spent in minutes"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
});

export const Progress = mongoose.model('Progress', progressSchema);
export default Progress;
