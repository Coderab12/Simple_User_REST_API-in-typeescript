"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexcontroller_1 = require("../controller/indexcontroller");
const router = (0, express_1.Router)();
// Home route handler
router.get("/", indexcontroller_1.homeHandeller);
// Create user route
router.post("/", indexcontroller_1.createUser);
// Update user route
router.patch("/", indexcontroller_1.updateUser);
// Delete user route
router.delete("/", indexcontroller_1.deleteUser);
exports.default = router;
