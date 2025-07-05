import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiShield, FiClock, FiDollarSign, FiGift } = FiIcons;

const PricingSection = ({ onGetAccess }) => {
  const [selectedPlan, setSelectedPlan] = useState('full');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      id: 'full',
      name: 'Full Program',
      price: '$997',
      originalPrice: null,
      description: 'Complete access to all 6 modules',
      popular: true,
      features: [
        'All 6 Educational Modules',
        'Lifetime Access',
        'Private Community Access',
        'Monthly Live Q&A Sessions',
        'Downloadable Templates & Tools',
        'Mobile-Optimized Platform',
        'Email Support',
        '90-Day Money-Back Guarantee'
      ]
    },
    {
      id: 'payment',
      name: 'Payment Plan',
      price: '$349',
      originalPrice: null,
      description: '3 monthly payments',
      popular: false,
      features: [
        'All 6 Educational Modules',
        'Lifetime Access',
        'Private Community Access',
        'Monthly Live Q&A Sessions',
        'Downloadable Templates & Tools',
        'Mobile-Optimized Platform',
        'Email Support',
        '90-Day Money-Back Guarantee'
      ]
    },
    {
      id: 'financing',
      name: '6-Month Financing',
      price: '$179',
      originalPrice: null,
      description: 'Per month for 6 months',
      popular: false,
      features: [
        'All 6 Educational Modules',
        'Lifetime Access',
        'Private Community Access',
        'Monthly Live Q&A Sessions',
        'Downloadable Templates & Tools',
        'Mobile-Optimized Platform',
        'Email Support',
        '90-Day Money-Back Guarantee'
      ]
    }
  ];

  const bonuses = [
    {
      title: 'Weekly Income Calculator',
      value: '$197',
      description: 'Custom Excel template to calculate potential weekly income based on your savings'
    },
    {
      title: 'Risk Management Checklist',
      value: '$97',
      description: 'Comprehensive checklist to ensure proper risk management for every strategy'
    },
    {
      title: 'Tax Optimization Guide',
      value: '$147',
      description: 'Special guide for maximizing tax advantages in retirement accounts'
    },
    {
      title: 'Emergency Action Plan',
      value: '$127',
      description: 'Step-by-step plan for protecting your income during market downturns'
    }
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            Transform Your Retirement Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the payment option that works best for you. All plans include lifetime access and our 90-day guarantee.
          </p>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-8 rounded-xl mb-16 text-center"
        >
          <h3 className="text-3xl font-serif font-bold mb-4">
            What's Your Time Worth?
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            If this educational program helps you generate just $1,000 weekly, you'll recover your investment in one week. 
            The average student generates $2,800+ weekly within 90 days of completing the program.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-500">$1,000</div>
              <div className="text-sm text-gray-300">Weekly Income</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-500">$52,000</div>
              <div className="text-sm text-gray-300">Annual Income</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-500">1 Week</div>
              <div className="text-sm text-gray-300">ROI Timeline</div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className={`relative bg-white rounded-xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-gold-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-navy-900">{plan.price}</span>
                  {plan.id === 'payment' && (
                    <span className="text-gray-600 ml-2">x 3 payments</span>
                  )}
                  {plan.id === 'financing' && (
                    <span className="text-gray-600 ml-2">/month</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <SafeIcon icon={FiCheck} className="text-sage-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onGetAccess()}
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gold-500 hover:bg-gold-600 text-white'
                    : 'bg-navy-900 hover:bg-navy-800 text-white'
                }`}
              >
                Get Started Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bonus Materials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-sage-50 p-8 rounded-xl mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-navy-900 mb-4">
              Limited-Time Bonus Materials
            </h3>
            <p className="text-lg text-gray-600">
              Enroll today and receive these valuable bonuses at no additional cost
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-navy-900">{bonus.title}</h4>
                  <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
                    {bonus.value}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{bonus.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="text-2xl font-bold text-navy-900 mb-2">
              Total Bonus Value: <span className="text-gold-600">$568</span>
            </div>
            <p className="text-gray-600">Yours free when you enroll today</p>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-navy-900 text-white p-8 rounded-xl text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center">
              <SafeIcon icon={FiShield} className="text-2xl text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">90-Day Money-Back Guarantee</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            We're so confident in this educational program that we offer a full 90-day money-back guarantee. 
            If you're not completely satisfied with the educational content, simply request a refund within 90 days.
          </p>
          <div className="text-gold-500 font-medium">
            Your investment is completely protected.
          </div>
        </motion.div>

        {/* Final Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
        >
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-2">Investment Disclaimer:</p>
            <p>
              This educational program represents an investment in your financial education, not in financial markets. 
              While we provide comprehensive educational content, individual results may vary based on market conditions, 
              personal circumstances, and implementation of learned strategies. All content is for educational purposes only.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;