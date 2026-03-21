# 🔐 HTTP vs HTTPS - System Design ( Day 2)

---

## 📌 Overview

This project demonstrates the practical difference between **HTTP (HyperText Transfer Protocol)** and **HTTPS (HyperText Transfer Protocol Secure)** using a Node.js backend.

It includes:
- 🌐 HTTP Server (Port 5000)
- 🔐 HTTPS Server (Port 5443)
- 🔁 Automatic Redirection from HTTP → HTTPS
- 📡 API Endpoints for testing

---

## 🎯 Objective

- Understand how HTTP and HTTPS work
- Learn SSL/TLS encryption basics
- Implement secure communication in Node.js
- Observe real-time differences between secure and insecure protocols

---

## 🧠 What is HTTP?

**HTTP (HyperText Transfer Protocol)** is a protocol used for communication between client and server.

### ❌ Characteristics:
- Data is sent in **plain text**
- No encryption
- Vulnerable to attacks (MITM, sniffing)
- Uses port **80**

### 📦 Example:
```http
GET /data HTTP/1.1
Host: example.com
