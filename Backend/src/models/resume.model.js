const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    pdfURL: {
        type: String,
        required: true,
    },
});

const resumeModel = mongoose.model("resume", resumeSchema);

module.exports = resumeModel;
