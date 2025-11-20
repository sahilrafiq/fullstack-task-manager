# Task Manager Frontend

React-based frontend application with authentication, task management, and responsive design.

## 🚀 Live Demo

**Live Application:** [https://heartfelt-marshmallow-dfbdc7.netlify.app](https://heartfelt-marshmallow-dfbdc7.netlify.app)

**Backend API:** [https://task-manager-api-jq3i.onrender.com](https://task-manager-api-jq3i.onrender.com)

## ✨ Features

- ✅ User authentication (Login/Signup)
- ✅ Protected routes with automatic redirects
- ✅ Task dashboard with real-time statistics
- ✅ Create, edit, delete tasks
- ✅ Search tasks by title and description
- ✅ Filter by status and priority
- ✅ User profile management
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern UI with CSS3
- ✅ Loading states and error handling
- ✅ Token-based authentication with automatic refresh

## 📦 Installation

### Prerequisites
- Node.js v14 or higher
- npm or yarn

### Local Development Setup

```bash
# Install dependencies
npm install

# Create .env file (optional for local development)
# Add this line to use local backend:
REACT_APP_API_URL=http://localhost:5000/api

# Start development server
npm start
```

The app will run on `http://localhost:3000`

### Production Build

```bash
# Build for production
npm run build

# The build folder will contain optimized production files
```

## 🚀 Deployment to Netlify

### Option 1: Deploy via Netlify UI

1. Create account on [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub and select your repository
4. Configure build settings:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/build`
5. Add environment variable:
   - **Key:** `REACT_APP_API_URL`
   - **Value:** `https://your-backend-url.onrender.com/api`
6. Deploy!

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 🛠️ Technologies

### Core
- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Axios** - HTTP client for API calls
- **Context API** - State management for authentication

### Styling
- **CSS3** - Custom styles (no CSS frameworks)
- **Responsive Design** - Mobile-first approach
- **CSS Grid & Flexbox** - Modern layouts

### Development
- **Create React App** - Build tooling
- **ESLint** - Code linting
- **React Hooks** - useState, useEffect, useContext, useCallback

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.js          # Login form
│   │   │   └── Signup.js         # Signup form
│   │   ├── layout/
│   │   │   ├── Navbar.js         # Navigation bar
│   │   │   └── PrivateRoute.js   # Protected route wrapper
│   │   └── tasks/
│   │       ├── TaskCard.js       # Individual task card
│   │       ├── TaskFilters.js    # Search and filter controls
│   │       ├── TaskList.js       # Task list container
│   │       ├── TaskModal.js      # Create/Edit task modal
│   │       └── TaskStats.js      # Task statistics display
│   ├── context/
│   │   └── AuthContext.js        # Authentication context
│   ├── pages/
│   │   ├── Dashboard.js          # Main dashboard page
│   │   ├── Home.js               # Landing page
│   │   └── Profile.js            # User profile page
│   ├── services/
│   │   └── api.js                # Axios configuration & API calls
│   ├── App.js                    # Main app with routing
│   ├── App.css                   # Global styles
│   ├── index.js                  # Entry point
│   └── index.css                 # Base CSS
├── netlify.toml                  # Netlify configuration
├── package.json
└── README.md
```

## 🎨 Styling

This project uses **custom CSS** (no Tailwind or Bootstrap) with:

- **Responsive Design** - Mobile-first approach with media queries
- **Modern Card Layouts** - Shadow, border-radius, hover effects
- **Custom Button Styles** - Primary, secondary, danger variants
- **Form Styling** - Input fields, labels, validation states
- **Badge Components** - Status and priority indicators
- **Grid System** - CSS Grid for task layout
- **Loading States** - Spinners and skeleton screens
- **Color Palette** - Consistent brand colors throughout

### Color Scheme
- Primary: Blue tones for main actions
- Success: Green for completed tasks
- Warning: Yellow for in-progress tasks
- Danger: Red for high priority/delete actions
- Neutral: Gray scale for text and backgrounds

## 🔗 API Integration

### API Configuration

The frontend connects to the backend API configured in `src/services/api.js`:

```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

### API Features

All API calls are centralized in `src/services/api.js` with:

- ✅ **Automatic Token Injection** - JWT token added to all authenticated requests
- ✅ **Request Interceptors** - Add auth headers automatically
- ✅ **Response Interceptors** - Handle errors globally
- ✅ **Error Handling** - Consistent error messages
- ✅ **Token Management** - Store/retrieve from localStorage

### Available API Methods

**Authentication:**
- `authAPI.signup(data)` - Register new user
- `authAPI.login(data)` - Login user
- `authAPI.getCurrentUser()` - Get current user info

**Tasks:**
- `taskAPI.getTasks(filters)` - Get all tasks with optional filters
- `taskAPI.getTaskStats()` - Get task statistics
- `taskAPI.getTask(id)` - Get single task
- `taskAPI.createTask(data)` - Create new task
- `taskAPI.updateTask(id, data)` - Update task
- `taskAPI.deleteTask(id)` - Delete task

**User:**
- `userAPI.getProfile()` - Get user profile
- `userAPI.updateProfile(data)` - Update user profile

## 🔐 Authentication Flow

1. **User Registration/Login** → Receives JWT token
2. **Token Storage** → Saved in localStorage
3. **Automatic Injection** → Token added to all API requests
4. **Protected Routes** → Redirect to login if not authenticated
5. **Token Validation** → Backend validates on each request
6. **Logout** → Token removed from localStorage

## 📱 Responsive Design

### Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Features

- ✅ Mobile-first approach
- ✅ Flexible grid layouts
- ✅ Touch-friendly buttons and inputs
- ✅ Hamburger menu for mobile (if implemented)
- ✅ Responsive typography
- ✅ Adaptive spacing

## 🧪 Available Scripts

### `npm start`
Runs the app in development mode on `http://localhost:3000`

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner (if tests are configured)

### `npm run eject`
⚠️ **One-way operation** - Ejects from Create React App

## 🐛 Troubleshooting

### CORS Errors
If you get CORS errors, make sure:
1. Backend CORS is configured to allow your frontend URL
2. Backend is running and accessible
3. API URL in `.env` is correct

### Build Errors on Netlify
If deployment fails:
1. Check that `netlify.toml` is in the frontend folder
2. Verify environment variables are set in Netlify
3. Check build logs for specific errors
4. Ensure all dependencies are in `package.json`

### API Connection Issues
1. Check that `REACT_APP_API_URL` is set correctly
2. Verify backend is running
3. Check browser console for errors
4. Verify token is being sent in requests

## 🔄 Environment Variables

### Development (.env.local)
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Production (Netlify)
```
REACT_APP_API_URL=https://task-manager-api-jq3i.onrender.com/api
```

> **Note:** Environment variables must start with `REACT_APP_` to be accessible in React

## 🚀 Performance Optimization

Current optimizations:
- ✅ Code splitting with React.lazy() (can be added)
- ✅ Production build minification
- ✅ CSS optimization in build
- ✅ Image optimization

Future improvements:
- [ ] Service workers for offline support
- [ ] React.memo() for expensive components
- [ ] Virtual scrolling for large task lists
- [ ] Image lazy loading
- [ ] Bundle size optimization

## 👤 Author

**Sahil Rafiq**
- Email: sahilrafiq479@gmail.com
- GitHub: [@sahilrafiq](https://github.com/sahilrafiq)
- LinkedIn: [Sahil Rafiq](https://www.linkedin.com/in/sahil-rafiq)

## 📄 License

This project is part of the Full-Stack Task Manager and is open source under the MIT License.

---

**Built with ❤️ using React 18**