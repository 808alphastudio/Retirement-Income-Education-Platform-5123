import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiSearch, FiFilter, FiDownload, FiEye, FiEdit, FiTrash2, FiMail, FiPhone, FiCalendar, FiDollarSign } = FiIcons;

const AdminStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const navigate = useNavigate();

  const students = [
    {
      id: 1,
      name: 'Robert Martinez',
      email: 'robert.m@email.com',
      phone: '+1 (555) 123-4567',
      enrollDate: '2024-01-15',
      plan: 'Full Program',
      amount: '$997',
      progress: 85,
      lastActivity: '2 hours ago',
      status: 'Active',
      completedModules: 5,
      totalModules: 6,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Margaret Johnson',
      email: 'margaret.j@email.com',
      phone: '+1 (555) 234-5678',
      enrollDate: '2024-01-20',
      plan: 'Payment Plan',
      amount: '$349',
      progress: 45,
      lastActivity: '1 day ago',
      status: 'Active',
      completedModules: 2,
      totalModules: 6,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'James Thompson',
      email: 'james.t@email.com',
      phone: '+1 (555) 345-6789',
      enrollDate: '2024-01-10',
      plan: 'Full Program',
      amount: '$997',
      progress: 100,
      lastActivity: '3 hours ago',
      status: 'Completed',
      completedModules: 6,
      totalModules: 6,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Patricia Davis',
      email: 'patricia.d@email.com',
      phone: '+1 (555) 456-7890',
      enrollDate: '2024-01-25',
      plan: 'Full Program',
      amount: '$997',
      progress: 15,
      lastActivity: '5 days ago',
      status: 'Inactive',
      completedModules: 1,
      totalModules: 6,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michael.b@email.com',
      phone: '+1 (555) 567-8901',
      enrollDate: '2024-01-18',
      plan: 'Payment Plan',
      amount: '$349',
      progress: 65,
      lastActivity: '6 hours ago',
      status: 'Active',
      completedModules: 4,
      totalModules: 6,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || student.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleViewStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="flex items-center text-gray-600 hover:text-navy-900 transition-colors"
              >
                <SafeIcon icon={FiArrowLeft} className="mr-2" />
                Back to Dashboard
              </button>
              <div className="border-l border-gray-300 pl-4">
                <h1 className="text-lg font-bold text-navy-900">Student Management</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-sage-500 hover:bg-sage-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <SafeIcon icon={FiDownload} className="text-sm" />
                <span>Export Data</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search students by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <SafeIcon icon={FiFilter} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent appearance-none"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Students Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Student</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Enrollment</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Plan</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Progress</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Last Activity</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <img
                          src={student.avatar}
                          alt={student.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium text-navy-900">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <SafeIcon icon={FiCalendar} className="text-gray-400 text-sm" />
                        <span className="text-gray-600">{student.enrollDate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <span className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-sm font-medium">
                          {student.plan}
                        </span>
                        <p className="text-sm text-gray-600 mt-1">{student.amount}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-sage-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{student.progress}%</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {student.completedModules}/{student.totalModules} modules
                      </p>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        student.status === 'Active' ? 'bg-green-100 text-green-800' :
                        student.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {student.lastActivity}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleViewStudent(student)}
                          className="text-navy-600 hover:text-navy-800 p-2 rounded-lg hover:bg-navy-50 transition-colors"
                        >
                          <SafeIcon icon={FiEye} className="text-sm" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <SafeIcon icon={FiEdit} className="text-sm" />
                        </button>
                        <button className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-colors">
                          <SafeIcon icon={FiTrash2} className="text-sm" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Summary Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-6 mt-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-navy-900">{students.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <SafeIcon icon={FiEye} className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Students</p>
                <p className="text-2xl font-bold text-navy-900">
                  {students.filter(s => s.status === 'Active').length}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <SafeIcon icon={FiEye} className="text-green-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-navy-900">
                  {students.filter(s => s.status === 'Completed').length}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <SafeIcon icon={FiEye} className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Progress</p>
                <p className="text-2xl font-bold text-navy-900">
                  {Math.round(students.reduce((sum, s) => sum + s.progress, 0) / students.length)}%
                </p>
              </div>
              <div className="bg-gold-100 p-3 rounded-lg">
                <SafeIcon icon={FiEye} className="text-gold-600 text-xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Student Detail Modal */}
      {selectedStudent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy-900">Student Details</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <SafeIcon icon={FiEye} className="text-xl" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={selectedStudent.avatar}
                      alt={selectedStudent.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-navy-900">{selectedStudent.name}</h3>
                      <p className="text-gray-600">{selectedStudent.status}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiMail} className="text-gray-400" />
                      <span className="text-gray-700">{selectedStudent.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiPhone} className="text-gray-400" />
                      <span className="text-gray-700">{selectedStudent.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiCalendar} className="text-gray-400" />
                      <span className="text-gray-700">Enrolled: {selectedStudent.enrollDate}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiDollarSign} className="text-gray-400" />
                      <span className="text-gray-700">{selectedStudent.plan} - {selectedStudent.amount}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-navy-900 mb-3">Course Progress</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Overall Progress</span>
                        <span>{selectedStudent.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-sage-500 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${selectedStudent.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {selectedStudent.completedModules} of {selectedStudent.totalModules} modules completed
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy-900 mb-3">Recent Activity</h4>
                    <p className="text-gray-600">Last seen: {selectedStudent.lastActivity}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex space-x-3">
                  <button className="bg-navy-900 hover:bg-navy-800 text-white px-4 py-2 rounded-lg transition-colors">
                    Send Message
                  </button>
                  <button className="bg-sage-500 hover:bg-sage-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Reset Progress
                  </button>
                  <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Export Data
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AdminStudents;