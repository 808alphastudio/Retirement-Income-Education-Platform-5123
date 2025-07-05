import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiBookOpen, FiUsers, FiDownload, FiSettings, FiLogOut, FiClock, FiTrendingUp, FiAward } = FiIcons;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const modules = [
    {
      id: 1,
      title: 'Foundation & Mindset Shift',
      description: 'Learn the tankless water heater philosophy',
      duration: '45 min',
      lessons: 6,
      completed: 6,
      unlocked: true
    },
    {
      id: 2,
      title: 'Market Analysis & Opportunity Recognition',
      description: 'Understanding market cycles and volatility',
      duration: '60 min',
      lessons: 8,
      completed: 3,
      unlocked: true
    },
    {
      id: 3,
      title: 'Options Chain Mastery',
      description: 'Reading and analyzing option chains',
      duration: '75 min',
      lessons: 10,
      completed: 0,
      unlocked: false
    },
    {
      id: 4,
      title: 'Weekly Execution System',
      description: 'Step-by-step weekly methodology',
      duration: '90 min',
      lessons: 12,
      completed: 0,
      unlocked: false
    },
    {
      id: 5,
      title: 'Tax Optimization & Retirement Accounts',
      description: 'Maximizing tax-free compounding',
      duration: '50 min',
      lessons: 7,
      completed: 0,
      unlocked: false
    },
    {
      id: 6,
      title: 'Advanced Strategies & Troubleshooting',
      description: 'Market crash protection and scaling',
      duration: '80 min',
      lessons: 9,
      completed: 0,
      unlocked: false
    }
  ];

  const totalLessons = modules.reduce((sum, module) => sum + module.lessons, 0);
  const completedLessons = modules.reduce((sum, module) => sum + module.completed, 0);
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  const handleModuleClick = (moduleId) => {
    navigate(`/module/${moduleId}`);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-serif font-bold text-navy-900">
                Weekly Income Blueprint
              </h1>
              <span className="bg-sage-100 text-sage-800 px-3 py-1 rounded-full text-sm font-medium">
                Student Portal
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-navy-900 transition-colors">
                <SafeIcon icon={FiSettings} className="text-xl" />
              </button>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-navy-900 transition-colors"
              >
                <SafeIcon icon={FiLogOut} className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-2">
            Welcome back, Student!
          </h2>
          <p className="text-gray-600">
            Continue your journey to financial education and weekly income generation.
          </p>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-navy-100 p-3 rounded-lg">
                <SafeIcon icon={FiTrendingUp} className="text-2xl text-navy-600" />
              </div>
              <span className="text-2xl font-bold text-navy-900">{progressPercentage}%</span>
            </div>
            <h3 className="font-bold text-navy-900 mb-1">Overall Progress</h3>
            <p className="text-sm text-gray-600">Course completion</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div 
                className="progress-bar h-2 rounded-full" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-sage-100 p-3 rounded-lg">
                <SafeIcon icon={FiBookOpen} className="text-2xl text-sage-600" />
              </div>
              <span className="text-2xl font-bold text-navy-900">{completedLessons}</span>
            </div>
            <h3 className="font-bold text-navy-900 mb-1">Lessons Completed</h3>
            <p className="text-sm text-gray-600">Out of {totalLessons} total</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gold-100 p-3 rounded-lg">
                <SafeIcon icon={FiClock} className="text-2xl text-gold-600" />
              </div>
              <span className="text-2xl font-bold text-navy-900">8</span>
            </div>
            <h3 className="font-bold text-navy-900 mb-1">Study Hours</h3>
            <p className="text-sm text-gray-600">Total content time</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <SafeIcon icon={FiAward} className="text-2xl text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-navy-900">2</span>
            </div>
            <h3 className="font-bold text-navy-900 mb-1">Modules Unlocked</h3>
            <p className="text-sm text-gray-600">Ready to study</p>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8">
          {[
            { id: 'overview', label: 'Course Overview' },
            { id: 'community', label: 'Community' },
            { id: 'resources', label: 'Resources' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-gray-600 hover:text-navy-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Modules */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {modules.map((module, index) => (
              <div
                key={module.id}
                className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${
                  module.unlocked
                    ? 'hover:shadow-xl cursor-pointer'
                    : 'opacity-60 cursor-not-allowed'
                }`}
                onClick={() => module.unlocked && handleModuleClick(module.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white ${
                      module.unlocked ? 'bg-navy-900' : 'bg-gray-400'
                    }`}>
                      {module.id}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 mb-1">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </div>
                  </div>
                  {module.unlocked && (
                    <SafeIcon icon={FiPlay} className="text-gold-500 text-xl" />
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{module.duration}</span>
                  <span>{module.lessons} lessons</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{module.completed}/{module.lessons}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-sage-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${(module.completed / module.lessons) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    !module.unlocked
                      ? 'bg-gray-100 text-gray-600'
                      : module.completed === module.lessons
                      ? 'bg-sage-100 text-sage-800'
                      : module.completed > 0
                      ? 'bg-gold-100 text-gold-800'
                      : 'bg-navy-100 text-navy-800'
                  }`}>
                    {!module.unlocked
                      ? 'Locked'
                      : module.completed === module.lessons
                      ? 'Completed'
                      : module.completed > 0
                      ? 'In Progress'
                      : 'Start Learning'
                    }
                  </span>
                  {module.unlocked && (
                    <span className="text-sm text-gray-500">
                      {Math.round((module.completed / module.lessons) * 100)}%
                    </span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Community Tab */}
        {activeTab === 'community' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="text-center">
              <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiUsers} className="text-2xl text-navy-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                Join Our Private Community
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Connect with fellow students, share insights, ask questions, and get support 
                from peers who are on the same educational journey.
              </p>
              <button
                onClick={() => navigate('/community')}
                className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Access Community Forum
              </button>
            </div>
          </motion.div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Downloadable Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Weekly Income Calculator', type: 'Excel Template', size: '2.3 MB' },
                  { name: 'Risk Management Checklist', type: 'PDF Guide', size: '1.8 MB' },
                  { name: 'Tax Optimization Worksheet', type: 'Excel Template', size: '1.2 MB' },
                  { name: 'Emergency Action Plan', type: 'PDF Guide', size: '3.1 MB' }
                ].map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gold-100 p-2 rounded-lg">
                        <SafeIcon icon={FiDownload} className="text-gold-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900">{resource.name}</h4>
                        <p className="text-sm text-gray-600">{resource.type} • {resource.size}</p>
                      </div>
                    </div>
                    <button className="text-navy-600 hover:text-navy-800 font-medium">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Support & Help
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-sage-50 rounded-lg">
                  <h4 className="font-medium text-navy-900 mb-2">Email Support</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Get help with technical issues or course questions
                  </p>
                  <a href="mailto:support@weeklyincomeblueprint.com" className="text-sage-600 hover:text-sage-800 font-medium">
                    support@weeklyincomeblueprint.com
                  </a>
                </div>
                <div className="p-4 bg-gold-50 rounded-lg">
                  <h4 className="font-medium text-navy-900 mb-2">Live Q&A Sessions</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Join monthly live sessions with the instructor
                  </p>
                  <span className="text-gold-600 font-medium">Next session: March 15, 2024</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;