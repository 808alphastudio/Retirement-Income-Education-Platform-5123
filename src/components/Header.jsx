import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiUser, FiShield } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <motion.header 
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-navy-900 to-gold-500 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiShield} className="text-white text-sm" />
                </div>
                <div>
                  <h1 className="text-xl font-serif font-bold text-navy-900">
                    Weekly Income Blueprint
                  </h1>
                  <p className="text-xs text-gray-600 leading-tight">
                    Educational Program Only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#program" className="text-gray-700 hover:text-navy-900 transition-colors">
              Program
            </a>
            <a href="#instructor" className="text-gray-700 hover:text-navy-900 transition-colors">
              Instructor
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-navy-900 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-gray-700 hover:text-navy-900 transition-colors">
              FAQ
            </a>
            <button
              onClick={handleLogin}
              className="flex items-center space-x-1 text-navy-900 hover:text-gold-500 transition-colors"
            >
              <SafeIcon icon={FiUser} className="text-sm" />
              <span>Login</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-navy-900 transition-colors"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <a href="#program" className="block px-3 py-2 text-gray-700 hover:text-navy-900 transition-colors">
                Program
              </a>
              <a href="#instructor" className="block px-3 py-2 text-gray-700 hover:text-navy-900 transition-colors">
                Instructor
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-navy-900 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-navy-900 transition-colors">
                FAQ
              </a>
              <button
                onClick={handleLogin}
                className="flex items-center space-x-1 px-3 py-2 text-navy-900 hover:text-gold-500 transition-colors"
              >
                <SafeIcon icon={FiUser} className="text-sm" />
                <span>Login</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;