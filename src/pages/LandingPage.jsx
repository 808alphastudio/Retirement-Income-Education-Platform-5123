import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import SocialProofSection from '../components/SocialProofSection';
import ProgramOverview from '../components/ProgramOverview';
import InstructorSection from '../components/InstructorSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import DisclaimerBanner from '../components/DisclaimerBanner';

const LandingPage = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleGetAccess = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-white">
      <DisclaimerBanner />
      <Header />
      <HeroSection onGetAccess={handleGetAccess} />
      <ProblemSection />
      <SolutionSection />
      <SocialProofSection />
      <ProgramOverview />
      <InstructorSection />
      <PricingSection onGetAccess={handleGetAccess} />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default LandingPage;