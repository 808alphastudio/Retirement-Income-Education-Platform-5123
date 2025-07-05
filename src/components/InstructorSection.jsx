import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiTrendingUp, FiUsers, FiBookOpen, FiMic } = FiIcons;

const InstructorSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const credentials = [
    {
      icon: FiAward,
      title: "Finance Degree",
      description: "Formal education in financial markets and investment strategies"
    },
    {
      icon: FiTrendingUp,
      title: "$5-10K Weekly Income",
      description: "Personally generates consistent weekly income using these educational strategies"
    },
    {
      icon: FiUsers,
      title: "20+ Successful Students",
      description: "Proven track record of teaching and mentoring successful students"
    },
    {
      icon: FiBookOpen,
      title: "40 Years Experience",
      description: "Four decades of experience in options and financial markets"
    }
  ];

  const mediaFeatures = [
    "Featured on Financial Education Podcast",
    "Guest Speaker at Retirement Planning Seminars",
    "Contributor to Educational Finance Publications",
    "Recognized Expert in Retirement Income Strategies"
  ];

  return (
    <section id="instructor" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            Meet Your Instructor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from someone who has walked the path and successfully teaches others to do the same
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-8">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                alt="Instructor"
                className="w-64 h-64 rounded-full mx-auto object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                40+ Years Experience
              </div>
            </div>

            <h3 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Financial Education Expert
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Finance Degree • Options Specialist • Retirement Income Educator
            </p>

            {/* Media Features */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-navy-900 mb-4 flex items-center">
                <SafeIcon icon={FiMic} className="mr-2" />
                Media & Recognition
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {mediaFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Credentials and Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Personal Story */}
            <div className="bg-navy-900 text-white p-8 rounded-xl mb-8">
              <h4 className="text-2xl font-serif font-bold mb-6 text-gold-500">
                "From Traditional Retirement Advice to Financial Freedom"
              </h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Like many Americans, I followed traditional retirement advice for decades. Save money, invest in index funds, and hope it lasts. But after 40 years in finance, I discovered there was a better way.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I developed this educational system that generates $5-10K weekly income while keeping my principal intact. Instead of slowly depleting my savings, I'm building wealth and living comfortably.
              </p>
              <p className="text-gold-500 font-medium">
                Now I teach others this same educational approach that transformed my retirement.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-navy-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <SafeIcon icon={credential.icon} className="text-xl text-navy-600" />
                  </div>
                  <h5 className="font-bold text-navy-900 mb-2">
                    {credential.title}
                  </h5>
                  <p className="text-sm text-gray-600">
                    {credential.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Teaching Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-sage-50 p-8 rounded-xl"
        >
          <div className="text-center">
            <h4 className="text-2xl font-bold text-navy-900 mb-6">
              Teaching Philosophy
            </h4>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "I believe in education over speculation. This program teaches proven methodologies through clear, step-by-step instruction. My goal is to empower students with knowledge and confidence, not to provide financial advice. Every strategy is taught with proper risk management and educational disclaimers."
            </p>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
        >
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-2">Educational Disclaimer:</p>
            <p>
              The instructor's personal results and experiences are shared for educational purposes only. These results are not typical and do not guarantee similar outcomes for students. All teaching is for educational purposes and should not be considered as financial, investment, or tax advice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorSection;