# Task Manager Frontend

React-based frontend application with authentication, task management, and responsive design.

## 🚀 Features

- ✅ User authentication (Login/Signup)
- ✅ Protected routes
- ✅ Task dashboard with statistics
- ✅ Create, edit, delete tasks
- ✅ Search and filter functionality
- ✅ User profile management
- ✅ Fully responsive design
- ✅ Modern UI with CSS3

## 📦 Installation
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🛠️ Technologies

- React 18
- React Router v6
- Axios for API calls
- Context API for state management
- CSS3 for styling

## 📁 Project Structure
```
src/
├── components/
│   ├── auth/           # Login & Signup
│   ├── layout/         # Navbar, PrivateRoute
│   └── tasks/          # Task components
├── context/            # Auth context
├── pages/              # Dashboard, Home, Profile
├── services/           # API service
└── App.js              # Main app with routing
```

## 🎨 Styling

This project uses custom CSS (no Tailwind) with:
- Responsive design
- Modern card layouts
- Button and input styling
- Badge components
- Grid system

## 🔗 API Integration

Frontend connects to backend API at `http://localhost:5000`

All API calls are centralized in `src/services/api.js` with:
- Automatic token injection
- Error handling
- Response interceptors

## 👤 Author

**Sahil Rafiq**
- Email: sahilrafiq479@gmail.com
- GitHub: [@sahilrafiq](https://github.com/sahilrafiq)