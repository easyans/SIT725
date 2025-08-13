const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", Controllers.projectsController.getAllProjects);
router.get("/:id", Controllers.projectsController.getProjectById);
router.post("/", Controllers.projectsController.createProject);
router.put("/:id", Controllers.projectsController.updateProject);
router.delete("/:id", Controllers.projectsController.deleteProject);

module.exports = router;
