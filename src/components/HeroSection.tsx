
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fadeState, setFadeState] = useState('in');
  
  const titles = [
    "MS Computer Science Student",
    "Full Stack Engineer",
    "React Specialist",
    "Team Lead"
  ];
  
  // Animation effect for the profile photo
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(prev => !prev);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Title rotation effect
  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      if (fadeState === 'in') {
        setFadeState('out');
      }
    }, 3500); // Start fading out after 3.5s

    const fadeInTimer = setTimeout(() => {
      if (fadeState === 'out') {
        setCurrentTitleIndex(prev => (prev + 1) % titles.length);
        setFadeState('in');
      }
    }, 4000); // Change text and fade in after 4s

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(fadeInTimer);
    };
  }, [fadeState, titles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Sai Narasimha Reddy Ayuluri</span>
          </h1>
          <h2 className={`text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground transition-opacity duration-500 ${fadeState === 'in' ? 'opacity-100' : 'opacity-0'}`}>
            {titles[currentTitleIndex]}
          </h2>
          <p className="text-lg mb-8 max-w-xl">
            A passionate developer with expertise in web development, React Native, MongoDB, 
            and full-stack engineering, focused on creating elegant solutions to complex problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-highlight hover:bg-highlight/80 text-white">
              <a href="#projects" className="flex items-center">
                View My Work <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="relative">
            <div 
              className={`w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-highlight/20 overflow-hidden border-4 border-highlight/30 transition-all duration-1000 ease-in-out ${animate ? 'transform translate-y-2' : 'transform -translate-y-2'}`}
            >
              {/* Replace with your image */}
              <img 
                src="https://placehold.co/600x600/6E59A5/FFFFFF/png?text=Sai+Ayuluri" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Removed the "Available for Hire" bubble */}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-highlight">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
