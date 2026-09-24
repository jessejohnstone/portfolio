const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.json());

let projects = [
  {
    id: 1,
    name: "AttachReady Kenya",
    technology: "Next.js",
  },
  {
    id: 2,
    name: "TakaSmart Rewards",
    technology: "React",
  },
  {
    id: 3,
    name: "Calm Corner",
    technology: "JavaScript",
  },
];

app.get("/", (req, res) => {
  res.send("Johnstone's backend is working!");
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/projects/:id", (req, res) => {
  const id = Number(req.params.id);

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return res.status(404).json({
      message: "Project not found",
    });
  }

  res.json(project);
});

app.post("/api/projects", (req, res) => {
  const newProject = {
    id: projects.length + 1,
    name: req.body.name,
    technology: req.body.technology,
  };

  projects.push(newProject);

  res.status(201).json(newProject);
});

app.put("/api/projects/:id", (req, res) => {
  const id = Number(req.params.id);

  const projectIndex = projects.findIndex(
    (project) => project.id === id
  );

  if (projectIndex === -1) {
    return res.status(404).json({
      message: "Project not found",
    });
  }

  projects[projectIndex] = {
    id,
    name: req.body.name,
    technology: req.body.technology,
  };

  res.json(projects[projectIndex]);
});

app.delete("/api/projects/:id", (req, res) => {
  const id = Number(req.params.id);

  const projectIndex = projects.findIndex(
    (project) => project.id === id
  );

  if (projectIndex === -1) {
    return res.status(404).json({
      message: "Project not found",
    });
  }

  projects.splice(projectIndex, 1);

  res.json({
    message: "Project deleted successfully",
  });
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});