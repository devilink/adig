import React from 'react'
import HeroSection from './components/HeroSection'
import TrustedBySection from './components/TrustedBySection'
import AboutSection from './components/AboutSection'
import WhyAdigSection from './components/WhyAdigSection'
import SolutionsSection from './components/SolutionsSection'
import TestimonialsSection from './components/TestimonialsSection'
import BrandsSection from './components/BrandsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-900 selection:text-white">
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <WhyAdigSection />
      <SolutionsSection />
      <TestimonialsSection />
      <BrandsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
