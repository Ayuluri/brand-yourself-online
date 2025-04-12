
import { Calendar, Award, Book, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const AboutSection = () => {
  const experienceItems = [
    {
      icon: <Briefcase className="h-8 w-8 text-highlight" />,
      title: '3+ Years',
      description: 'Professional Experience'
    },
    {
      icon: <Award className="h-8 w-8 text-highlight" />,
      title: '15+ Projects',
      description: 'Completed'
    },
    {
      icon: <Calendar className="h-8 w-8 text-highlight" />,
      title: '99% Success',
      description: 'Client Satisfaction'
    },
    {
      icon: <Book className="h-8 w-8 text-highlight" />,
      title: 'Continuous',
      description: 'Learning & Growth'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-bl from-background to-secondary/20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full md:w-2/5 order-2 md:order-1">
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src="https://placehold.co/600x800/6E59A5/FFFFFF/png?text=About+Me" 
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 bg-highlight/10 backdrop-blur-lg border border-highlight/30 rounded-lg">
                <p className="font-medium text-lg">
                  <span className="text-highlight font-bold">2+</span> Years of Experience
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5 order-1 md:order-2">
            <h2 className="section-title">About Me</h2>
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
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {experienceItems.map((item, index) => (
                <Card key={index} className="border border-border bg-background/50 backdrop-blur-sm hover:border-highlight/50 transition-all group">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="mb-2 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button className="bg-highlight hover:bg-highlight/80">
              <a href="https://drive.google.com/your-resume-link" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
