import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiBookOpen, FiDollarSign, FiTrendingUp, FiSettings, FiLogOut, FiBarChart3, FiMessageCircle, FiDownload, FiEye } = FiIcons;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const [adminEmail, setAdminEmail] = useState('');

  // Check for admin authentication on component mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    const storedEmail = localStorage.getItem('adminEmail');
    
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }
    
    if (storedEmail) {
      setAdminEmail(storedEmail);
    }
  }, [navigate]);

  const stats = [
    { title: 'Total Students', value: '1,247', change: '+12%', icon: FiUsers, color: 'bg-blue-100 text-blue-600' },
    { title: 'Course Completion', value: '78%', change: '+5%', icon: FiBookOpen, color: 'bg-green-100 text-green-600' },
    { title: 'Revenue (Monthly)', value: '$124,300', change: '+18%', icon: FiDollarSign, color: 'bg-gold-100 text-gold-600' },
    { title: 'Engagement Rate', value: '89%', change: '+3%', icon: FiTrendingUp, color: 'bg-purple-100 text-purple-600' }
  ];

  const recentActivity = [
    { id: 1, type: 'enrollment', user: 'Margaret Johnson', action: 'Enrolled in Full Program', time: '2 hours ago', amount: '$997' },
    { id: 2, type: 'completion', user: 'Robert Smith', action: 'Completed Module 3', time: '4 hours ago', amount: null },
    { id: 3, type: 'support', user: 'Patricia Davis', action: 'Submitted support ticket', time: '6 hours ago', amount: null },
    { id: 4, type: 'enrollment', user: 'Michael Brown', action: 'Started Payment Plan', time: '8 hours ago', amount: '$349' }
  ];

  const handleLogout = () => {
    // Clear admin authentication status
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminEmail');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-serif font-bold text-navy-900">
                Admin Dashboard
              </h1>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                Administrator
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {adminEmail && (
                <span className="text-sm text-gray-600">
                  Logged in as: {adminEmail}
                </span>
              )}
              <button onClick={() => navigate('/admin/settings')} className="text-gray-600 hover:text-navy-900 transition-colors">
                <SafeIcon icon={FiSettings} className="text-xl" />
              </button>
              <button onClick={handleLogout} className="text-gray-600 hover:text-navy-900 transition-colors">
                <SafeIcon icon={FiLogOut} className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <SafeIcon icon={stat.icon} className="text-2xl" />
                </div>
                <span className="text-sm font-medium text-green-600">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'students', label: 'Students' },
            { id: 'content', label: 'Content' },
            { id: 'analytics', label: 'Analytics' },
            { id: 'support', label: 'Support' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === tab.id ? 'bg-navy-900 text-white' : 'bg-white text-gray-600 hover:text-navy-900'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-6">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.type === 'enrollment' ? 'bg-green-100 text-green-600' : activity.type === 'completion' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`}>
                          <SafeIcon icon={activity.type === 'enrollment' ? FiDollarSign : activity.type === 'completion' ? FiBookOpen : FiMessageCircle} className="text-sm" />
                        </div>
                        <div>
                          <p className="font-medium text-navy-900">
                            {activity.user}
                          </p>
                          <p className="text-sm text-gray-600">
                            {activity.action}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        {activity.amount && (
                          <p className="font-bold text-green-600">
                            {activity.amount}
                          </p>
                        )}
                        <p className="text-sm text-gray-500">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 mb-6"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-6">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button onClick={() => navigate('/admin/students')} className="w-full bg-navy-900 hover:bg-navy-800 text-white p-3 rounded-lg transition-colors">
                    Manage Students
                  </button>
                  <button onClick={() => navigate('/admin/content')} className="w-full bg-sage-500 hover:bg-sage-600 text-white p-3 rounded-lg transition-colors">
                    Update Content
                  </button>
                  <button onClick={() => navigate('/admin/analytics')} className="w-full bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-lg transition-colors">
                    View Analytics
                  </button>
                  <button onClick={() => navigate('/admin/support')} className="w-full bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg transition-colors">
                    Support Tickets
                  </button>
                </div>
              </motion.div>

              {/* System Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-6">
                  System Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Platform Status</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Operational
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Video Streaming</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Operational
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Payment Processing</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Operational
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Community Forum</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Operational
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Students Tab */}
        {activeTab === 'students' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-navy-900">
                Student Management
              </h3>
              <div className="flex items-center space-x-4">
                <button className="bg-sage-500 hover:bg-sage-600 text-white px-4 py-2 rounded-lg transition-colors">
                  <SafeIcon icon={FiDownload} className="mr-2" /> Export Data
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4">Student</th>
                    <th className="text-left py-3 px-4">Enrollment Date</th>
                    <th className="text-left py-3 px-4">Plan</th>
                    <th className="text-left py-3 px-4">Progress</th>
                    <th className="text-left py-3 px-4">Last Activity</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Robert Martinez', email: 'robert.m@email.com', enrollDate: '2024-01-15', plan: 'Full Program', progress: 85, lastActivity: '2 hours ago' },
                    { name: 'Margaret Johnson', email: 'margaret.j@email.com', enrollDate: '2024-01-20', plan: 'Payment Plan', progress: 45, lastActivity: '1 day ago' },
                    { name: 'James Thompson', email: 'james.t@email.com', enrollDate: '2024-01-10', plan: 'Full Program', progress: 100, lastActivity: '3 hours ago' }
                  ].map((student, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-navy-900">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{student.enrollDate}</td>
                      <td className="py-4 px-4">
                        <span className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-sm">
                          {student.plan}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-sage-500 h-2 rounded-full"
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{student.progress}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{student.lastActivity}</td>
                      <td className="py-4 px-4">
                        <button className="text-navy-600 hover:text-navy-800 mr-3">
                          <SafeIcon icon={FiEye} />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          <SafeIcon icon={FiSettings} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-navy-900">
                Content Management
              </h3>
              <button className="bg-navy-900 hover:bg-navy-800 text-white px-4 py-2 rounded-lg transition-colors">
                Add New Content
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { module: 'Module 1', title: 'Foundation & Mindset Shift', lessons: 6, duration: '45 min', status: 'Published' },
                { module: 'Module 2', title: 'Market Analysis & Opportunity Recognition', lessons: 8, duration: '60 min', status: 'Published' },
                { module: 'Module 3', title: 'Options Chain Mastery', lessons: 10, duration: '75 min', status: 'Draft' },
                { module: 'Module 4', title: 'Weekly Execution System', lessons: 12, duration: '90 min', status: 'Published' }
              ].map((content, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-navy-900">
                      {content.module}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-sm ${content.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {content.status}
                    </span>
                  </div>
                  <h5 className="font-medium text-navy-900 mb-2">
                    {content.title}
                  </h5>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{content.lessons} lessons</span>
                    <span>{content.duration}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-navy-100 text-navy-800 px-3 py-1 rounded text-sm hover:bg-navy-200 transition-colors">
                      Edit
                    </button>
                    <button className="bg-sage-100 text-sage-800 px-3 py-1 rounded text-sm hover:bg-sage-200 transition-colors">
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                Analytics Overview
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-navy-900 mb-4">Enrollment Trends</h4>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiBarChart3} className="text-4xl text-gray-400" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 mb-4">Revenue Growth</h4>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiTrendingUp} className="text-4xl text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                Performance Metrics
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { metric: 'Completion Rate', value: '78%', trend: '+5%' },
                  { metric: 'Student Satisfaction', value: '4.8/5', trend: '+0.2' },
                  { metric: 'Support Response Time', value: '2.4 hrs', trend: '-0.8 hrs' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-navy-900 mb-2">{item.metric}</h4>
                    <p className="text-2xl font-bold text-navy-900 mb-1">{item.value}</p>
                    <p className="text-sm text-green-600">{item.trend}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Support Tab */}
        {activeTab === 'support' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-navy-900">
                Support Tickets
              </h3>
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-lg px-3 py-2">
                  <option>All Tickets</option>
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { id: '#1234', student: 'Patricia Davis', subject: 'Unable to access Module 3', priority: 'High', status: 'Open', created: '2 hours ago' },
                { id: '#1233', student: 'Michael Brown', subject: 'Payment plan question', priority: 'Medium', status: 'In Progress', created: '1 day ago' },
                { id: '#1232', student: 'Sarah Wilson', subject: 'Community forum access', priority: 'Low', status: 'Resolved', created: '2 days ago' }
              ].map((ticket, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium text-navy-900">{ticket.id}</span>
                      <span className="text-gray-600">{ticket.student}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${ticket.priority === 'High' ? 'bg-red-100 text-red-800' : ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                        {ticket.priority}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${ticket.status === 'Open' ? 'bg-red-100 text-red-800' : ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                        {ticket.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2">{ticket.subject}</p>
                  <p className="text-sm text-gray-500">{ticket.created}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;