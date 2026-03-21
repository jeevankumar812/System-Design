# 🌐 DNS Resolution Process – System Design (Day 3)

---

## 📌 What is DNS?

DNS (**Domain Name System**) is a distributed system that translates human-readable domain names into IP addresses.


google.com → 142.250.183.14


- Humans use domain names  
- Machines use IP addresses  

---

## 🚀 DNS Resolution Flow

When a user enters:


https://google.com


The system performs DNS resolution.

---

## 🔁 Step-by-Step Process

### 1️⃣ Browser Cache Check
**What:** Browser stores DNS records temporarily  

**Working:**
- Checks if domain exists in cache  
- If yes → return IP  
- If no → go to OS cache  

---

### 2️⃣ OS Cache Check
**What:** OS-level DNS storage  

**Working:**
- Stores previously resolved domains  
- Command:

ipconfig /displaydns

- If found → return IP  
- Else → go to resolver  

---

### 3️⃣ Local DNS Resolver (ISP)
**What:** Recursive DNS server (Jio, Airtel, etc.)  

**Working:**
- Receives request from client  
- Checks its cache  
- If not found → queries DNS hierarchy  

---

### 4️⃣ Root DNS Server
**What:** Top-level DNS server  

**Working:**
- Identifies TLD server  
- Example:

.com → TLD server

- Does not return IP  

---

### 5️⃣ TLD Server
**What:** Manages domain extensions (.com, .org, .in)  

**Working:**
- Directs request to authoritative server  
- Example:

google.com → Authoritative DNS


---

### 6️⃣ Authoritative DNS Server
**What:** Final source of truth  

**Working:**
- Contains actual DNS records  
- Returns IP:

google.com → 142.250.183.14


---

### 7️⃣ Response Back
**What:** IP travels back to client  

**Working:**

Authoritative → TLD → Resolver → Browser

- Each layer caches result (TTL)

---

### 8️⃣ HTTP Request Initiation
**What:** Communication with server  

**Working:**
- Browser uses IP  
- Establishes TCP connection  
- Sends HTTP/HTTPS request  

---

## 📊 Flow Diagram


Browser
↓
OS Cache
↓
Resolver
↓
Root
↓
TLD
↓
Authoritative
↓
IP Address
↓
HTTP Request


---

## ⚡ Key Concepts

### 🔹 DNS Caching
- Browser cache  
- OS cache  
- ISP cache  

---

### 🔹 Recursive vs Iterative
- Recursive → Resolver does all work  
- Iterative → Step-by-step queries  

---

### 🔹 DNS Records

| Type  | Description        |
|------|--------------------|
| A    | Domain → IPv4      |
| AAAA | Domain → IPv6      |
| CNAME| Alias              |
| MX   | Mail server        |

---

### 🔹 TTL (Time To Live)
- Defines cache duration  
- Improves performance  

---

## 💻 Project (DNS Simulator)

This project simulates DNS resolution:

- Browser cache  
- OS cache  
- Resolver  
- Root, TLD, Authoritative servers  
- Terminal logs for each step  

---

## ▶️ Run Project


npm install
npm run dev


---

## 🌐 API


http://localhost:5000/dns/resolve?domain=google.com


---

## 🖥️ Sample Output


🔍 Resolving: google.com

1️⃣ Cache Check
❌ Not in Cache

2️⃣ DNS Resolver Started

3️⃣ Root → .com TLD

4️⃣ TLD (.com) → Authoritative

5️⃣ Query Authoritative Server
✅ IP Found: 142.250.183.14

6️⃣ Stored in Cache

7️⃣ Response Sent

8️⃣ Connecting to 142.250.183.14


---

## 🎯 Why DNS is Important?

- Human-friendly internet  
- Fast via caching  
- Distributed system  
- Used in CDNs, load balancing  

---
