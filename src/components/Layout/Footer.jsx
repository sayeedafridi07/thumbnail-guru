import React from 'react';
import { Image, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">Thumbnail Guru</span>
            </div>
            <p className="text-white mb-4">
              Create stunning thumbnails for all your content with our easy-to-use editor.
            </p>
            <div className="flex space-x-4">
              <a href="#twitter" className="text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#instagram" className="text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#facebook" className="text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#youtube" className="text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Templates', 'Pricing', 'Updates'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Blog', 'Tutorials', 'Support', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Careers', 'Contact', 'Privacy', 'Terms'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white mt-12 pt-8 text-center text-white text-sm">
          <p>© {new Date().getFullYear()} Thumbnail Guru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;