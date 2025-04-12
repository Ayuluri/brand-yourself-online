
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gradient mb-2">Portfolio</h2>
            <p className="text-sm text-gray-400 max-w-md">
              Crafting digital experiences through clean code and thoughtful design. 
              Let's create something amazing together.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-highlight transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-highlight transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-highlight transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="hover:text-highlight transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
