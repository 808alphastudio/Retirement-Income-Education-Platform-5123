import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiArrowLeft, FiEdit, FiTrash2, FiPlus, FiEye, FiSave, 
  FiVideo, FiFile, FiLink, FiUpload, FiClock, FiX
} = FiIcons;

const AdminContent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('modules');
  const [editingItem, setEditingItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  // Sample data for modules
  const [modules, setModules] = useState([
    {
      id: 1,
      title: 'Foundation & Mindset Shift',
      description: 'Learn the tankless water heater philosophy and fundamental principles',
      duration: '45 min',
      lessons: 6,
      status: 'Published',
      lastUpdated: '2024-03-15'
    },
    {
      id: 2,
      title: 'Market Analysis & Opportunity Recognition',
      description: 'Understanding market cycles, volatility, and identifying opportunities',
      duration: '60 min',
      lessons: 8,
      status: 'Published',
      lastUpdated: '2024-03-10'
    },
    {
      id: 3,
      title: 'Options Chain Mastery',
      description: 'Reading and analyzing option chains',
      duration: '75 min',
      lessons: 10,
      status: 'Draft',
      lastUpdated: '2024-03-05'
    },
    {
      id: 4,
      title: 'Weekly Execution System',
      description: 'Step-by-step weekly methodology',
      duration: '90 min',
      lessons: 12,
      status: 'Published',
      lastUpdated: '2024-02-28'
    }
  ]);

  // Sample data for lessons
  const [lessons, setLessons] = useState([
    {
      id: 1,
      moduleId: 1,
      title: 'Introduction to Weekly Income Generation',
      description: 'Overview of the weekly income approach and course structure',
      duration: '8:45',
      status: 'Published',
      videoUrl: 'https://example.com/videos/lesson1.mp4',
      order: 1
    },
    {
      id: 2,
      moduleId: 1,
      title: 'The Tankless Water Heater Analogy',
      description: 'Understanding the key philosophy behind sustainable income generation',
      duration: '12:30',
      status: 'Published',
      videoUrl: 'https://example.com/videos/lesson2.mp4',
      order: 2
    },
    {
      id: 3,
      moduleId: 1,
      title: 'Why the 4% Rule Fails',
      description: 'Analysis of traditional withdrawal strategies and their limitations',
      duration: '15:20',
      status: 'Published',
      videoUrl: 'https://example.com/videos/lesson3.mp4',
      order: 3
    },
    {
      id: 4,
      moduleId: 2,
      title: 'Market Cycles and Patterns',
      description: 'Understanding how market cycles affect income strategies',
      duration: '12:15',
      status: 'Published',
      videoUrl: 'https://example.com/videos/lesson4.mp4',
      order: 1
    },
    {
      id: 5,
      moduleId: 2,
      title: 'Volatility Analysis',
      description: 'How to analyze and benefit from market volatility',
      duration: '14:30',
      status: 'Draft',
      videoUrl: 'https://example.com/videos/lesson5.mp4',
      order: 2
    }
  ]);

  // Sample data for resources
  const [resources, setResources] = useState([
    {
      id: 1,
      title: 'Weekly Income Calculator',
      type: 'Excel Template',
      description: 'Calculate potential weekly income based on your savings',
      fileSize: '2.3 MB',
      downloadUrl: 'https://example.com/resources/calculator.xlsx',
      category: 'Templates'
    },
    {
      id: 2,
      title: 'Risk Management Checklist',
      type: 'PDF Guide',
      description: 'Comprehensive checklist for proper risk management',
      fileSize: '1.8 MB',
      downloadUrl: 'https://example.com/resources/checklist.pdf',
      category: 'Guides'
    },
    {
      id: 3,
      title: 'Tax Optimization Worksheet',
      type: 'Excel Template',
      description: 'Optimize your tax strategy for retirement accounts',
      fileSize: '1.2 MB',
      downloadUrl: 'https://example.com/resources/taxes.xlsx',
      category: 'Templates'
    },
    {
      id: 4,
      title: 'Emergency Action Plan',
      type: 'PDF Guide',
      description: 'Step-by-step plan for protecting income during market downturns',
      fileSize: '3.1 MB',
      downloadUrl: 'https://example.com/resources/emergency.pdf',
      category: 'Guides'
    }
  ]);

  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    duration: '',
    status: 'Draft',
    moduleId: 1,
    videoUrl: '',
    type: 'Excel Template',
    fileSize: '',
    downloadUrl: '',
    category: 'Templates'
  });

  const handleOpenModal = (type, item = null) => {
    setModalType(type);
    if (item) {
      setEditingItem(item);
      setNewItem(item);
    } else {
      setEditingItem(null);
      setNewItem({
        title: '',
        description: '',
        duration: '',
        status: 'Draft',
        moduleId: 1,
        videoUrl: '',
        type: 'Excel Template',
        fileSize: '',
        downloadUrl: '',
        category: 'Templates'
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingItem(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (modalType === 'module') {
      if (editingItem) {
        setModules(modules.map(module => 
          module.id === editingItem.id ? { ...newItem, id: module.id } : module
        ));
      } else {
        setModules([...modules, { ...newItem, id: modules.length + 1, lessons: 0, lastUpdated: new Date().toISOString().split('T')[0] }]);
      }
    } else if (modalType === 'lesson') {
      if (editingItem) {
        setLessons(lessons.map(lesson => 
          lesson.id === editingItem.id ? { ...newItem, id: lesson.id } : lesson
        ));
      } else {
        setLessons([...lessons, { 
          ...newItem, 
          id: lessons.length + 1, 
          order: lessons.filter(l => l.moduleId === parseInt(newItem.moduleId)).length + 1 
        }]);
        // Update module lesson count
        setModules(modules.map(module => 
          module.id === parseInt(newItem.moduleId) ? { ...module, lessons: module.lessons + 1 } : module
        ));
      }
    } else if (modalType === 'resource') {
      if (editingItem) {
        setResources(resources.map(resource => 
          resource.id === editingItem.id ? { ...newItem, id: resource.id } : resource
        ));
      } else {
        setResources([...resources, { ...newItem, id: resources.length + 1 }]);
      }
    }
    
    handleCloseModal();
  };

  const handleDelete = (type, id) => {
    if (confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
      if (type === 'module') {
        setModules(modules.filter(module => module.id !== id));
        // Also delete associated lessons
        setLessons(lessons.filter(lesson => lesson.moduleId !== id));
      } else if (type === 'lesson') {
        const lessonToDelete = lessons.find(lesson => lesson.id === id);
        setLessons(lessons.filter(lesson => lesson.id !== id));
        // Update module lesson count
        if (lessonToDelete) {
          setModules(modules.map(module => 
            module.id === lessonToDelete.moduleId ? { ...module, lessons: module.lessons - 1 } : module
          ));
        }
      } else if (type === 'resource') {
        setResources(resources.filter(resource => resource.id !== id));
      }
    }
  };

  const renderModuleTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-navy-900">Course Modules</h3>
        <button
          onClick={() => handleOpenModal('module')}
          className="bg-navy-900 hover:bg-navy-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <SafeIcon icon={FiPlus} className="text-sm" />
          <span>Add Module</span>
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <div key={module.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-navy-900">
                Module {module.id}: {module.title}
              </h4>
              <span className={`px-3 py-1 rounded-full text-sm ${
                module.status === 'Published' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {module.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              {module.description}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiClock} className="text-xs" />
                <span>{module.duration}</span>
              </div>
              <span>{module.lessons} lessons</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Last updated: {module.lastUpdated}</span>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleOpenModal('module', module)} 
                  className="bg-navy-100 text-navy-800 p-2 rounded hover:bg-navy-200 transition-colors"
                >
                  <SafeIcon icon={FiEdit} className="text-sm" />
                </button>
                <button 
                  onClick={() => handleDelete('module', module.id)} 
                  className="bg-red-100 text-red-800 p-2 rounded hover:bg-red-200 transition-colors"
                >
                  <SafeIcon icon={FiTrash2} className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLessonTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-navy-900">Course Lessons</h3>
        <div className="flex space-x-4">
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-navy-500 focus:border-transparent">
            <option value="all">All Modules</option>
            {modules.map(module => (
              <option key={module.id} value={module.id}>Module {module.id}: {module.title}</option>
            ))}
          </select>
          <button
            onClick={() => handleOpenModal('lesson')}
            className="bg-navy-900 hover:bg-navy-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <SafeIcon icon={FiPlus} className="text-sm" />
            <span>Add Lesson</span>
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Lesson</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Module</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Duration</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {lessons.map((lesson) => {
                const parentModule = modules.find(m => m.id === lesson.moduleId);
                return (
                  <tr key={lesson.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="bg-navy-100 w-8 h-8 rounded-full flex items-center justify-center">
                          <span className="font-medium text-navy-800">{lesson.order}</span>
                        </div>
                        <div>
                          <p className="font-medium text-navy-900">{lesson.title}</p>
                          <p className="text-sm text-gray-600 truncate max-w-xs">{lesson.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-sm">
                        Module {lesson.moduleId}: {parentModule?.title?.substring(0, 15)}...
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{lesson.duration}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        lesson.status === 'Published' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {lesson.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleOpenModal('lesson', lesson)} 
                          className="bg-navy-100 text-navy-800 p-2 rounded hover:bg-navy-200 transition-colors"
                        >
                          <SafeIcon icon={FiEdit} className="text-sm" />
                        </button>
                        <button 
                          onClick={() => handleDelete('lesson', lesson.id)} 
                          className="bg-red-100 text-red-800 p-2 rounded hover:bg-red-200 transition-colors"
                        >
                          <SafeIcon icon={FiTrash2} className="text-sm" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderResourceTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-navy-900">Downloadable Resources</h3>
        <button
          onClick={() => handleOpenModal('resource')}
          className="bg-navy-900 hover:bg-navy-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <SafeIcon icon={FiPlus} className="text-sm" />
          <span>Add Resource</span>
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-3 rounded-lg ${
                resource.type.includes('Excel') ? 'bg-green-100 text-green-600' :
                resource.type.includes('PDF') ? 'bg-red-100 text-red-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                <SafeIcon 
                  icon={
                    resource.type.includes('Excel') ? FiFile :
                    resource.type.includes('PDF') ? FiFile :
                    FiLink
                  } 
                  className="text-lg" 
                />
              </div>
              <div>
                <h4 className="font-bold text-navy-900">{resource.title}</h4>
                <p className="text-xs text-gray-600">{resource.type} • {resource.fileSize}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {resource.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">
                {resource.category}
              </span>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleOpenModal('resource', resource)} 
                  className="bg-navy-100 text-navy-800 p-2 rounded hover:bg-navy-200 transition-colors"
                >
                  <SafeIcon icon={FiEdit} className="text-sm" />
                </button>
                <button 
                  onClick={() => handleDelete('resource', resource.id)} 
                  className="bg-red-100 text-red-800 p-2 rounded hover:bg-red-200 transition-colors"
                >
                  <SafeIcon icon={FiTrash2} className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderModal = () => {
    if (!showModal) return null;

    let modalTitle = '';
    let modalContent = null;

    if (modalType === 'module') {
      modalTitle = editingItem ? 'Edit Module' : 'Add New Module';
      modalContent = (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Module Title
            </label>
            <input
              type="text"
              name="title"
              value={newItem.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              placeholder="Enter module title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={newItem.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              placeholder="Enter module description"
              rows="3"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={newItem.duration}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                placeholder="e.g. 45 min"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                name="status"
                value={newItem.status}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                required
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>
          </div>
        </>
      );
    } else if (modalType === 'lesson') {
      modalTitle = editingItem ? 'Edit Lesson' : 'Add New Lesson';
      modalContent = (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lesson Title
            </label>
            <input
              type="text"
              name="title"
              value={newItem.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              placeholder="Enter lesson title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Module
            </label>
            <select
              name="moduleId"
              value={newItem.moduleId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              required
            >
              {modules.map(module => (
                <option key={module.id} value={module.id}>
                  Module {module.id}: {module.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={newItem.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              placeholder="Enter lesson description"
              rows="3"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={newItem.duration}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                placeholder="e.g. 8:45"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                name="status"
                value={newItem.status}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                required
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Video URL
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                name="videoUrl"
                value={newItem.videoUrl}
                onChange={handleInputChange}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                placeholder="https://example.com/videos/lesson.mp4"
              />
              <button className="bg-sage-500 hover:bg-sage-600 text-white px-4 py-2 rounded-lg transition-colors">
                <SafeIcon icon={FiUpload} className="text-sm" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Upload or enter the URL to your video content
            </p>
          </div>
        </>
      );
    } else if (modalType === 'resource') {
      modalTitle = editingItem ? 'Edit Resource' : 'Add New Resource';
      modalContent = (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resource Title
            </label>
            <input
              type="text"
              name="title"
              value={newItem.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              placeholder="Enter resource title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={newItem.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              placeholder="Enter resource description"
              rows="3"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resource Type
              </label>
              <select
                name="type"
                value={newItem.type}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                required
              >
                <option value="Excel Template">Excel Template</option>
                <option value="PDF Guide">PDF Guide</option>
                <option value="Video Tutorial">Video Tutorial</option>
                <option value="External Link">External Link</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={newItem.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                required
              >
                <option value="Templates">Templates</option>
                <option value="Guides">Guides</option>
                <option value="Tutorials">Tutorials</option>
                <option value="Worksheets">Worksheets</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                File Size
              </label>
              <input
                type="text"
                name="fileSize"
                value={newItem.fileSize}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                placeholder="e.g. 2.3 MB"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Download URL
              </label>
              <input
                type="text"
                name="downloadUrl"
                value={newItem.downloadUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                placeholder="https://example.com/file.pdf"
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg mb-4">
            <button className="bg-sage-500 hover:bg-sage-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2">
              <SafeIcon icon={FiUpload} className="text-sm" />
              <span>Upload File</span>
            </button>
          </div>
        </>
      );
    }

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-navy-900">{modalTitle}</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <SafeIcon icon={FiX} className="text-xl" />
              </button>
            </div>
            {modalContent}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={handleCloseModal}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <SafeIcon icon={FiSave} className="text-sm" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
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
                <h1 className="text-lg font-bold text-navy-900">Content Management</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-sage-500 hover:bg-sage-600 text-white px-4 py-2 rounded-lg transition-colors">
                <SafeIcon icon={FiEye} className="mr-2" />
                Preview Site
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8">
          {[
            { id: 'modules', label: 'Modules' },
            { id: 'lessons', label: 'Lessons' },
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

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          {activeTab === 'modules' && renderModuleTab()}
          {activeTab === 'lessons' && renderLessonTab()}
          {activeTab === 'resources' && renderResourceTab()}
        </motion.div>

        {/* Educational Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
        >
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-2">Content Management Notice:</p>
            <p>
              All educational content should be thoroughly reviewed for accuracy and clarity before publishing.
              Remember that this platform provides educational content only and should not constitute financial advice.
              Always include appropriate disclaimers with your content.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {renderModal()}
    </div>
  );
};

export default AdminContent;