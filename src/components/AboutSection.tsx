
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  const handleDownloadResume = () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Update this path to your actual resume file
    link.download = 'Sai_Narasimha_Reddy_Ayuluri_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-bl from-background to-secondary/20">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <h2 className="section-title">About Me</h2>
          
          <div className="max-w-3xl w-full border-2 border-highlight/50 rounded-xl p-8 bg-background/50 backdrop-blur-sm shadow-lg hover:border-highlight transition-all duration-300">
            <p className="text-lg mb-6">
              I am a Computer Science graduate student at State University of New York at Albany with a strong GPA of 3.6/4.0. 
              My coursework includes Distributed Systems, Software Engineering, Machine Learning, Blockchain Technology, and Advanced Algorithms.
            </p>
            <p className="text-lg mb-8">
              I specialize in full-stack development with experience in React, React Native, MongoDB, and various backend technologies.
              As a Team Lead at SUNY RF, I led the development of EarthQuest, an innovative ecogame using React Native and MongoDB integrated with Google Earth APIs.
              My experience includes building scalable software applications, RESTful APIs, and creating user-focused interfaces.
            </p>
            
            <div className="flex justify-center">
              <Button 
                onClick={handleDownloadResume} 
                className="bg-highlight hover:bg-highlight/80 flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
