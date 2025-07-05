import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiCheck, FiLock, FiCreditCard } = FiIcons;

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState('full');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const plans = {
    full: { name: 'Full Program', price: 997, description: 'One-time payment' },
    payment: { name: 'Payment Plan', price: 349, description: '3 payments of $349' },
    financing: { name: '6-Month Financing', price: 179, description: '6 payments of $179' }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/dashboard');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif font-bold text-navy-900 mb-4">
            Complete Your Enrollment
          </h1>
          <p className="text-lg text-gray-600">
            You're one step away from transforming your retirement income
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Order Summary</h2>
            
            {/* Plan Selection */}
            <div className="space-y-4 mb-8">
              {Object.entries(plans).map(([key, plan]) => (
                <div
                  key={key}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedPlan === key
                      ? 'border-gold-500 bg-gold-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedPlan(key)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-navy-900">{plan.name}</h3>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-navy-900">
                        ${plan.price}
                      </div>
                      {selectedPlan === key && (
                        <SafeIcon icon={FiCheck} className="text-gold-500 ml-2" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Program Includes */}
            <div className="border-t pt-6">
              <h3 className="font-bold text-navy-900 mb-4">Your Program Includes:</h3>
              <ul className="space-y-2 text-sm">
                {[
                  'All 6 Educational Modules',
                  'Lifetime Access to Content',
                  'Private Community Forum',
                  'Monthly Live Q&A Sessions',
                  'Downloadable Templates & Tools',
                  'Mobile-Optimized Platform',
                  'Email Support',
                  '90-Day Money-Back Guarantee'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <SafeIcon icon={FiCheck} className="text-sage-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantee */}
            <div className="mt-8 bg-sage-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <SafeIcon icon={FiShield} className="text-sage-600" />
                <span className="font-bold text-sage-800">90-Day Guarantee</span>
              </div>
              <p className="text-sm text-sage-700">
                Your investment is protected by our 90-day money-back guarantee.
              </p>
            </div>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Payment Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Payment Information */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-navy-900 mb-4 flex items-center">
                  <SafeIcon icon={FiCreditCard} className="mr-2" />
                  Payment Details
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <SafeIcon icon={FiLock} className="text-gray-600" />
                  <span className="font-medium text-gray-700">Secure Payment</span>
                </div>
                <p className="text-sm text-gray-600">
                  Your payment information is encrypted and secure. We use industry-standard SSL encryption.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {isProcessing ? (
                  <>
                    <div className="spinner mr-2"></div>
                    Processing...
                  </>
                ) : (
                  `Complete Payment - $${plans[selectedPlan].price}`
                )}
              </button>
            </form>

            {/* Disclaimer */}
            <div className="mt-6 text-xs text-gray-500">
              <p>
                By completing this purchase, you acknowledge that this is an educational program only and does not constitute financial advice. 
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;