import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAlertTriangle, FiX } = FiIcons;

const DisclaimerBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-yellow-50 border-b border-yellow-200 px-4 py-3"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <SafeIcon icon={FiAlertTriangle} className="text-yellow-600" />
          <p className="text-sm text-yellow-800">
            <strong>Educational Disclaimer:</strong> This program is for educational purposes only and does not constitute financial advice. 
            <span className="hidden sm:inline"> Consult qualified professionals before implementing any strategies.</span>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-yellow-600 hover:text-yellow-800 transition-colors"
        >
          <SafeIcon icon={FiX} className="text-lg" />
        </button>
      </div>
    </motion.div>
  );
};

export default DisclaimerBanner;