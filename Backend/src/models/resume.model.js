const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    pdfURL: {
        type: String,
        required: true,
    },
});

const resumeModel = mongoose.model("resume", resumeSchema);

module.exports = resumeModel;
