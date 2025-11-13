# Full-Stack Task Manager

A complete full-stack web application with authentication, task management, search, and filtering capabilities.

## 🚀 Live Demo

- **Frontend:** [Will be deployed]
- **Backend API:** [Will be deployed]

## 📸 Screenshots

[Add screenshots after testing]

## ✨ Features

### Authentication
- ✅ User registration with validation
- ✅ Secure login with JWT tokens
- ✅ Password hashing with bcryptjs
- ✅ Protected routes
- ✅ Automatic token validation

### Task Management
- ✅ Create, Read, Update, Delete tasks
- ✅ Task priorities (Low, Medium, High)
- ✅ Task status tracking (Pending, In Progress, Completed)
- ✅ Due dates with visual indicators
- ✅ Task descriptions

### Dashboard
- ✅ Real-time task statistics
- ✅ Visual task cards with color coding
- ✅ Responsive grid layout
- ✅ User profile display

### Search & Filter
- ✅ Search tasks by title and description
- ✅ Filter by status (Pending, In Progress, Completed)
- ✅ Filter by priority (Low, Medium, High)
- ✅ Combine multiple filters
- ✅ Clear filters button

### User Profile
- ✅ View and edit profile information
- ✅ Update name and bio
- ✅ Account information display
- ✅ Profile avatar with initials

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling (responsive design)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Express Validator** - Input validation
- **CORS** - Cross-origin resource sharing

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (Local or Atlas)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/sahilrafiq/fullstack-task-manager.git
cd fullstack-task-manager
```

### 2. Backend Setup
```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
# Add the following variables:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_jwt_key_change_in_production
NODE_ENV=development

# Start backend server
npm run dev
```

Backend will run on `http://localhost:5000`

### 3. Frontend Setup
```bash
# Navigate to frontend (from root)
cd frontend

# Install dependencies
npm install

# Start frontend
npm start
```

Frontend will run on `http://localhost:3000`

### 4. MongoDB Setup

**Option A: Local MongoDB**
- Download and install MongoDB Community Edition
- MongoDB will run on `mongodb://localhost:27017`

**Option B: MongoDB Atlas (Cloud)**
1. Create account at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string
4. Update `MONGODB_URI` in backend `.env`

## 🔗 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/signup` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |

### User Profile
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/users/profile` | Get user profile | Yes |
| PUT | `/api/users/profile` | Update profile | Yes |

### Tasks
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/tasks` | Get all user tasks | Yes |
| GET | `/api/tasks/stats` | Get task statistics | Yes |
| GET | `/api/tasks/:id` | Get single task | Yes |
| POST | `/api/tasks` | Create new task | Yes |
| PUT | `/api/tasks/:id` | Update task | Yes |
| DELETE | `/api/tasks/:id` | Delete task | Yes |

### Query Parameters (GET /api/tasks)
```
GET /api/tasks?status=pending&priority=high&search=meeting&sortBy=dueDate&order=asc
```

## 🔐 Security Features

- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ JWT token authentication (7-day expiration)
- ✅ Protected API routes with middleware
- ✅ Input validation on both client and server
- ✅ CORS configuration
- ✅ HTTP-only cookies support (can be enabled)
- ✅ XSS protection through input sanitization

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Tablet optimization
- ✅ Desktop layouts
- ✅ Flexible grid system
- ✅ Touch-friendly UI elements

## 🎯 Code Quality

- ✅ Modular component architecture
- ✅ Separation of concerns
- ✅ RESTful API design
- ✅ Error handling
- ✅ Input validation
- ✅ Clean code practices
- ✅ Consistent naming conventions

## 🚀 Scalability Considerations

### Current Architecture
- Monolithic backend with clear separation of concerns
- Component-based frontend architecture
- MongoDB for flexible schema design

### Future Enhancements for Production Scale

1. **Backend Scalability**
   - Implement Redis for session management and caching
   - Use PM2 or Docker for process management
   - Add rate limiting (express-rate-limit)
   - Implement API versioning
   - Add request/response compression (gzip)
   - Set up load balancing (Nginx/AWS ELB)

2. **Database Optimization**
   - Add database indexing for frequently queried fields
   - Implement connection pooling
   - Use MongoDB replica sets for high availability
   - Add database query optimization
   - Consider sharding for horizontal scaling

3. **Frontend Optimization**
   - Code splitting with React.lazy()
   - Implement service workers for offline support
   - Add state management (Redux/Zustand) for complex state
   - Use React.memo() for expensive components
   - Implement virtual scrolling for large lists
   - Add CDN for static assets

4. **Security Enhancements**
   - Implement refresh token rotation
   - Add rate limiting per user
   - Set up WAF (Web Application Firewall)
   - Implement CSP (Content Security Policy)
   - Add security headers (Helmet.js)
   - Set up intrusion detection

5. **DevOps & Monitoring**
   - CI/CD pipeline (GitHub Actions/Jenkins)
   - Containerization with Docker
   - Kubernetes for orchestration
   - Logging (Winston/Morgan)
   - Monitoring (Prometheus/Grafana)
   - Error tracking (Sentry)
   - Performance monitoring (New Relic)

6. **Microservices Architecture (Future)**
   - Split auth service
   - Separate task service
   - API Gateway (Kong/AWS API Gateway)
   - Message queue (RabbitMQ/Kafka)
   - Event-driven architecture

## 📁 Project Structure
```
fullstack-task-manager/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   └── taskController.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Task.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── userRoutes.js
│   │   │   └── taskRoutes.js
│   │   └── server.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── Login.js
│   │   │   │   └── Signup.js
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.js
│   │   │   │   └── PrivateRoute.js
│   │   │   └── tasks/
│   │   │       ├── TaskCard.js
│   │   │       ├── TaskFilters.js
│   │   │       ├── TaskList.js
│   │   │       ├── TaskModal.js
│   │   │       └── TaskStats.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── Home.js
│   │   │   └── Profile.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── .gitignore
└── README.md
```

## 🧪 Testing

### Manual Testing Checklist

**Authentication:**
- [ ] User can register with valid credentials
- [ ] Duplicate email shows error
- [ ] User can login with correct credentials
- [ ] Wrong password shows error
- [ ] Token persists after page refresh
- [ ] Logout clears token

**Task Management:**
- [ ] User can create new task
- [ ] User can edit existing task
- [ ] User can delete task
- [ ] User can change task status
- [ ] User can set task priority
- [ ] Due dates display correctly

**Search & Filter:**
- [ ] Search finds tasks by title
- [ ] Status filter works correctly
- [ ] Priority filter works correctly
- [ ] Multiple filters work together
- [ ] Clear filters resets all filters

**Profile:**
- [ ] User can view profile
- [ ] User can update name and bio
- [ ] Profile changes persist
- [ ] Email is read-only

## 🐛 Known Issues

- None currently

## 🔄 Future Improvements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] Task categories/tags
- [ ] Task collaboration (assign to multiple users)
- [ ] File attachments for tasks
- [ ] Task comments
- [ ] Activity timeline
- [ ] Export tasks (CSV/PDF)
- [ ] Dark mode
- [ ] Drag-and-drop task reordering
- [ ] Notifications
- [ ] Calendar view

## 👤 Author

**Sahil Rafiq**
- Email: sahilrafiq479@gmail.com
- GitHub: [@sahilrafiq](https://github.com/sahilrafiq)
- LinkedIn: [Sahil Rafiq](https://www.linkedin.com/in/sahil-rafiq)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Assignment provided by Primetrade.ai
- Built as part of Frontend Developer Internship application
- Completed in 3 days as per requirement

---

**Built with ❤️ using MERN Stack**