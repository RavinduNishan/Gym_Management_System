const mongoose = require('mongoose');

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

    createdAt: {
        type: Date,
        default: Date.now
    }

},
{
    timestamps: true
});

export const Progress = mongoose.model('Progress', {name: String});
