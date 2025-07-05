import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiChevronUp } = FiIcons;

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "How much time do I need to dedicate to this program?",
      answer: "This educational program is designed for busy retirees. You'll need approximately 1-2 hours per week to watch the video lessons and implement the strategies. The entire program consists of 8 hours of video content spread across 6 modules, which you can complete at your own pace."
    },
    {
      question: "Is this too complex for someone without financial experience?",
      answer: "Not at all! This program is specifically designed for everyday retirees, not Wall Street professionals. We start with the basics and build your knowledge step by step. You don't need any prior experience with options or advanced financial strategies. Everything is explained in plain English with real-world examples."
    },
    {
      question: "What if I don't get the results shown in the testimonials?",
      answer: "Individual results vary based on market conditions, available capital, and personal implementation. The testimonials shown represent real students but are not typical results. We offer a 90-day money-back guarantee because we're confident in our educational content, but we cannot guarantee specific financial outcomes as this program is for educational purposes only."
    },
    {
      question: "Do I need special software or expensive tools?",
      answer: "No expensive software required! The program teaches you to use free or low-cost platforms that most brokers provide. We'll show you exactly which platforms to use and how to set them up. You'll also receive templates and calculators as part of the program to help with your analysis."
    },
    {
      question: "Can I access this on my phone or tablet?",
      answer: "Yes! The entire platform is mobile-optimized and works perfectly on phones, tablets, and computers. You can watch lessons, access the community, and download materials from any device. This makes it easy to learn on your schedule, whether you're at home or on the go."
    },
    {
      question: "How do I get support if I have questions?",
      answer: "You'll have multiple support options: access to our private community forum where you can ask questions and get peer support, monthly live Q&A sessions with the instructor, and email support for technical issues. Most students find the community forum especially valuable for getting quick answers."
    },
    {
      question: "Is this financial advice or investment advice?",
      answer: "No, this is strictly an educational program. We do not provide financial, investment, tax, or legal advice. All content is for educational purposes only. We strongly recommend consulting with qualified financial professionals before implementing any strategies you learn in this program."
    },
    {
      question: "What's included in the 90-day guarantee?",
      answer: "If you're not completely satisfied with the educational content within 90 days of purchase, simply contact our support team for a full refund. We stand behind the quality of our educational materials and want you to be completely satisfied with your learning experience."
    },
    {
      question: "How is this different from other retirement programs?",
      answer: "Most retirement programs focus on saving more money or reducing expenses. This educational program teaches you how to generate weekly income from savings you already have, without depleting your principal. It's based on 40 years of real-world experience, not just theory."
    },
    {
      question: "Do I need a minimum amount of savings to start?",
      answer: "The strategies taught can be scaled to different account sizes. We cover approaches for various capital levels, from smaller accounts to larger retirement savings. The key is learning the educational principles first, then scaling based on your comfort level and available capital."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about our educational program
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-navy-900 pr-4">
                  {faq.question}
                </h3>
                <SafeIcon 
                  icon={openFAQ === index ? FiChevronUp : FiChevronDown} 
                  className="text-xl text-gray-500 flex-shrink-0" 
                />
              </button>
              
              {openFAQ === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-8 pb-6"
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Support */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-navy-900 text-white p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg text-gray-300 mb-6">
            Our support team is here to help you understand how this educational program can benefit your retirement planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@weeklyincomeblueprint.com"
              className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Email Support
            </a>
            <a
              href="tel:+1-555-123-4567"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Call Us
            </a>
          </div>
        </motion.div>

        {/* Final Educational Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
        >
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-2">Important Reminder:</p>
            <p>
              This FAQ section is provided for informational purposes about our educational program only. 
              Nothing in these answers should be construed as financial, investment, tax, or legal advice. 
              Always consult with qualified professionals before making any financial decisions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;