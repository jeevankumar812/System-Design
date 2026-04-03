# 📊 SQL vs NoSQL Architecture - System Design (Day 6)

## 🚀 Overview
In modern system design, choosing the right database is critical for performance, scalability, and consistency. This document explains the architectural differences between **SQL (Relational Databases)** and **NoSQL (Non-Relational Databases)**, along with real-world use cases.

---

## 🧠 What is SQL?

**SQL (Structured Query Language)** databases are **relational databases** that store data in structured tables with predefined schemas.

### ✅ Key Features:
- Fixed schema (table-based)
- ACID properties (Atomicity, Consistency, Isolation, Durability)
- Strong consistency
- Supports complex joins and queries

### 📌 Examples:
- MySQL
- PostgreSQL
- Oracle

---

## 🧠 What is NoSQL?

**NoSQL (Not Only SQL)** databases are **non-relational databases** designed for scalability and flexibility.

### ✅ Key Features:
- Dynamic schema (schema-less)
- High scalability (horizontal scaling)
- Faster for large distributed data
- Supports unstructured & semi-structured data

### 📌 Types of NoSQL Databases:
- Document-based (MongoDB)
- Key-Value (Redis)
- Column-family (Cassandra)
- Graph (Neo4j)

---

## ⚔️ SQL vs NoSQL Comparison

| Feature            | SQL                          | NoSQL                         |
|--------------------|------------------------------|-------------------------------|
| Structure          | Table-based                  | Flexible / Schema-less        |
| Schema             | Fixed                        | Dynamic                       |
| Scaling            | Vertical                     | Horizontal                    |
| Consistency        | Strong (ACID)                | Eventual (BASE)               |
| Query Language     | SQL                          | No standard query language    |
| Best For           | Complex queries, transactions| Big data, real-time apps      |

---

## 🏗️ Architecture Overview

### 🟦 SQL Architecture (Relational)
- Centralized database
- Structured schema
- Transactions handled via ACID
- Typically vertically scaled

### 🟩 NoSQL Architecture (Distributed)
- Distributed system
- Data partitioning (Sharding)
- Replication for availability
- Horizontally scalable

---

## ⚙️ When to Use SQL?

Use SQL when:
- Data is structured and relational
- You need **strong consistency**
- Transactions are important (Banking, Finance systems)
- Complex joins and queries are required

📌 Example:
- Banking systems
- E-commerce order management

---

## ⚙️ When to Use NoSQL?

Use NoSQL when:
- Data is unstructured or rapidly changing
- You need **high scalability**
- Handling large volumes of data (Big Data)
- Real-time applications

📌 Example:
- Social media platforms
- Real-time analytics
- IoT systems

---

## 🧩 Real-World Mapping

| Application        | Database Type |
|--------------------|--------------|
| Banking System     | SQL          |
| Instagram / Twitter| NoSQL        |
| E-commerce         | Hybrid       |
| Chat Applications  | NoSQL        |

---

## 🧠 Key Takeaways

- SQL = Structured + Strong Consistency  
- NoSQL = Flexible + Scalable  
- Modern systems often use **Hybrid Architecture (SQL + NoSQL)**

---


