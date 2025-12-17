# ⚙️ AI Tool – Backend (MERN Stack)

The backend service for the **AI Tool Full Stack Application**, built using **Node.js, Express, and MongoDB**.  
This API handles authentication, user management, and secure communication with the frontend.

---

## 🚀 Live Backend API

👉 https://ai-tool-backend-1-1ite.onrender.com

---

## 🧠 About the Backend

This backend is responsible for:

- User authentication (Signup / Login)
- JWT token generation & verification
- Secure password hashing
- Protecting private routes
- Handling API requests from the frontend
- Connecting to MongoDB Atlas

It is designed following **real-world backend practices**, focusing on security, scalability, and clean architecture.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js
- CORS
- Render (Deployment)

---

## ✨ Features

- User Signup & Login APIs
- JWT Authentication & Authorization
- Password Hashing with bcrypt
- Protected Routes using Middleware
- Secure REST APIs
- MongoDB Atlas Integration
- Deployed on Render

---

## 🔐 Authentication Flow

1. User registers or logs in
2. Backend validates credentials
3. JWT token is generated
4. Token is sent to frontend
5. Frontend sends token in `Authorization` header
6. Backend middleware verifies token for protected routes

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8080
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 🧑‍💻 Local Setup

```
git clone https://github.com/neksha01/AI-Tool-Backend.git
cd AI-Tool-Backend
npm install
npm start
```

---

## 🔗 Related Repositories
 ### Frontend Repository
👉 https://github.com/neksha01/react-ai-tool

---


