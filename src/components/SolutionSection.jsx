import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiTrendingUp, FiShield, FiRefreshCw, FiTrendingDown } = FiIcons;

const SolutionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            The "Tankless Water Heater" Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Just like a tankless water heater provides hot water on demand without depleting a tank, 
            this educational system teaches you to generate income on demand without depleting your principal.
          </p>
        </motion.div>

        {/* Analogy Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Traditional Approach */}
          <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
            <div className="text-center mb-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiTrendingDown} className="text-2xl text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-2">Hot Water Tank</h3>
              <p className="text-red-600">Traditional Withdrawal Method</p>
            </div>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start space-x-2">
                <span className="text-red-500 mt-1">❌</span>
                <span>Fixed tank size (your savings)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 mt-1">❌</span>
                <span>Water runs out (money depletes)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 mt-1">❌</span>
                <span>4% rule limits usage</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 mt-1">❌</span>
                <span>Fear of running out</span>
              </li>
            </ul>
          </div>

          {/* New Approach */}
          <div className="bg-sage-50 p-8 rounded-xl border-2 border-sage-200">
            <div className="text-center mb-6">
              <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiRefreshCw} className="text-2xl text-sage-600" />
              </div>
              <h3 className="text-2xl font-bold text-sage-800 mb-2">Tankless System</h3>
              <p className="text-sage-600">Weekly Income Generation</p>
            </div>
            <ul className="space-y-3 text-sage-700">
              <li className="flex items-start space-x-2">
                <span className="text-sage-500 mt-1">✅</span>
                <span>Generates income on demand</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-sage-500 mt-1">✅</span>
                <span>Principal stays intact</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-sage-500 mt-1">✅</span>
                <span>Weekly cash flow</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-sage-500 mt-1">✅</span>
                <span>Confidence and peace of mind</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiZap} className="text-2xl text-gold-600" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Weekly Income</h3>
            <p className="text-gray-600">
              Generate $1,000-$5,000+ weekly income through educational strategies
            </p>
          </div>

          <div className="text-center">
            <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiShield} className="text-2xl text-sage-600" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Principal Protection</h3>
            <p className="text-gray-600">
              Keep your retirement savings intact while generating income
            </p>
          </div>

          <div className="text-center">
            <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiTrendingUp} className="text-2xl text-navy-600" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Tax Advantages</h3>
            <p className="text-gray-600">
              Leverage tax-free compounding for 59.5+ investors
            </p>
          </div>
        </motion.div>

        {/* Founder Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-8 rounded-xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-serif font-bold mb-6">
              "I went from worrying about my retirement to generating $5-10K weekly"
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              After 40 years in finance, I discovered this educational approach that changed everything. 
              Instead of slowly depleting my savings, I learned to generate consistent weekly income 
              while keeping my principal intact. Now I teach others this same educational system.
            </p>
            <div className="text-gold-500 font-medium">
              — Your Instructor (Finance Degree, 40 Years Experience)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;