import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <nav className="py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-3xl">📋</span>
              <span className="ml-2 text-2xl font-bold text-gray-900">TaskManager</span>
            </div>
            <div className="space-x-4">
              {isAuthenticated ? (
                <Link to="/dashboard" className="btn-primary">
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link to="/login" className="btn-secondary">
                    Login
                  </Link>
                  <Link to="/signup" className="btn-primary">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center py-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Manage Your Tasks
            <br />
            <span className="text-primary-600">Efficiently & Effectively</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A powerful task management system with authentication, CRUD operations,
            search, and filtering capabilities. Built with modern web technologies.
          </p>
          <div className="space-x-4">
            <Link to="/signup" className="btn-primary text-lg px-8 py-3">
              Get Started Free
            </Link>
            <Link to="/login" className="btn-secondary text-lg px-8 py-3">
              Login
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          <div className="card text-center">
            <div className="text-5xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Authentication</h3>
            <p className="text-gray-600">JWT-based authentication with password hashing</p>
          </div>

          <div className="card text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Task Management</h3>
            <p className="text-gray-600">Create, read, update, and delete tasks easily</p>
          </div>

          <div className="card text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Search & Filter</h3>
            <p className="text-gray-600">Find tasks quickly with powerful search and filters</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="card mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Built With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">⚛️</div>
              <p className="font-semibold">React.js</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🟢</div>
              <p className="font-semibold">Node.js</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🍃</div>
              <p className="font-semibold">MongoDB</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎨</div>
              <p className="font-semibold">TailwindCSS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>Built by <strong>Sahil Rafiq</strong> | Full-Stack Developer Assignment</p>
          <p className="text-sm text-gray-400 mt-2">
            GitHub: <a href="https://github.com/sahilrafiq" className="text-primary-400 hover:text-primary-300">@sahilrafiq</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;