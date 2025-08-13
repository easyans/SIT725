const projectService = require("../services/projectsService");
exports.getAllProjects = (req, res, next) => {
  try {
    const items = projectService.getAllProjects();
    res.json({ data: items });
  } catch (err) {
    next(err);
  }
};

exports.getProjectById = (req, res, next) => {
  try {
    const item = projectService.getProjectById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json({ data: item });
  } catch (err) {
    next(err);
  }
};

exports.createProject = (req, res, next) => {
  try {
    const newItem = projectService.createProject(req.body);
    res.status(201).json({ data: newItem });
  } catch (err) {
    next(err);
  }
};

exports.updateProject = (req, res, next) => {
  try {
    const updated = projectService.updateProject(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json({ data: updated });
  } catch (err) {
    next(err);
  }
};

exports.deleteProject = (req, res, next) => {
  try {
    const ok = projectService.deleteProject(req.params.id);
    if (!ok) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};
