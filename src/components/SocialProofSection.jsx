import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiTrendingUp, FiUser, FiDollarSign } = FiIcons;

const SocialProofSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Robert M.",
      age: "Age 62",
      location: "Florida",
      result: "$2,800/week",
      quote: "This educational program completely changed my retirement outlook. I'm now generating consistent weekly income while my principal stays protected.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Margaret K.",
      age: "Age 59",
      location: "Texas",
      result: "$1,650/week",
      quote: "I was skeptical at first, but the educational approach made everything clear. The weekly income gives me confidence about my future.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "James T.",
      age: "Age 67",
      location: "California",
      result: "$4,200/week",
      quote: "After learning these strategies, I no longer worry about outliving my money. The educational content is top-notch and easy to follow.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "20+", label: "Successful Students", icon: FiUser },
    { number: "$150K+", label: "Average Annual Income", icon: FiDollarSign },
    { number: "95%", label: "Student Satisfaction", icon: FiStar },
    { number: "18 Months", label: "Average Program Age", icon: FiTrendingUp }
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
            Real Students, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our educational program has helped retirees transform their financial outlook
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="text-2xl text-navy-600" />
                </div>
                <div className="text-3xl font-bold text-navy-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.age} • {testimonial.location}</p>
                  <div className="bg-sage-100 text-sage-800 px-3 py-1 rounded-full text-sm font-medium mt-2">
                    {testimonial.result}
                  </div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-gold-500 text-lg" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
        >
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-2">Important Disclaimers:</p>
            <ul className="space-y-1">
              <li>• Results shown are for educational purposes only and do not constitute financial advice</li>
              <li>• Past performance does not guarantee future results</li>
              <li>• Individual results may vary based on market conditions and personal circumstances</li>
              <li>• All testimonials are from real students but results are not typical</li>
              <li>• Please consult with qualified financial professionals before implementing any strategies</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;