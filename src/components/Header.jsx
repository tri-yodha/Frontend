import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            AtherAI
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-purple-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600">
              Contact
            </Link>
            {user ? (
              <>
                <span className="text-gray-600">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
