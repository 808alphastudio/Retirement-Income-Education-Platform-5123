import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiArrowLeft, FiSearch, FiFilter, FiMessageCircle, 
  FiMail, FiSend, FiPaperclip, FiAlertCircle, FiCheckCircle,
  FiClock, FiUser, FiCalendar
} = FiIcons;

const AdminSupport = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [replyText, setReplyText] = useState('');

  // Sample data for support tickets
  const tickets = [
    {
      id: '#1234',
      student: {
        name: 'Patricia Davis',
        email: 'patricia.d@email.com',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
      },
      subject: 'Unable to access Module 3 videos',
      message: "I've been trying to access the videos in Module 3 for the past two days but keep getting an error message saying 'Video unavailable'. I've tried different browsers and devices but nothing works. Can you please help me resolve this issue?",
      priority: 'High',
      status: 'Open',
      created: '2 hours ago',
      category: 'Technical',
      messages: [
        {
          id: 1,
          from: 'student',
          text: "I've been trying to access the videos in Module 3 for the past two days but keep getting an error message saying 'Video unavailable'. I've tried different browsers and devices but nothing works. Can you please help me resolve this issue?",
          time: '2 hours ago'
        }
      ]
    },
    {
      id: '#1233',
      student: {
        name: 'Michael Brown',
        email: 'michael.b@email.com',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face'
      },
      subject: 'Question about payment plan options',
      message: "I'm currently on the 3-payment plan but would like to switch to the 6-month financing option. Is it possible to change my payment plan? If yes, how would this affect my current access and what steps do I need to take? Thank you for your help.",
      priority: 'Medium',
      status: 'In Progress',
      created: '1 day ago',
      category: 'Billing',
      messages: [
        {
          id: 1,
          from: 'student',
          text: "I'm currently on the 3-payment plan but would like to switch to the 6-month financing option. Is it possible to change my payment plan? If yes, how would this affect my current access and what steps do I need to take? Thank you for your help.",
          time: '1 day ago'
        },
        {
          id: 2,
          from: 'admin',
          text: "Hello Michael, thank you for reaching out. Yes, it's possible to switch to the 6-month financing option. I'll need to check a few details about your account first. Could you please confirm when you made your first payment?",
          time: '22 hours ago'
        },
        {
          id: 3,
          from: 'student',
          text: "Hi, thank you for your quick response. I made my first payment on March 5th, 2024. I've only made one payment so far in the 3-payment plan.",
          time: '20 hours ago'
        }
      ]
    },
    {
      id: '#1232',
      student: {
        name: 'Sarah Wilson',
        email: 'sarah.w@email.com',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
      },
      subject: 'Community forum access issues',
      message: "I'm unable to post in the community forum. Every time I try to create a new post or reply to existing threads, I get an error message. I've been trying since yesterday but no success. Please help as I have some important questions I'd like to ask the community.",
      priority: 'Low',
      status: 'Resolved',
      created: '2 days ago',
      category: 'Technical',
      messages: [
        {
          id: 1,
          from: 'student',
          text: "I'm unable to post in the community forum. Every time I try to create a new post or reply to existing threads, I get an error message. I've been trying since yesterday but no success. Please help as I have some important questions I'd like to ask the community.",
          time: '2 days ago'
        },
        {
          id: 2,
          from: 'admin',
          text: "Hello Sarah, I'm sorry to hear you're experiencing issues with the community forum. Could you please provide more details about the error message you're seeing? Also, which browser and device are you using?",
          time: '1 day ago'
        },
        {
          id: 3,
          from: 'student',
          text: "Hi, I'm using Chrome on my laptop. The error says 'Unable to process your request at this time'. I've attached a screenshot of the error.",
          time: '1 day ago'
        },
        {
          id: 4,
          from: 'admin',
          text: "Thank you for the details, Sarah. I've identified the issue with your account permissions and have fixed it. Please try posting again now. Let me know if you still experience any problems.",
          time: '23 hours ago'
        },
        {
          id: 5,
          from: 'student',
          text: "Perfect! I can post now. Thank you so much for your help!",
          time: '22 hours ago'
        },
        {
          id: 6,
          from: 'admin',
          text: "Great! I'm glad it's working now. Don't hesitate to reach out if you have any other questions or issues.",
          time: '21 hours ago'
        }
      ]
    },
    {
      id: '#1231',
      student: {
        name: 'James Thompson',
        email: 'james.t@email.com',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      },
      subject: 'Request for additional resources',
      message: "I've completed all six modules and found the content extremely valuable. I'm wondering if there are any additional resources or advanced materials available for students who have completed the program? Specifically, I'm looking for more in-depth information on the strategies covered in Module 4.",
      priority: 'Medium',
      status: 'Open',
      created: '3 days ago',
      category: 'Content',
      messages: [
        {
          id: 1,
          from: 'student',
          text: "I've completed all six modules and found the content extremely valuable. I'm wondering if there are any additional resources or advanced materials available for students who have completed the program? Specifically, I'm looking for more in-depth information on the strategies covered in Module 4.",
          time: '3 days ago'
        }
      ]
    },
    {
      id: '#1230',
      student: {
        name: 'Robert Martinez',
        email: 'robert.m@email.com',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      subject: 'Certificate of completion',
      message: "I've successfully completed all modules in the program and was wondering if there's a certificate of completion available? It would be valuable for my professional portfolio. If so, how can I request or download it? Thank you.",
      priority: 'Low',
      status: 'Resolved',
      created: '4 days ago',
      category: 'General',
      messages: [
        {
          id: 1,
          from: 'student',
          text: "I've successfully completed all modules in the program and was wondering if there's a certificate of completion available? It would be valuable for my professional portfolio. If so, how can I request or download it? Thank you.",
          time: '4 days ago'
        },
        {
          id: 2,
          from: 'admin',
          text: "Hi Robert, congratulations on completing the program! Yes, we do offer certificates of completion. I've just generated yours and you should receive it via email within the next hour. You'll also be able to download it directly from your dashboard under the 'Achievements' section.",
          time: '3 days ago'
        },
        {
          id: 3,
          from: 'student',
          text: "Great! I received the certificate via email. Thank you so much for your quick response.",
          time: '3 days ago'
        }
      ]
    }
  ];

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = 
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || ticket.status.toLowerCase().replace(' ', '') === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const updatedTicket = { 
      ...selectedTicket,
      messages: [
        ...selectedTicket.messages,
        {
          id: selectedTicket.messages.length + 1,
          from: 'admin',
          text: replyText,
          time: 'Just now'
        }
      ]
    };

    setSelectedTicket(updatedTicket);
    setReplyText('');
  };

  const handleStatusChange = (newStatus) => {
    if (selectedTicket) {
      setSelectedTicket({
        ...selectedTicket,
        status: newStatus
      });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-red-100 text-red-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Technical':
        return 'bg-blue-100 text-blue-800';
      case 'Billing':
        return 'bg-purple-100 text-purple-800';
      case 'Content':
        return 'bg-indigo-100 text-indigo-800';
      case 'General':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
                <h1 className="text-lg font-bold text-navy-900">Support Tickets</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                <span className="font-medium">Average Response Time:</span> 2.4 hours
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Ticket List */}
          <div className="md:col-span-1">
            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-6"
            >
              <div className="space-y-4">
                <div className="relative">
                  <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by ID, name, or subject..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <SafeIcon icon={FiFilter} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent appearance-none"
                  >
                    <option value="all">All Tickets</option>
                    <option value="open">Open</option>
                    <option value="inprogress">In Progress</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Tickets List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {filteredTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  onClick={() => handleSelectTicket(ticket)}
                  className={`bg-white rounded-xl shadow hover:shadow-md transition-shadow p-4 cursor-pointer ${
                    selectedTicket && selectedTicket.id === ticket.id ? 'ring-2 ring-navy-500' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-navy-900">{ticket.id}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <img
                      src={ticket.student.avatar}
                      alt={ticket.student.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm text-gray-600">{ticket.student.name}</span>
                  </div>
                  <h4 className="font-medium text-navy-900 mb-2 line-clamp-1">{ticket.subject}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                    {ticket.message}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{ticket.created}</span>
                    <span className={`px-2 py-1 rounded-full ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </div>
                </div>
              ))}
              
              {filteredTickets.length === 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <SafeIcon icon={FiMessageCircle} className="text-4xl text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-navy-900 mb-2">No tickets found</h4>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column - Ticket Details */}
          <div className="md:col-span-2">
            {selectedTicket ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Ticket Header */}
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-navy-900">{selectedTicket.subject}</h2>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-gray-600">{selectedTicket.id}</span>
                        <span>•</span>
                        <span className="text-sm text-gray-600">Created {selectedTicket.created}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm ${getPriorityColor(selectedTicket.priority)}`}>
                        {selectedTicket.priority}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${getCategoryColor(selectedTicket.category)}`}>
                        {selectedTicket.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={selectedTicket.student.avatar}
                        alt={selectedTicket.student.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-navy-900">{selectedTicket.student.name}</p>
                        <p className="text-sm text-gray-600">{selectedTicket.student.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleStatusChange('Open')}
                        className={`px-3 py-1 rounded-lg text-sm border ${
                          selectedTicket.status === 'Open' 
                            ? 'bg-red-100 text-red-800 border-red-200' 
                            : 'border-gray-200 hover:bg-red-50'
                        }`}
                      >
                        <SafeIcon icon={FiAlertCircle} className="mr-1" />
                        Open
                      </button>
                      <button 
                        onClick={() => handleStatusChange('In Progress')}
                        className={`px-3 py-1 rounded-lg text-sm border ${
                          selectedTicket.status === 'In Progress' 
                            ? 'bg-yellow-100 text-yellow-800 border-yellow-200' 
                            : 'border-gray-200 hover:bg-yellow-50'
                        }`}
                      >
                        <SafeIcon icon={FiClock} className="mr-1" />
                        In Progress
                      </button>
                      <button 
                        onClick={() => handleStatusChange('Resolved')}
                        className={`px-3 py-1 rounded-lg text-sm border ${
                          selectedTicket.status === 'Resolved' 
                            ? 'bg-green-100 text-green-800 border-green-200' 
                            : 'border-gray-200 hover:bg-green-50'
                        }`}
                      >
                        <SafeIcon icon={FiCheckCircle} className="mr-1" />
                        Resolved
                      </button>
                    </div>
                  </div>
                </div>

                {/* Message Thread */}
                <div className="p-6 bg-gray-50 max-h-[400px] overflow-y-auto">
                  <div className="space-y-6">
                    {selectedTicket.messages.map((message) => (
                      <div 
                        key={message.id}
                        className={`flex ${message.from === 'admin' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-lg p-4 ${
                            message.from === 'admin' 
                              ? 'bg-navy-900 text-white' 
                              : 'bg-white border border-gray-200'
                          }`}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            {message.from === 'admin' ? (
                              <>
                                <span className="text-sm font-medium">Support Team</span>
                                <SafeIcon icon={FiUser} className="text-xs" />
                              </>
                            ) : (
                              <>
                                <SafeIcon icon={FiUser} className="text-xs" />
                                <span className="text-sm font-medium">{selectedTicket.student.name}</span>
                              </>
                            )}
                          </div>
                          <p className={`text-sm ${message.from === 'admin' ? 'text-white' : 'text-navy-900'}`}>
                            {message.text}
                          </p>
                          <div className={`flex justify-end mt-2 text-xs ${message.from === 'admin' ? 'text-gray-300' : 'text-gray-500'}`}>
                            <SafeIcon icon={FiCalendar} className="mr-1" />
                            {message.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reply Box */}
                <div className="p-6 border-t">
                  <form onSubmit={handleReplySubmit}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reply to {selectedTicket.student.name}
                    </label>
                    <div className="mb-3">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="Type your reply here..."
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-2">
                        <button 
                          type="button"
                          className="flex items-center space-x-1 text-gray-600 hover:text-navy-900 transition-colors"
                        >
                          <SafeIcon icon={FiPaperclip} />
                          <span>Attach</span>
                        </button>
                        <button 
                          type="button"
                          className="flex items-center space-x-1 text-gray-600 hover:text-navy-900 transition-colors"
                        >
                          <SafeIcon icon={FiMail} />
                          <span>Templates</span>
                        </button>
                      </div>
                      <button
                        type="submit"
                        className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-2 rounded-lg transition-colors flex items-center"
                        disabled={!replyText.trim()}
                      >
                        <SafeIcon icon={FiSend} className="mr-2" />
                        Send Reply
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-16 text-center"
              >
                <SafeIcon icon={FiMessageCircle} className="text-5xl text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Select a ticket to view details
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Click on any ticket from the list to view the complete conversation and respond to the student.
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Support Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-6 mt-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Open Tickets</p>
                <p className="text-2xl font-bold text-navy-900">
                  {tickets.filter(ticket => ticket.status === 'Open').length}
                </p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <SafeIcon icon={FiAlertCircle} className="text-xl text-red-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-navy-900">
                  {tickets.filter(ticket => ticket.status === 'In Progress').length}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <SafeIcon icon={FiClock} className="text-xl text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Resolved Today</p>
                <p className="text-2xl font-bold text-navy-900">8</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <SafeIcon icon={FiCheckCircle} className="text-xl text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Response</p>
                <p className="text-2xl font-bold text-navy-900">2.4 hrs</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <SafeIcon icon={FiMessageCircle} className="text-xl text-blue-600" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Support Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
        >
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-2">Support Team Guidelines:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Aim to respond to all tickets within 4 hours during business hours</li>
              <li>Always clarify that our platform is for educational purposes only</li>
              <li>For technical issues, request screenshots or screen recordings when possible</li>
              <li>Escalate billing issues to the finance team if refunds are requested</li>
              <li>Use approved templates for common questions to maintain consistency</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminSupport;