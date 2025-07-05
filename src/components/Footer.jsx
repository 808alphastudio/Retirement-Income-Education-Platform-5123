import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiShield } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-gold-500 to-sage-500 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiShield} className="text-white text-sm" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Weekly Income Blueprint</h3>
                <p className="text-xs text-gray-400">Educational Program Only</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering retirees with educational strategies to generate weekly income from their savings. 
              Our comprehensive program teaches proven methodologies for creating consistent cash flow while 
              protecting your principal.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="text-gold-500" />
                <span className="text-sm">support@weeklyincomeblueprint.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="text-gold-500" />
                <span className="text-sm">1-555-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMapPin} className="text-gold-500" />
                <span className="text-sm">Educational Services, USA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#program" className="text-gray-300 hover:text-gold-500 transition-colors">Program Overview</a></li>
              <li><a href="#instructor" className="text-gray-300 hover:text-gold-500 transition-colors">Meet Instructor</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-gold-500 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-gold-500 transition-colors">FAQ</a></li>
              <li><a href="/login" className="text-gray-300 hover:text-gold-500 transition-colors">Student Login</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          {/* Important Disclaimers */}
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h4 className="text-lg font-bold text-gold-500 mb-4">Important Disclaimers</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                <strong>Educational Purpose Only:</strong> This program is designed for educational purposes only and does not constitute financial, investment, tax, or legal advice.
              </p>
              <p>
                <strong>No Guarantee of Results:</strong> Past performance does not guarantee future results. Individual results may vary based on market conditions, personal circumstances, and implementation of strategies.
              </p>
              <p>
                <strong>Consult Professionals:</strong> Always consult with qualified financial, tax, and legal professionals before implementing any strategies learned in this program.
              </p>
              <p>
                <strong>Risk Disclosure:</strong> All investment strategies involve risk of loss. Never invest money you cannot afford to lose.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Weekly Income Blueprint. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Educational Program</span>
              <span>•</span>
              <span>Not Financial Advice</span>
              <span>•</span>
              <span>Consult Your Advisor</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;