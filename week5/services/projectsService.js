let projects = [
  { id: 1, name: "Kitten 1", description: "Demo description about kitten 1" },
  { id: 2, name: "Kitten 2", description: "Demo description about kitten 2" },
  { id: 2, name: "Kitten 3", description: "Demo description about kitten 3" },
];

const getAllProjects = () => projects;

const getProjectById = (id) => projects.find((p) => p.id === Number(id));

const createProject = (data) => {
  const newProject = {
    id: projects.length ? projects[projects.length - 1].id + 1 : 1,
    ...data,
  };
  projects.push(newProject);
  return newProject;
};

const updateProject = (id, data) => {
  const idx = projects.findIndex((p) => p.id === Number(id));
  if (idx === -1) return null;
  projects[idx] = { ...projects[idx], ...data };
  return projects[idx];
};

const deleteProject = (id) => {
  const idx = projects.findIndex((p) => p.id === Number(id));
  if (idx === -1) return false;
  projects.splice(idx, 1);
  return true;
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
