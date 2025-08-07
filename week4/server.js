const mongoose = require("mongoose"); // Keep only one
var express = require("express");
var app = express();
var port = process.env.port || 3004;

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/myprojectDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Schema and Model
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

// New Schema and Model for Form Data
const UserDataSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const UserData = mongoose.model("UserData", UserDataSchema);

// New API endpoint to handle form submission
app.post("/api/user", async (req, res) => {
  try {
    const newUser = new UserData(req.body);
    await newUser.save();
    res.json({ statusCode: 201, message: "User data submitted successfully" });
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(409)
        .json({ statusCode: 409, message: "Email already exists" });
    }
    res.status(500).json({
      statusCode: 500,
      message: "Error submitting user data",
      error: err,
    });
  }
});

const Project = mongoose.model("Project", ProjectSchema);

// Sample data
const sampleProjects = [
  {
    title: "Kitten 1",
    image: "images/kitten.jpg",
    link: "About Kitten 1",
    description: "Demo description about kitten 1",
  },
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    description: "Demo description about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    description: "Demo description about kitten 3",
  },
];

// Insert sample projects once
Project.insertMany(sampleProjects)
  .then(() => {
    console.log("Sample projects inserted successfully");
  })
  .catch((err) => {
    console.error("Error inserting sample projects:", err);
  });

// API route
app.get("/api/projects", async (req, res) => {
  const projects = await Project.find({});
  res.json({ statusCode: 200, data: projects, message: "Success" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
