# 🚀 API Design (REST vs GraphQL vs gRPC) - System Design (Day 4)

---

## 📌 What is an API?
An API (Application Programming Interface) allows communication between client and server.

---

# 🔹 1. REST API

## ✅ Definition
REST is an architectural style where resources are accessed via multiple HTTP endpoints using standard methods like GET, POST, PUT, and DELETE.

## 🔑 Key Points
- Multiple endpoints (e.g., `/users`, `/users/:id`)
- Uses HTTP methods (GET, POST, PUT, DELETE)
- Returns JSON data
- Stateless (no memory of previous request)

## 💡 Example

GET /users
POST /users
GET /users/1
DELETE /users/1


## 👍 Advantages
- Simple and widely used
- Easy to test (Postman)
- Beginner-friendly

## 👎 Disadvantages
- Over-fetching (extra data)
- Under-fetching (multiple requests needed)

## 🎯 Interview Sentence
REST uses multiple endpoints and standard HTTP methods, where the server returns fixed JSON responses.

---

# 🔹 2. GraphQL

## ✅ Definition
GraphQL is a query language for APIs that allows clients to request exactly the required data from a single endpoint.

## 🔑 Key Points
- Single endpoint (`/graphql`)
- Client controls data
- Avoids over-fetching & under-fetching
- Uses queries and mutations

## 💡 Example

query {
users {
name
email
}
}


## 👍 Advantages
- Flexible data fetching
- Efficient for complex UI
- Reduces API calls

## 👎 Disadvantages
- More complex than REST
- Harder caching
- Learning curve

## 🎯 Interview Sentence
GraphQL allows clients to fetch exactly the required data from a single endpoint, improving efficiency.

---

# 🔹 3. gRPC

## ✅ Definition
gRPC is a high-performance RPC framework that uses HTTP/2 and Protocol Buffers for efficient communication between services.

## 🔑 Key Points
- Uses HTTP/2 (faster)
- Uses Protocol Buffers (binary format)
- Supports streaming
- Uses `.proto` file (API contract)

## 💡 Example (.proto)

service UserService {
rpc GetUsers (Empty) returns (UserList);
}


## 👍 Advantages
- Very fast
- Efficient data transfer
- Ideal for microservices

## 👎 Disadvantages
- Not browser-friendly
- Hard to debug
- Requires proto file

## 🎯 Interview Sentence
gRPC is a high-performance protocol using HTTP/2 and Protocol Buffers, mainly used for communication between microservices.

---

# ⚔️ Comparison Table

| Feature | REST | GraphQL | gRPC |
|--------|------|---------|------|
| Endpoints | Multiple | Single | Service methods |
| Data Control | Server | Client | Server |
| Format | JSON | JSON | Binary |
| Speed | Medium | Medium | Fast |
| Use Case | Web APIs | Complex UI | Microservices |

---

# 🧠 When to Use

- Use REST → Simple CRUD apps  
- Use GraphQL → Complex frontend / dashboards  
- Use gRPC → Microservices / high-performance systems  

---

# 🏏 Memory Trick

- REST → Fixed menu 🍛  
- GraphQL → Custom order 🍕  
- gRPC → Internal fast communication ⚡  

---
