import React, { useState } from 'react';
import EmailPopup from './Main/Contact/EmailPopUp';

interface FooterProps {
  featuresRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterProps> = ({ featuresRef, aboutRef }) => {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
 

  return (
    <footer className="bg-[rgba(26,26,26,0.2)] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-bold mb-4">Serenity</h3>
            <p className="text-white/80 text-sm">Your companion on the journey to mental wellness and recovery.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 text-sm hover:text-white transition-colors">Home</a></li>
              <li>
                <button 
                  onClick={() => scrollToSection(featuresRef)} 
                  className="text-white/80 text-sm hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection(aboutRef)} 
                  className="text-white/80 text-sm hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>

              
              <li>
                <a 
                  href="/TandCs" 
                  className="text-white/80 text-sm hover:text-white transition-colors"
                >
                  Terms of Use, User Policy, and Privacy Policy
                </a>
              </li>
            
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-bold mb-4">Connect</h3>
            <ul>
            <li>
                <button 
                  className="text-white/80 text-sm hover:text-white transition-colors"
                >
                  hello@dvtech.com
                </button>
              </li>
            </ul>
            <div className="flex space-x-4">
              {/* Social media icons... */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Serenity. App created by DVTech Ventures in Nairobi. All rights reserved.
          </p>
        </div>
      </div>
      <EmailPopup isOpen={isEmailPopupOpen} onClose={() => setIsEmailPopupOpen(false)} />
    </footer>
  );
};

export default Footer;