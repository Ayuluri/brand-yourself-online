
import { Button } from './ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-bl from-background to-secondary/20">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <h2 className="section-title">About Me</h2>
          
          <div className="max-w-3xl w-full border-2 border-highlight/50 rounded-xl p-8 bg-background/50 backdrop-blur-sm shadow-lg hover:border-highlight transition-all duration-300">
            <p className="text-lg mb-6">
              I am a passionate developer with a strong background in building web applications
              that are not only functional but also user-friendly and aesthetically pleasing.
              My journey in tech started several years ago, and since then I've been constantly
              learning and improving my skills.
            </p>
            <p className="text-lg mb-8">
              I specialize in creating responsive, accessible, and performant web experiences
              using modern technologies like React, TypeScript, and TailwindCSS. I'm always eager
              to tackle new challenges and collaborate with teams that share my passion for
              quality code and exceptional user experiences.
            </p>
            
            <div className="flex justify-center">
              <Button className="bg-highlight hover:bg-highlight/80">
                <a href="https://drive.google.com/your-resume-link" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
