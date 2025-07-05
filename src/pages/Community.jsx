import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiMessageCircle, FiUsers, FiThumbsUp, FiClock, FiPin, FiSearch, FiPlus } = FiIcons;

const Community = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Posts', count: 47 },
    { id: 'general', name: 'General Discussion', count: 18 },
    { id: 'strategies', name: 'Strategies', count: 12 },
    { id: 'success', name: 'Success Stories', count: 8 },
    { id: 'questions', name: 'Q&A', count: 9 }
  ];

  const posts = [
    {
      id: 1,
      title: 'Weekly Income Update - March Results',
      author: 'Robert M.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      category: 'success',
      time: '2 hours ago',
      replies: 15,
      likes: 23,
      pinned: true,
      preview: 'Just wanted to share my March results following the Module 4 strategies. Generated $2,800 this week...'
    },
    {
      id: 2,
      title: 'Question about Module 3 - Options Chain Analysis',
      author: 'Margaret K.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=40&h=40&fit=crop&crop=face',
      category: 'questions',
      time: '4 hours ago',
      replies: 8,
      likes: 12,
      pinned: false,
      preview: 'I\'m working through the options chain analysis lesson and have a question about strike selection...'
    },
    {
      id: 3,
      title: 'Tax Season Preparation - Important Reminders',
      author: 'James T.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      category: 'strategies',
      time: '1 day ago',
      replies: 22,
      likes: 35,
      pinned: true,
      preview: 'As we approach tax season, here are some key points from Module 5 to remember...'
    },
    {
      id: 4,
      title: 'New Student Introduction',
      author: 'Patricia L.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      category: 'general',
      time: '2 days ago',
      replies: 12,
      likes: 18,
      pinned: false,
      preview: 'Hi everyone! Just enrolled in the program and excited to start this educational journey...'
    },
    {
      id: 5,
      title: 'Market Volatility Discussion - How to Adapt',
      author: 'Michael R.',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face',
      category: 'strategies',
      time: '3 days ago',
      replies: 18,
      likes: 27,
      pinned: false,
      preview: 'With recent market volatility, I wanted to discuss how we can adapt our weekly strategies...'
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center text-gray-600 hover:text-navy-900 transition-colors"
              >
                <SafeIcon icon={FiArrowLeft} className="mr-2" />
                Back to Dashboard
              </button>
              <div className="border-l border-gray-300 pl-4">
                <h1 className="text-lg font-bold text-navy-900">Community Forum</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <SafeIcon icon={FiUsers} className="text-lg" />
                <span>124 Members Online</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-6"
            >
              <h3 className="text-lg font-bold text-navy-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? 'bg-navy-900 text-white'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-white text-navy-900'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Community Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-navy-900 mb-4">Community Guidelines</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Be respectful and supportive</li>
                <li>• Share educational insights only</li>
                <li>• No financial advice or recommendations</li>
                <li>• Keep discussions relevant to the program</li>
                <li>• Report inappropriate content</li>
              </ul>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and New Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1 relative">
                  <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <SafeIcon icon={FiPlus} className="text-sm" />
                  <span>New Post</span>
                </button>
              </div>
            </motion.div>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          {post.pinned && (
                            <SafeIcon icon={FiPin} className="text-gold-500 text-sm" />
                          )}
                          <h3 className="text-lg font-bold text-navy-900 hover:text-navy-700 cursor-pointer">
                            {post.title}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span className="font-medium">{post.author}</span>
                          <span className="flex items-center space-x-1">
                            <SafeIcon icon={FiClock} className="text-xs" />
                            <span>{post.time}</span>
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {categories.find(cat => cat.id === post.category)?.name}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{post.preview}</p>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-2 text-gray-500">
                            <SafeIcon icon={FiMessageCircle} className="text-sm" />
                            <span className="text-sm">{post.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-500">
                            <SafeIcon icon={FiThumbsUp} className="text-sm" />
                            <span className="text-sm">{post.likes} likes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-8"
            >
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg transition-colors">
                Load More Posts
              </button>
            </motion.div>
          </div>
        </div>

        {/* Educational Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
        >
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-2">Community Disclaimer:</p>
            <p>
              This community forum is for educational discussion only. Members should not provide financial advice or specific investment recommendations. All shared experiences and strategies are for educational purposes and individual results may vary. Please consult with qualified professionals before implementing any strategies.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;