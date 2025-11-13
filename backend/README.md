# Task Manager Backend API

Full-featured REST API with JWT authentication and task management.

## 🚀 Features

- ✅ User authentication (signup/login)
- ✅ JWT token-based authorization
- ✅ Password hashing with bcrypt
- ✅ User profile management
- ✅ Complete task CRUD operations
- ✅ Search and filter tasks
- ✅ Task statistics
- ✅ Input validation
- ✅ Error handling

## 📦 Installation
```bash
# Install dependencies
npm install

# Create .env file with:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_jwt_key
NODE_ENV=development

# Start development server
npm run dev

# Start production server
npm start
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### User Profile
- `GET /api/users/profile` - Get user profile (Protected)
- `PUT /api/users/profile` - Update profile (Protected)

### Tasks
- `GET /api/tasks` - Get all user tasks (Protected)
- `GET /api/tasks/stats` - Get task statistics (Protected)
- `GET /api/tasks/:id` - Get single task (Protected)
- `POST /api/tasks` - Create new task (Protected)
- `PUT /api/tasks/:id` - Update task (Protected)
- `DELETE /api/tasks/:id` - Delete task (Protected)

## 📝 Query Parameters for Tasks
```
GET /api/tasks?status=pending&priority=high&search=meeting&sortBy=dueDate&order=asc
```

## 🛠️ Technologies

- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Express Validator for input validation

## 👤 Author

**Sahil Rafiq**
- Email: sahilrafiq479@gmail.com
- GitHub: [@sahilrafiq](https://github.com/sahilrafiq)