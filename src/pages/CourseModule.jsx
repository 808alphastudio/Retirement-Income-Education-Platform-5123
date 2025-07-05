import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiPlay, FiPause, FiSkipForward, FiSkipBack, FiDownload, FiBookOpen, FiCheck } = FiIcons;

const CourseModule = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const moduleData = {
    1: {
      title: 'Foundation & Mindset Shift',
      description: 'Learn the tankless water heater philosophy and fundamental principles',
      lessons: [
        { id: 1, title: 'Introduction to Weekly Income Generation', duration: '8:45', completed: true },
        { id: 2, title: 'The Tankless Water Heater Analogy', duration: '12:30', completed: true },
        { id: 3, title: 'Why the 4% Rule Fails', duration: '15:20', completed: true },
        { id: 4, title: 'Tax Advantages for 59.5+ Investors', duration: '10:15', completed: true },
        { id: 5, title: 'Platform Setup and Account Types', duration: '18:45', completed: true },
        { id: 6, title: 'Risk Management Fundamentals', duration: '14:30', completed: true }
      ]
    },
    2: {
      title: 'Market Analysis & Opportunity Recognition',
      description: 'Understanding market cycles, volatility, and identifying opportunities',
      lessons: [
        { id: 1, title: 'Market Cycles and Patterns', duration: '12:15', completed: true },
        { id: 2, title: 'Volatility Analysis', duration: '14:30', completed: true },
        { id: 3, title: 'Economic Indicators Impact', duration: '16:45', completed: true },
        { id: 4, title: 'Building Your Watchlist', duration: '9:30', completed: false },
        { id: 5, title: 'News and Events Trading', duration: '11:20', completed: false },
        { id: 6, title: 'Sector Rotation Strategies', duration: '13:45', completed: false },
        { id: 7, title: 'Timing Your Entries', duration: '15:15', completed: false },
        { id: 8, title: 'Weekly Planning Process', duration: '12:30', completed: false }
      ]
    }
  };

  const module = moduleData[moduleId];
  const lesson = module?.lessons[currentLesson];

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Module Not Found</h2>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-navy-900 text-white px-6 py-3 rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const handlePrevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const handleNextLesson = () => {
    if (currentLesson < module.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

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
                <h1 className="text-lg font-bold text-navy-900">
                  Module {moduleId}: {module.title}
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Lesson {currentLesson + 1} of {module.lessons.length}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Video Container */}
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <SafeIcon icon={FiPlay} className="text-6xl mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
                  <p className="text-gray-300">Duration: {lesson.duration}</p>
                </div>
              </div>

              {/* Video Controls */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-navy-900">{lesson.title}</h2>
                  <span className="text-sm text-gray-600">{lesson.duration}</span>
                </div>

                <div className="flex items-center justify-center space-x-4 mb-6">
                  <button
                    onClick={handlePrevLesson}
                    disabled={currentLesson === 0}
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <SafeIcon icon={FiSkipBack} className="text-xl" />
                  </button>
                  <button
                    onClick={togglePlayPause}
                    className="p-4 rounded-full bg-navy-900 hover:bg-navy-800 text-white transition-colors"
                  >
                    <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="text-2xl" />
                  </button>
                  <button
                    onClick={handleNextLesson}
                    disabled={currentLesson === module.lessons.length - 1}
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <SafeIcon icon={FiSkipForward} className="text-xl" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-navy-900 h-2 rounded-full w-1/3"></div>
                </div>

                {/* Lesson Description */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-navy-900 mb-2">About this lesson:</h4>
                  <p className="text-gray-600 text-sm">
                    This lesson covers the fundamental concepts you need to understand before moving forward. 
                    Take notes and don't hesitate to replay sections that need clarification.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Lesson Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 mt-6"
            >
              <h3 className="text-lg font-bold text-navy-900 mb-4">Lesson Notes</h3>
              <textarea
                placeholder="Take notes during the lesson..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent resize-none"
              />
              <div className="flex justify-end mt-4">
                <button className="bg-sage-500 hover:bg-sage-600 text-white px-6 py-2 rounded-lg transition-colors">
                  Save Notes
                </button>
              </div>
            </motion.div>
          </div>

          {/* Lesson Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-navy-900 mb-4">Module Lessons</h3>
              <div className="space-y-3">
                {module.lessons.map((lessonItem, index) => (
                  <div
                    key={lessonItem.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      index === currentLesson
                        ? 'bg-navy-900 text-white'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setCurrentLesson(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          lessonItem.completed
                            ? 'bg-sage-500 text-white'
                            : index === currentLesson
                            ? 'bg-white text-navy-900'
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {lessonItem.completed ? (
                            <SafeIcon icon={FiCheck} className="text-sm" />
                          ) : (
                            index + 1
                          )}
                        </div>
                        <div>
                          <h4 className={`font-medium text-sm ${
                            index === currentLesson ? 'text-white' : 'text-navy-900'
                          }`}>
                            {lessonItem.title}
                          </h4>
                          <p className={`text-xs ${
                            index === currentLesson ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {lessonItem.duration}
                          </p>
                        </div>
                      </div>
                      {index === currentLesson && (
                        <SafeIcon icon={FiPlay} className="text-white text-sm" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6 mt-6"
            >
              <h3 className="text-lg font-bold text-navy-900 mb-4">Lesson Resources</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gold-100 p-2 rounded-lg">
                      <SafeIcon icon={FiDownload} className="text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-900 text-sm">Lesson Worksheet</h4>
                      <p className="text-xs text-gray-600">PDF • 1.2 MB</p>
                    </div>
                  </div>
                  <button className="text-navy-600 hover:text-navy-800 font-medium text-sm">
                    Download
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-sage-100 p-2 rounded-lg">
                      <SafeIcon icon={FiBookOpen} className="text-sage-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-900 text-sm">Additional Reading</h4>
                      <p className="text-xs text-gray-600">PDF • 850 KB</p>
                    </div>
                  </div>
                  <button className="text-navy-600 hover:text-navy-800 font-medium text-sm">
                    Download
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Educational Disclaimer */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6"
            >
              <div className="text-xs text-yellow-800">
                <p className="font-medium mb-1">Educational Content Only</p>
                <p>
                  This lesson is for educational purposes only and does not constitute financial advice. 
                  Please consult with qualified professionals before implementing any strategies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModule;