
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
            Your Title / Position
          </h2>
          <p className="text-lg mb-8 max-w-xl">
            A passionate developer with expertise in web development, 
            focused on creating elegant solutions to complex problems.
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
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-highlight/20 overflow-hidden border-4 border-highlight/30">
              {/* Replace with your image */}
              <img 
                src="https://placehold.co/600x600/6E59A5/FFFFFF/png?text=Your+Photo" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-highlight flex items-center justify-center text-white font-bold text-sm animate-pulse">
              Available for Hire
            </div>
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
