# 🚀 Client–Server Architecture - System Design (Day 1)

---

## 📌 Overview
Client–Server Architecture is a computing model where multiple clients request services or resources from a centralized server over a network. The server processes these requests and sends responses back to the clients.

---

## 🧠 Core Concept
- **Client** → Sends request  
- **Server** → Processes request  
- **Response** → Sent back to client  

👉 Communication happens using protocols like **HTTP/HTTPS**

---

## 🔄 Request–Response Flow


Client → HTTP Request → Server
Client ← HTTP Response ← Server


---

## 🧱 Components

### 1️⃣ Client (Presentation Layer)
The client is the interface used by users to interact with the system.

**Examples:**
- Web browsers (Chrome)
- Mobile apps
- API tools (Postman)

**Responsibilities:**
- Send requests
- Display data
- Handle user input

---

### 2️⃣ Server (Application Layer)
The server processes client requests and contains business logic.

**Examples:**
- Node.js (Express)
- Spring Boot
- Django

**Responsibilities:**
- Handle API requests
- Perform validation
- Execute business logic
- Communicate with database

---

### 3️⃣ Database (Data Layer)
Stores and manages application data.

**Examples:**
- MongoDB
- MySQL
- PostgreSQL

**Responsibilities:**
- Store data
- Retrieve data
- Update records

---

## 🏗️ Types of Client–Server Architecture

### 🔹 1. Two-Tier Architecture
Client directly communicates with the database.


Client ↔ Database


**Use Case:** Small applications

---

### 🔹 2. Three-Tier Architecture
Separates system into three layers.


Client → Server → Database


**Layers:**
- Presentation Layer
- Application Layer
- Data Layer

**Use Case:** Most web applications

---

### 🔹 3. N-Tier Architecture
Extends three-tier with multiple layers for scalability.


Client → Load Balancer → API Gateway → Services → Database


**Use Case:** Large-scale systems

---

## 🔥 Example (Node.js Backend)

```javascript
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello Client" });
});

👉 Client sends request → Server responds with JSON
