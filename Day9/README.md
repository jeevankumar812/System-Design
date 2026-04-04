# 📅 Day 9 — Database Sharding

---

## 🔹 What is Database Sharding?

**Database Sharding** is a technique used to **divide a large database into smaller, independent parts** called **shards**.

Each shard:
- Stores a portion of the data
- Operates independently
- Improves performance and scalability

---

## 🔹 Why Sharding is Needed?

When data grows:
- Single database becomes slow ❌
- High traffic causes overload ❌
- Queries take more time ❌

### Solution:
👉 Split database into multiple shards

---

## 🔹 How Sharding Works

Data is distributed across shards using a **Shard Key**.

A common method is **Hash-Based Sharding**:

```
shardIndex = userId % number_of_shards
```

---

## 🔹 Shard Mapping (Important)

```
Shard 1 → userId % 3 === 0  
Shard 2 → userId % 3 === 1  
Shard 3 → userId % 3 === 2
```

---

## 🔹 Example

| userId | Calculation | Shard |
|--------|------------|-------|
| 100 | 100 % 3 = 1 | Shard 2 |
| 101 | 101 % 3 = 2 | Shard 3 |
| 102 | 102 % 3 = 0 | Shard 1 |

---

## 🔹 Types of Sharding

### 1. Range-Based Sharding
- Data divided by ranges
- Example: IDs 1–1000 → Shard 1

### 2. Hash-Based Sharding
- Uses hash function
- Even data distribution

### 3. Directory-Based Sharding
- Uses lookup table
- Flexible but complex

---

## 🔹 Shard Key

Shard key determines where data is stored.

### Good Shard Key:
- High uniqueness
- Even distribution
- Frequently queried

### Bad Shard Key:
- Causes uneven load
- Creates hotspots

---

## 🔹 Advantages

- Horizontal scaling
- Faster queries
- Handles large data
- Better performance

---

## 🔹 Disadvantages

- Complex system
- Difficult joins across shards
- Hard to rebalance data
- Requires careful planning

---

## 🔹 Sharding vs Replication

| Feature | Sharding | Replication |
|--------|---------|------------|
| Purpose | Split data | Copy data |
| Data | Different | Same |
| Scaling | Horizontal | Read scaling |

---

## 🔹 When to Use Sharding

Use when:
- Data is very large
- High traffic systems
- Single DB cannot handle load

---

## 🔹 Summary

- Sharding = Splitting database into smaller parts
- Improves scalability and performance
- Uses shard key to distribute data
- Common strategy: Hash-based sharding

---

## 🔥 Key Formula

```
shardIndex = userId % 3
```

---

## 🚀 Final Thought

Database Sharding is essential for building **scalable and high-performance systems** used in real-world applications.