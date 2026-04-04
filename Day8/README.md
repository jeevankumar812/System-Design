# 📀 Database Replication - System Design (Day 8)

## 📌 Overview
Database Replication is the process of copying and maintaining the same data across multiple database servers (nodes). It is a fundamental concept in distributed systems used to improve availability, reliability, and performance.

---

## 🚀 Why Database Replication?

### 1. High Availability
Replication ensures that if one database server fails, other replicas can continue serving requests without downtime.

### 2. Read Scalability
Read operations can be distributed across multiple replicas, reducing load on the primary database.

### 3. Fault Tolerance
Data is duplicated across multiple nodes, reducing the risk of data loss.

### 4. Low Latency (Geo Distribution)
Replicas can be placed closer to users geographically, improving response time.

---

## 🧠 Types of Database Replication

### 1. Primary–Secondary Replication (Master–Slave)

- One **Primary Node** handles all write operations.
- Multiple **Secondary Nodes** handle read operations.
- Data is replicated from primary to secondary nodes.

#### Flow:

Client → Write → Primary
Primary → Replication → Secondary
Client → Read → Secondary


#### Advantages:
- Simple and widely used
- Improves read performance

#### Disadvantages:
- Single point of failure (Primary)
- Replication lag may occur

---

### 2. Multi-Primary Replication (Master–Master)

- Multiple nodes can handle both read and write operations.
- Data is synchronized across all nodes.

#### Advantages:
- High availability
- No single point of failure

#### Disadvantages:
- Conflict resolution required
- Complex to implement

---

## ⏱️ Replication Modes

### 1. Synchronous Replication

- Data is written to all replicas before confirming success.

#### Pros:
- Strong consistency
- No data loss

#### Cons:
- Slower performance

---

### 2. Asynchronous Replication

- Data is first written to the primary, then replicated to others later.

#### Pros:
- Faster performance
- Better user experience

#### Cons:
- Eventual consistency
- Possible replication lag

---

## ⚙️ Replication Techniques

### 1. Statement-Based Replication
- Replicates SQL queries (e.g., INSERT, UPDATE)

### 2. Row-Based Replication
- Replicates actual data changes (row-level)

### 3. Log-Based Replication
- Uses database logs (e.g., binary logs in MySQL)

---

## 🔄 Replication vs Sharding

| Feature        | Replication                     | Sharding                      |
|---------------|--------------------------------|-------------------------------|
| Purpose       | Copy data                      | Split data                    |
| Data Storage  | Same data on all nodes         | Different data per node       |
| Use Case      | High availability              | Large-scale systems           |

---

## ⚠️ Challenges in Replication

- Replication lag
- Data inconsistency
- Conflict resolution (multi-primary)
- Failover complexity

---

## 🧠 Key Concepts

### Eventual Consistency
In asynchronous replication, replicas may not have the latest data immediately but will eventually become consistent.

### Replication Lag
The delay between writing data to the primary and updating replicas.

### Failover
Automatic switching to a replica if the primary fails.

---


<<<<<<< HEAD
Database Replication is a critical concept in system design that helps build scalable, fault-tolerant, and highly available systems. It is widely used in real-world applications to handle large-scale traffic and ensure reliability.
=======
>>>>>>> 92d36e8 (Save all pending changes before rebase)
