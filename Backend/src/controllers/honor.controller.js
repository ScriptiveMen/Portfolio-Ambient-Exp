const { default: mongoose } = require("mongoose");
const honorModel = require("../models/honor.model");

async function addHonor(req, res) {
    const { title, position, year, link } = req.body;

    const isExists = await honorModel.findOne({ title });

    if (isExists) {
        return res.status(409).json({ message: "Honor already exists!" });
    }

    const honor = await honorModel.create({
        title,
        link: link ? link : "",
        position,
        year,
        user: req.user.id,
    });

    res.status(201).json({ message: "Honor Added Sucessfully", honor });
}
async function getHonor(req, res) {
    const honors = await honorModel.find();

    if (honors.length === 0) {
        return res
            .status(404)
            .json({ message: "No honors found! Please add one." });
    }

    res.status(200).json({ message: "Honors fetched sucessfully", honors });
}
async function updateHonor(req, res) {
    const { id } = req.params;
    const { title, position, year } = req.body;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(403).json({ message: "Invalid honor id" });
    }

    const isHonorExists = await honorModel.findById(id);
    if (!isHonorExists) {
        return res.status(404).json({ message: "No Honor found!" });
    }

    const updatedHonor = {};

    if (title !== undefined && title !== "") updatedHonor.title = title;
    if (year !== undefined && year !== "") updatedHonor.year = year;
    if (position !== undefined && position !== "")
        updatedHonor.title = position;

    const newHonor = await honorModel.findByIdAndUpdate(
        id,
        {
            $set: updatedHonor,
        },
        { new: true, runValidators: true }
    );

    res.status(200).json({ message: "Honor Updated sucessfully", newHonor });
}
async function deleteHonor(req, res) {
    const { id } = req.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(403).json({ message: "Invalid honor id" });
    }

    const isHonorExists = await honorModel.findById(id);
    if (!isHonorExists) {
        return res.status(404).json({ message: "No Honor found!" });
    }

    await honorModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Honor deleted successfully" });
}

module.exports = {
    addHonor,
    getHonor,
    updateHonor,
    deleteHonor,
};
