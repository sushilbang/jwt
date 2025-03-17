# 🔐 React Authentication System with JWT & MongoDB

This project is a **JWT-based authentication system** built using:

- **Frontend:** React (Vite) + Context API + Tailwind CSS + React Toastify
- **Backend:** Node.js + Express.js + MongoDB (Mongoose) + JWT

## 🚀 Features

- ✅ **User Registration** (Stores hashed passwords using bcrypt)
- ✅ **User Login** (Generates JWT Token)
- ✅ **Protected Routes** (Using JWT authentication middleware)
- ✅ **Persistent Authentication** (Token stored in localStorage)
- ✅ **User Logout**
- ✅ **Real-time Notifications** (Using React Toastify for popups)

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/auth-jwt-system.git
cd auth-jwt-system
```

### 2️⃣ Install Dependencies
#### 🔹 Backend
```sh
cd server
npm install
```

#### 🔹 Frontend
```sh
cd client
npm install
```

---

## 🛠️ Configuration

### 🔹 Backend - Create a **.env** File in `/server` Directory
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 🔹 Frontend - Set Proxy (Already Configured in `vite.config.js`)

Vite is set to proxy `/api` requests to `http://localhost:5000`.

```js
server: {
  proxy: {
    "/api": {
      target: "http://localhost:5000",
      changeOrigin: true,
      secure: false,
    },
  },
},
```

---

## ▶️ Running the App

### Start Backend
```sh
cd server
npm run dev
```

### Start Frontend
```sh
cd client
npm run dev
```

---

## 🏗️ Project Structure

```
📦 auth-jwt-system
 ┣ 📂 client (React Frontend)
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 context
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ App.js
 ┃ ┃ ┗ main.jsx
 ┃ ┣ package.json
 ┃ ┗ vite.config.js
 ┣ 📂 server (Node.js Backend)
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 middleware
 ┃ ┣ server.js
 ┃ ┣ .env
 ┃ ┗ package.json
```

---

## 🔑 API Endpoints

### 📝 Authentication Routes

| Method | Endpoint        | Description               |
|--------|----------------|---------------------------|
| POST   | `/api/auth/register` | Register a new user      |
| POST   | `/api/auth/login`    | Log in and get JWT token |
| GET    | `/api/auth/me`       | Get logged-in user info  |

---

## 🎨 Frontend - Toast Notifications Example

```js
import { toast } from "react-toastify";

toast.success("Login successful! 🎉");
toast.error("Invalid credentials! ❌");
```

---

## 🤝 Contributing
Feel free to submit issues or pull requests. 🚀

---

## 📜 License
This project is licensed under the MIT License.

