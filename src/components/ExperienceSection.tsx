
import { useState, useEffect } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Separator } from './ui/separator';

const ExperienceSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "Experience",
    "Career Journey",
    "Professional Path",
    "Work History",
    "Career Milestones"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const experiences = [
    {
      role: "Team Lead",
      company: "SUNY RF",
      period: "Dec 2024 - Jun 2025",
      location: "Albany, NY",
      side: "left",
    },
    {
      role: "M.S in Computer Science",
      company: "SUNY at Albany",
      period: "Aug 2023 - Dec 2025",
      location: "Albany, NY",
      side: "right",
    },
    {
      role: "Software Engineer Intern",
      company: "Shiash Info Tech",
      period: "Jan 2023 - Jun 2023",
      location: "Hyderabad, India",
      side: "left",
    },
    {
      role: "Junior Software Engineer Intern",
      company: "Numeregeon Technologies",
      period: "Sep 2020 - Dec 2020",
      location: "Remote",
      side: "right",
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="section-container">
        <h2 className="section-title mb-4">{titles[titleIndex]}</h2>
        <p className="text-center text-muted-foreground mb-12">Career Milestones & Learning Paths</p>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-highlight/50"></div>
          
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-highlight border-4 border-background z-10"></div>
                
                <div className={`flex ${exp.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${exp.side === 'left' ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className={`bg-card/80 backdrop-blur-sm border border-border hover:border-highlight/50 transition-all p-5 rounded-lg shadow-md animate-fade-in ${exp.side === 'left' ? 'mr-4' : 'ml-4'}`}>
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                      <p className="text-highlight font-medium">{exp.company}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  {/* Empty space for the other side */}
                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
