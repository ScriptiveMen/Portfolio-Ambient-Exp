const express = require("express");
const honorController = require("../controllers/honor.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const validations = require("../middlewares/validator");

const router = express.Router();

// POST /api/admin/honors
router.post(
    "/",
    authMiddleware,
    validations.honorValidator,
    honorController.addHonor
);

// GET /api/admin/honors
router.get("/", honorController.getHonor);

// PATCH /api/admin/honors/:id
router.patch("/:id", authMiddleware, honorController.updateHonor);

// DELETE /api/admin/honors/:id
router.delete("/:id", authMiddleware, honorController.deleteHonor);

module.exports = router;
