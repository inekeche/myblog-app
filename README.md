# 📝 MyBlog App

A full-featured **MERN (MongoDB, Express.js, React.js, Node.js)** blog application that supports user authentication, CRUD operations for posts and categories, image uploads, pagination, search/filtering, and comments.

---

## 🚀 Features

- ✅ User Registration & Login (JWT Auth)
- ✅ Create, Read, Update, Delete Blog Posts
- ✅ Category Management
- ✅ Upload & display featured images
- ✅ Pagination and search functionality
- ✅ Comment system per blog post
- ✅ Optimistic UI & loading/error handling
- ✅ RESTful API built with Express + Mongoose
- ✅ Responsive React frontend with Tailwind CSS

---

## 📂 Project Structure

myblog-app/
├── client/ # React Frontend (Vite + Tailwind)
│ ├── components/ # PostForm, PostList, Navbar, etc.
│ ├── context/ # Global state for posts & categories
│ ├── api/ # API service (Axios)
│ ├── hooks/ # Custom hooks
│ └── App.jsx
├── server/ # Node.js + Express Backend
│ ├── models/ # Post, Category, User, Comment
│ ├── routes/ # All RESTful API endpoints
│ ├── middleware/ # Auth, validation, upload
│ └── server.js
├── uploads/ # Image storage
├── .env
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🛠️ Getting Started

### 📌 Prerequisites

- Node.js v18+
- MongoDB local or Atlas cloud
- npm or yarn

### 📦 Install Dependencies

#### Server:
```bash
cd server
npm install
Client:
bash
Copy
Edit
cd client
npm install
🧪 Run the App
Start Backend:
bash
Copy
Edit
cd server
npm run dev
Start Frontend:
bash
Copy
Edit
cd client
npm run dev
⚙️ .env Configuration
Create .env in the server/ directory:

ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/myblog-app
JWT_SECRET=your_jwt_secret
🔗 API Endpoints
📝 Posts
GET /api/posts – Get all posts (with pagination, search)

POST /api/posts – Create a new post

PUT /api/posts/:id – Edit a post

DELETE /api/posts/:id – Delete post

📂 Categories
GET /api/categories – Get all categories

POST /api/categories – Add a new category

👤 Auth
POST /api/auth/register – Register new user

POST /api/auth/login – Login and get token

💬 Comments
GET /api/comments/:postId – Get comments for a post

POST /api/comments/:postId – Add a comment

📸 Image Upload
Post image uploads handled via multer middleware

Uploaded images stored in /uploads and served statically

🌐 Deployment
You can deploy with:

Frontend: Vercel

Backend: Render or Heroku

Database: MongoDB Atlas

Make sure to:

Set environment variables on host

Enable CORS in server.js

🧑‍💻 Author
Built with 💡 by Felix Ineke

📜 License
This project is open-source and free to use.
