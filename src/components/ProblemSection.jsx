import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAlertTriangle, FiTrendingDown, FiClock, FiDollarSign } = FiIcons;

const ProblemSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      icon: FiDollarSign,
      title: "The $2 Million Retirement Myth",
      description: "Financial advisors tell you that you need $2 million to retire comfortably, but what if there's a better way to generate income from what you already have?",
      stat: "Only 13% of Americans have $2M saved"
    },
    {
      icon: FiTrendingDown,
      title: "The 4% Rule Fails Middle Class",
      description: "The traditional 4% withdrawal rule was designed for the wealthy. For middle-class retirees, it often means outliving your money or living in poverty.",
      stat: "4% of $500K = $20K/year"
    },
    {
      icon: FiClock,
      title: "Time Is Running Out",
      description: "With AI displacing jobs and inflation eating away at savings, waiting for the 'perfect' retirement plan is no longer an option.",
      stat: "Inflation reduces purchasing power by 3% annually"
    },
    {
      icon: FiAlertTriangle,
      title: "Fear of Outliving Money",
      description: "The biggest fear among retirees isn't death—it's running out of money and becoming a burden on their families.",
      stat: "Average retirement lasts 20+ years"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            The Retirement Crisis Nobody Talks About
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional retirement advice is failing middle-class Americans. 
            Here's why the old rules don't work anymore.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <SafeIcon icon={problem.icon} className="text-2xl text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-red-700">
                      📊 {problem.stat}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-navy-900 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              What if there was a better way?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Instead of hoping your savings last, what if you could generate consistent weekly income 
              while keeping your principal intact?
            </p>
            <div className="text-gold-500 font-bold text-lg">
              Keep reading to discover the solution...
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;