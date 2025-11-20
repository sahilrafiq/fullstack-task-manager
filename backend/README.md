# Task Manager Backend API

Full-featured REST API with JWT authentication, task management, and MongoDB integration.

## 🚀 Live Demo

**Backend API:** [https://task-manager-api-jq3i.onrender.com](https://task-manager-api-jq3i.onrender.com)

**Frontend Application:** [https://heartfelt-marshmallow-dfbdc7.netlify.app](https://heartfelt-marshmallow-dfbdc7.netlify.app)

> **Note:** Hosted on Render's free tier. First request after inactivity may take 30-60 seconds as the service spins up.

## ✨ Features

### Authentication & Security
- ✅ User registration with email validation
- ✅ Secure login with JWT tokens
- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ JWT token with 7-day expiration
- ✅ Protected routes with authentication middleware
- ✅ CORS configuration for cross-origin requests

### User Management
- ✅ User profile management
- ✅ Update name and bio
- ✅ View account information

### Task Management
- ✅ Complete CRUD operations (Create, Read, Update, Delete)
- ✅ Task priorities (Low, Medium, High)
- ✅ Task status tracking (Pending, In Progress, Completed)
- ✅ Due dates support
- ✅ Task descriptions
- ✅ User-specific tasks (users only see their own tasks)

### Advanced Features
- ✅ Search tasks by title and description
- ✅ Filter tasks by status and priority
- ✅ Sort tasks by multiple fields
- ✅ Task statistics and counts
- ✅ Input validation with Express Validator
- ✅ Comprehensive error handling

## 📦 Installation

### Prerequisites
- Node.js v14 or higher
- MongoDB (local or Atlas)
- npm or yarn

### Local Development Setup

```bash
# Install dependencies
npm install

# Create .env file with the following variables:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
# For MongoDB Atlas use:
# MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/taskmanager?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_in_production
NODE_ENV=development

# Start development server with auto-reload
npm run dev

# Start production server
npm start
```

The API will run on `http://localhost:5000`

## 🚀 Deployment to Render

### Step-by-Step Deployment

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure Service**
   - **Name:** `task-manager-api`
   - **Root Directory:** `backend`
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node src/server.js`
   - **Instance Type:** Free

4. **Add Environment Variables**
   ```
   MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/taskmanager?retryWrites=true&w=majority
   JWT_SECRET=your_super_secret_jwt_key_change_in_production
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete

### MongoDB Atlas Setup

1. Create account at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create a free M0 cluster
3. Create database user with username and password
4. Whitelist IP addresses (0.0.0.0/0 for all IPs)
5. Get connection string from "Connect" → "Drivers"
6. Replace `<password>` with your database user password
7. Add `/taskmanager` before the `?` in the connection string

## 🔗 API Endpoints

### Authentication Endpoints

#### Register New User
```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### User Profile Endpoints

#### Get User Profile
```http
GET /api/users/profile
Authorization: Bearer <token>
```

#### Update User Profile
```http
PUT /api/users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "bio": "Full-stack developer"
}
```

### Task Endpoints

#### Get All Tasks
```http
GET /api/tasks
Authorization: Bearer <token>
```

**Query Parameters:**
- `status` - Filter by status (pending, in_progress, completed)
- `priority` - Filter by priority (low, medium, high)
- `search` - Search in title and description
- `sortBy` - Sort field (createdAt, dueDate, priority)
- `order` - Sort order (asc, desc)

**Example:**
```http
GET /api/tasks?status=pending&priority=high&search=meeting&sortBy=dueDate&order=asc
```

#### Get Task Statistics
```http
GET /api/tasks/stats
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "stats": {
    "total": 15,
    "pending": 5,
    "in_progress": 7,
    "completed": 3
  }
}
```

#### Get Single Task
```http
GET /api/tasks/:id
Authorization: Bearer <token>
```

#### Create New Task
```http
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Complete project documentation",
  "description": "Write comprehensive README files",
  "priority": "high",
  "status": "pending",
  "dueDate": "2025-12-31"
}
```

#### Update Task
```http
PUT /api/tasks/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated task title",
  "status": "in_progress"
}
```

#### Delete Task
```http
DELETE /api/tasks/:id
Authorization: Bearer <token>
```

## 🛠️ Technologies

### Core
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

### Security & Authentication
- **JWT (jsonwebtoken)** - Token-based authentication
- **Bcrypt.js** - Password hashing
- **Express Validator** - Input validation
- **CORS** - Cross-origin resource sharing

### Development Tools
- **dotenv** - Environment variable management
- **nodemon** - Auto-restart during development

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── userController.js     # User management
│   │   └── taskController.js     # Task CRUD operations
│   ├── middleware/
│   │   └── auth.js               # JWT authentication middleware
│   ├── models/
│   │   ├── User.js               # User schema
│   │   └── Task.js               # Task schema
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   ├── userRoutes.js         # User endpoints
│   │   └── taskRoutes.js         # Task endpoints
│   └── server.js                 # Express app setup
├── .env                          # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## 🔐 Security Features

### Password Security
- Passwords hashed using bcrypt with 10 salt rounds
- Passwords never stored in plain text
- Password validation on registration (minimum length, etc.)

### JWT Authentication
- Tokens expire after 7 days
- Tokens signed with secret key
- Tokens required for protected routes
- Automatic token validation on each request

### Input Validation
- Email format validation
- Required field validation
- Data type validation
- Sanitization to prevent injection attacks

### CORS Configuration
- Configured to allow specific origins
- Credentials support enabled
- Prevents unauthorized cross-origin requests

## 📊 Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  bio: String (optional),
  createdAt: Date,
  updatedAt: Date
}
```

### Task Model
```javascript
{
  title: String (required),
  description: String,
  status: String (enum: pending, in_progress, completed),
  priority: String (enum: low, medium, high),
  dueDate: Date,
  user: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

## 🧪 Testing the API

### Using cURL

```bash
# Register user
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'

# Get tasks (replace TOKEN with actual token)
curl -X GET http://localhost:5000/api/tasks \
  -H "Authorization: Bearer TOKEN"
```

### Using Postman

1. Import the API endpoints
2. Set up environment variables for base URL and token
3. Test each endpoint with different scenarios

## 🐛 Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [] // Optional validation errors
}
```

### Common HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (authentication required)
- `404` - Not Found
- `500` - Internal Server Error

## 🔄 Environment Variables

### Required Variables
```env
PORT=5000                          # Server port
MONGODB_URI=mongodb://...          # MongoDB connection string
JWT_SECRET=your_secret_key         # JWT signing secret
NODE_ENV=development               # Environment (development/production)
```

## 📝 Available Scripts

### `npm start`
Starts the production server

### `npm run dev`
Starts development server with nodemon (auto-restart on file changes)

### `npm install`
Installs all dependencies

## 🚀 Performance Optimization

Current optimizations:
- ✅ Database indexing on frequently queried fields
- ✅ Efficient MongoDB queries
- ✅ Proper error handling to prevent crashes
- ✅ Environment-based configuration

Future improvements:
- [ ] Redis caching for frequently accessed data
- [ ] Database query optimization
- [ ] Rate limiting to prevent abuse
- [ ] Request/response compression
- [ ] API versioning

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify MongoDB is running (local) or accessible (Atlas)
- Check connection string format
- Ensure database user has proper permissions
- Whitelist IP addresses in MongoDB Atlas

### JWT Token Issues
- Verify JWT_SECRET is set in environment variables
- Check token expiration (7 days)
- Ensure token is sent in Authorization header as "Bearer TOKEN"

### CORS Errors
- Verify frontend URL is in CORS whitelist
- Check that credentials option is enabled
- Ensure preflight requests are handled

## 👤 Author

**Sahil Rafiq**
- Email: sahilrafiq479@gmail.com
- GitHub: [@sahilrafiq](https://github.com/sahilrafiq)
- LinkedIn: [Sahil Rafiq](https://www.linkedin.com/in/sahil-rafiq)

## 📄 License

This project is part of the Full-Stack Task Manager and is open source under the MIT License.

---

**Built with ❤️ using Node.js & Express**