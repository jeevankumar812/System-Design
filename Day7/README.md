# 🚀 Database Indexing & Query Optimization - System Design (Day 7)

## 📌 Overview
Database Indexing and Query Optimization are core techniques used to **improve database performance**. They help reduce query execution time, minimize disk I/O, and ensure efficient data retrieval in both relational and NoSQL databases.

---

# 🔍 What is Database Indexing?

Database Indexing is a technique used to **speed up data retrieval operations** by creating a separate data structure that stores:

- Indexed field/column values  
- Pointer/reference to actual data  

👉 Without index → Full Table Scan (slow)  
👉 With index → Direct lookup (fast)

---

## ⚙️ Internal Working

Most databases (like MySQL, MongoDB) use:

- **B+ Tree Structure**
  - Balanced tree
  - Sorted data
  - Search complexity: `O(log n)`
  - Efficient for range queries

---

# 🧠 Types of Indexing

---

## 1. Primary Index
- Automatically created on primary key
- Ensures uniqueness
- No NULL values allowed
- Only one per table

---

## 2. Secondary (Non-Clustered) Index
- Created manually on non-primary columns
- Stores pointer to actual data
- Multiple allowed

---

## 3. Clustered Index
- Data stored in sorted order of index
- Leaf nodes contain actual data
- Only one clustered index per table

---

## 4. Composite (Multi-column) Index
- Index on multiple columns

### Left Prefix Rule:
Index works only if query starts from first column

Example:

(name, age)

- `name` → ✅
- `name + age` → ✅
- `age only` → ❌

---

## 5. Unique Index
- Ensures all values are unique
- Prevents duplicate entries

---

## 6. Full-Text Index
- Used for searching large text data
- Supports keyword-based search

---

## 7. Hash Index
- Uses hash function
- Very fast for equality (`=`)
- Not suitable for range queries

---

# 🌐 MongoDB Index Types

---

## 1. Single Field Index
- Index on one field
- Used for simple queries

---

## 2. Compound Index
- Index on multiple fields
- Follows left prefix rule

---

## 3. Multikey Index
- Used for array fields
- Indexes each element separately

---

## 4. Text Index
- Used for text search
- Supports keyword matching

---

## 5. Geospatial Index
- Used for location-based queries
- Supports distance and proximity search

---

## 6. Hashed Index
- Uses hash function
- Efficient for equality queries
- Used in sharding

---

## 7. TTL Index (Time-To-Live)
- Automatically deletes documents after specified time
- Used for sessions, logs, OTP

---

# ⚡ What is Query Optimization?

Query Optimization is the process of executing queries in the **most efficient way possible** by minimizing:

- Data scanned
- Execution time
- Resource usage

---

## ⚙️ How Query Optimization Works

1. Query Parsing  
2. Query Analysis  
3. Cost Estimation  
4. Execution Plan Selection  
5. Query Execution  

---

# 🚀 Query Optimization Techniques

---

## 1. Use Proper Indexing
- Ensures faster data lookup
- Avoids full table scans

---

## 2. Avoid Full Table Scan
- Use filters in queries
- Check using execution plans

---

## 3. Select Required Columns Only

SELECT name, email FROM users;

✔ Reduces data transfer

---

## 4. Use WHERE Clause Efficiently
- Filter data early
- Reduce result size

---

## 5. Optimize Sorting
- Use index on sorted fields
- Avoid in-memory sorting

---

## 6. Avoid Functions on Indexed Columns
❌ Index not used if functions applied

---

## 7. Limit Data Retrieval

LIMIT 10

✔ Improves performance

---

## 8. Optimize Joins
- Index join columns
- Reduce join complexity

---

# 🔍 Query Analysis Tools

## EXPLAIN (SQL / MongoDB)

Used to analyze query execution:

- Shows index usage
- Displays execution plan
- Helps detect performance issues

---

## Key Terms

| Term | Meaning |
|------|--------|
| COLLSCAN | Full scan (slow) |
| IXSCAN | Index used (fast) |
| nReturned | Number of results |
| docsExamined | Efficiency |

---

# ⚠️ Important Considerations

- Too many indexes slow down writes  
- Indexes consume extra storage  
- Not useful for low-cardinality fields  
- Balance between read and write performance  

---

# 🏁 Summary

- Indexing improves **read performance**
- Query Optimization ensures **efficient execution**
- Both are critical for **scalable backend systems**

---

# 🧠 Key Insight

> Indexing = Speed  
> Query Optimization = Intelligence  

Together they make databases **fast and efficient**
