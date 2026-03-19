// Import express
const express = require("express");

// Create app
const app = express();

// Middleware to read JSON
app.use(express.json());

// In-memory data (acts like database)
let students = [
  { id: 1, name: "Jeevan" },
  { id: 2, name: "Rahul" },
];

// ================= ROUTES ================= //

// ✅ GET all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// ✅ GET student by ID
app.get("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found",
    });
  }

  res.json(student);
});

// ✅ POST add new student
app.post("/api/students", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name is required",
    });
  }

  const newStudent = {
    id: students.length + 1,
    name,
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    data: newStudent,
  });
});

// ✅ DELETE student
app.delete("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Student not found",
    });
  }

  const deletedStudent = students.splice(index, 1);

  res.json({
    success: true,
    message: "Student deleted",
    data: deletedStudent,
  });
});

// ================= SERVER ================= //

const PORT = 5000;


app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});