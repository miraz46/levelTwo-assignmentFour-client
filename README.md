# 📘 Minimal Library Management System – Frontend


 **About** : A TypeScript-based REST API backend for managing books and borrow records in a library system. Built with Express.js, MongoDB, and Zod for validation.

**🛠 Tech Stack** :
- 
  - Node.js
  - Express.js
  - TypeScript
  - MongoDB (Mongoose)
  - Zod (Schema Validation)
  - JWT (Authentication)
  - CORS


**🚀 Getting Started** :
- 
  **Prerequisites**
  - Node.js (v18+)
  - MongoDB Atlas or Local


 **Install Dependencies**
  - cd backend
  - npm install
  

- **Validation & Error Handling**:
  - Schema-level validation using Mongoose
  - API input validation
  - Proper HTTP status codes and error responses
**📌 Features**:
- **✅ Book Management**:
  - Create, update, delete books
  - Get single or all books
  - Filter, sort, and paginate


- **✅ Borrow Module**:
  - Borrow books with due date and quantity
  - View borrow summary (aggregated by book)

- **✅ Auth Middleware (Optional)**:
  - Protect private routes using JWT
  - give me this at readme.md format

- **✅ User Interface**:
  - Fully responsive (mobile/tablet/desktop)
  - Toast notifications for actions
  - Helmet for dynamic page titles

- **📡 API Integration**:
  - Uses RTK Query for API calls
  - baseQuery is configured using VITE_API_URL
  - Tags and cache invalidation enabled