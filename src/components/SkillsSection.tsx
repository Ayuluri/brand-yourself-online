
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';

interface Skill {
  name: string;
  percentage: number;
  category: string;
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const skills: Skill[] = [
    { name: 'HTML5', percentage: 95, category: 'Frontend' },
    { name: 'CSS3/SASS', percentage: 90, category: 'Frontend' },
    { name: 'JavaScript', percentage: 85, category: 'Frontend' },
    { name: 'TypeScript', percentage: 80, category: 'Frontend' },
    { name: 'React', percentage: 90, category: 'Frontend' },
    { name: 'Angular', percentage: 75, category: 'Frontend' },
    { name: 'Node.js', percentage: 80, category: 'Backend' },
    { name: 'Express', percentage: 85, category: 'Backend' },
    { name: 'MongoDB', percentage: 75, category: 'Backend' },
    { name: 'PostgreSQL', percentage: 70, category: 'Backend' },
    { name: 'AWS', percentage: 65, category: 'DevOps' },
    { name: 'Docker', percentage: 70, category: 'DevOps' },
  ];
  
  const frontendSkills = skills.filter(skill => skill.category === 'Frontend');
  const backendSkills = skills.filter(skill => skill.category === 'Backend');
  const devOpsSkills = skills.filter(skill => skill.category === 'DevOps');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const renderSkillsForCategory = (categorySkills: Skill[]) => (
    <div className="space-y-6">
      {categorySkills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.percentage}%</span>
          </div>
          <div className="skill-bar">
            <div 
              className="skill-progress"
              style={{ 
                width: isVisible ? `${skill.percentage}%` : '0%',
                transitionDelay: `${index * 100}ms`
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-tr from-background to-secondary/20" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title mb-12">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-border bg-background/50 backdrop-blur-sm hover:border-highlight/50 transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-gradient">Frontend Development</h3>
              {renderSkillsForCategory(frontendSkills)}
            </CardContent>
          </Card>
          
          <Card className="border border-border bg-background/50 backdrop-blur-sm hover:border-highlight/50 transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-gradient">Backend Development</h3>
              {renderSkillsForCategory(backendSkills)}
            </CardContent>
          </Card>
          
          <Card className="border border-border bg-background/50 backdrop-blur-sm hover:border-highlight/50 transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-gradient">DevOps & Tools</h3>
              {renderSkillsForCategory(devOpsSkills)}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
