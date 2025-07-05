import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBookOpen, FiUsers, FiClock, FiDownload, FiVideo, FiMessageCircle } = FiIcons;

const ProgramOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const modules = [
    {
      number: "01",
      title: "Foundation & Mindset Shift",
      description: "Learn the 'Tankless Water Heater' retirement philosophy and why the 4% rule fails middle-class Americans. Set up platforms and understand risk management.",
      duration: "45 min",
      lessons: 6
    },
    {
      number: "02",
      title: "Market Analysis & Opportunity Recognition",
      description: "Understand market cycles, volatility, and economic indicators. Learn to identify weekly income opportunities and build watchlists.",
      duration: "60 min",
      lessons: 8
    },
    {
      number: "03",
      title: "Options Chain Mastery",
      description: "Master reading and analyzing option chains. Learn about TIPS, LEAPS, covered calls, and position sizing strategies.",
      duration: "75 min",
      lessons: 10
    },
    {
      number: "04",
      title: "Weekly Execution System",
      description: "Step-by-step weekly methodology for trade timing, execution strategies, and market condition adaptations.",
      duration: "90 min",
      lessons: 12
    },
    {
      number: "05",
      title: "Tax Optimization & Retirement Accounts",
      description: "Maximize tax-free compounding, understand IRA vs. taxable strategies, and plan for RMDs and estate considerations.",
      duration: "50 min",
      lessons: 7
    },
    {
      number: "06",
      title: "Advanced Strategies & Troubleshooting",
      description: "Learn market crash protection, volatility management, income scaling, and how to avoid common mistakes.",
      duration: "80 min",
      lessons: 9
    }
  ];

  const features = [
    {
      icon: FiVideo,
      title: "HD Video Lessons",
      description: "Professional quality videos with playback speed controls and mobile optimization"
    },
    {
      icon: FiDownload,
      title: "Templates & Tools",
      description: "Downloadable worksheets, calculators, and tracking templates"
    },
    {
      icon: FiUsers,
      title: "Private Community",
      description: "Access to exclusive Facebook-style community forum with peer support"
    },
    {
      icon: FiMessageCircle,
      title: "Live Q&A Sessions",
      description: "Monthly live sessions with the instructor for personalized guidance"
    },
    {
      icon: FiBookOpen,
      title: "Progress Tracking",
      description: "Track your learning progress with completion badges and milestones"
    },
    {
      icon: FiClock,
      title: "Lifetime Access",
      description: "Keep access to all content and updates for life with your one-time purchase"
    }
  ];

  return (
    <section id="program" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            Complete Educational Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six comprehensive modules designed to teach you everything you need to know about generating weekly income from retirement savings
          </p>
        </motion.div>

        {/* Time Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-sage-50 p-8 rounded-xl mb-16 text-center"
        >
          <h3 className="text-2xl font-bold text-navy-900 mb-4">
            Just 1-2 Hours Weekly
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            This educational program is designed for busy retirees. Spend just 1-2 hours per week learning and implementing these strategies.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-sage-600">6</div>
              <div className="text-sm text-gray-600">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sage-600">52</div>
              <div className="text-sm text-gray-600">Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sage-600">8</div>
              <div className="text-sm text-gray-600">Hours Total</div>
            </div>
          </div>
        </motion.div>

        {/* Modules */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-navy-900 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg">
                  {module.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiClock} className="text-xs" />
                      <span>{module.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiBookOpen} className="text-xs" />
                      <span>{module.lessons} lessons</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={feature.icon} className="text-2xl text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Educational Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
        >
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-2">Educational Program Disclaimer:</p>
            <p>
              This program is designed for educational purposes only. All strategies, techniques, and methodologies taught are for learning and should not be considered as financial, investment, or tax advice. Students are encouraged to consult with qualified professionals before implementing any strategies learned in this program.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramOverview;