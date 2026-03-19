const express = require("express");
const app = express();

app.use(express.json());

// Fake database
let data = [
  { id: 1, name: "Jeevan" },
  { id: 2, name: "Rahul" },
];

//////////////////////////////////////////////////
// 🔹 1. TWO-TIER (Client ↔ Database)
//////////////////////////////////////////////////

// No business logic (direct DB access)
app.get("/two-tier", (req, res) => {
  // Directly returning data (like client hitting DB)
  res.json({
    architecture: "Two-Tier",
    flow: "Client ↔ Database",
    data: data,
  });
});

//////////////////////////////////////////////////
// 🔹 2. THREE-TIER (Client → Server → DB)
//////////////////////////////////////////////////

// Controller (Business Logic)
const getUsers = () => {
  return data;
};

// Route
app.get("/three-tier", (req, res) => {
  const users = getUsers();

  res.json({
    architecture: "Three-Tier",
    flow: "Client → Server → Database",
    data: users,
  });
});

//////////////////////////////////////////////////
// 🔹 3. N-TIER (Client → LB → Gateway → Services → DB)
//////////////////////////////////////////////////

// Fake Load Balancer
const loadBalancer = (req, res, next) => {
  console.log("⚖️ Load Balancer: distributing request");
  next();
};

// API Gateway
const apiGateway = (req, res, next) => {
  console.log("🚪 API Gateway: routing request");
  next();
};

// Microservice (User Service)
const userService = () => {
  return data;
};

// Route
app.get(
  "/n-tier",
  loadBalancer,
  apiGateway,
  (req, res) => {
    const users = userService();

    res.json({
      architecture: "N-Tier",
      flow: "Client → LB → Gateway → Service → DB",
      data: users,
    });
  }
);

//////////////////////////////////////////////////
// SERVER
//////////////////////////////////////////////////

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});