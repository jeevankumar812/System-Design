# 📊 Database Design & Data Modeling – Smart Expense Tracker API

## 🧠 Overview

This project focuses on designing a **scalable and structured database** for an Expense Tracker system. The goal is to efficiently store, manage, and retrieve user financial data while maintaining strong relationships between entities.

The database is designed using **MongoDB (NoSQL)** with **Mongoose ODM**, following best practices for real-world backend systems.

---

## 🏗️ Core Entities

The system is built around three main entities:

1. **User**
2. **Category**
3. **Expense**

These entities are interconnected to represent real-world relationships.

---

## 👤 User Model

### 📌 Purpose
Represents an individual using the application.

### 🧾 Fields
- `name`: User's name
- `email`: Unique identifier for login
- `password`: Encrypted password

### 🔗 Relationships
- A **User can have multiple Categories**
- A **User can have multiple Expenses**

### 💡 Design Decision
Each user is isolated — meaning all data (categories & expenses) belongs strictly to that user. This ensures **data security and multi-user support**.

---

## 🗂️ Category Model

### 📌 Purpose
Used to group expenses (e.g., Food, Travel, Shopping).

### 🧾 Fields
- `name`: Category name
- `user`: Reference to the User (owner of the category)

### 🔗 Relationships
- A **Category belongs to one User**
- A **Category can have multiple Expenses**

### 💡 Design Decision
Categories are **user-specific**, not global.  
This allows:
- Custom categories per user
- Better personalization
- Avoids conflicts between users

---

## 💰 Expense Model

### 📌 Purpose
Stores individual expense records.

### 🧾 Fields
- `title`: Description of expense
- `amount`: Expense value
- `category`: Reference to Category
- `user`: Reference to User
- `date`: Timestamp of expense

### 🔗 Relationships
- An **Expense belongs to one User**
- An **Expense belongs to one Category**

### 💡 Design Decision
Each expense stores both:
- `user` → for quick filtering by user
- `category` → for grouping and analytics

This avoids complex joins and improves query performance.

---

## 🔗 Relationship Summary

| Entity    | Relationship Type | Connected To |
|----------|------------------|-------------|
| User     | One-to-Many      | Categories  |
| User     | One-to-Many      | Expenses    |
| Category | One-to-Many      | Expenses    |

---

## 🧩 Data Modeling Strategy

### 1️⃣ Referencing (Not Embedding)

We use **ObjectId references** instead of embedding documents.

### ✅ Why Referencing?
- Prevents data duplication
- Scales better with large data
- Easier to update categories without affecting expenses

---

### 2️⃣ Normalization

Data is split into separate collections:
- Users
- Categories
- Expenses

### ✅ Benefits
- Clean structure
- Avoid redundancy
- Easier maintenance

---

### 3️⃣ Query Optimization

To improve performance:
- Expenses store both `user` and `category`
- Enables fast queries like:
  - Get all expenses of a user
  - Filter by category
  - Monthly reports

---

## ⚡ Example Data Flow

1. User registers → stored in `User`
2. User creates categories → stored in `Category` with user reference
3. User adds expense:
   - Linked to `User`
   - Linked to `Category`
4. Queries:
   - Fetch expenses → filter by `user`
   - Populate category details

---

## 🔐 Data Integrity & Security

- Each record is tied to a **specific user**
- Prevents unauthorized access
- Backend middleware ensures:
  - Only the owner can access their data

---

## 🚀 Scalability Considerations

This design supports:
- Thousands of users
- Millions of expenses
- Efficient filtering & aggregation

Future improvements:
- Indexing (`user`, `category`)
- Aggregation pipelines for analytics
- Partitioning by date (for large-scale systems)

---

## 🎯 Conclusion

This database design follows:
- ✅ Real-world relationship modeling  
- ✅ Scalable NoSQL practices  
- ✅ Clean and maintainable structure  

It forms a strong foundation for building advanced features like:
- Analytics dashboards
- Budget tracking
- Financial insights

---

💡 *Understanding this design deeply will help you crack backend interviews and build production-level applications.*
