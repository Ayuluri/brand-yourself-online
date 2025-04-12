
import { useState } from 'react';
import { ExternalLink, GitHub } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
  category: string;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, and payment processing.',
      image: 'https://placehold.co/600x400/6E59A5/FFFFFF/png?text=E-Commerce+Project',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      githubLink: 'https://github.com/yourusername/ecommerce-project',
      demoLink: 'https://ecommerce-project.example.com',
      category: 'Web App'
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'A drag-and-drop task management app inspired by Trello with real-time updates.',
      image: 'https://placehold.co/600x400/6E59A5/FFFFFF/png?text=Task+Manager',
      tags: ['React', 'Firebase', 'TailwindCSS'],
      githubLink: 'https://github.com/yourusername/task-manager',
      demoLink: 'https://task-manager.example.com',
      category: 'Web App'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and TailwindCSS.',
      image: 'https://placehold.co/600x400/6E59A5/FFFFFF/png?text=Portfolio+Website',
      tags: ['React', 'TailwindCSS', 'Framer Motion'],
      githubLink: 'https://github.com/yourusername/portfolio',
      demoLink: 'https://yourusername.example.com',
      category: 'Website'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A weather forecast application that displays current weather data using OpenWeather API.',
      image: 'https://placehold.co/600x400/6E59A5/FFFFFF/png?text=Weather+App',
      tags: ['JavaScript', 'API Integration', 'CSS3'],
      githubLink: 'https://github.com/yourusername/weather-app',
      demoLink: 'https://weather-app.example.com',
      category: 'Web App'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A blogging platform with markdown support, user authentication, and comment system.',
      image: 'https://placehold.co/600x400/6E59A5/FFFFFF/png?text=Blog+Platform',
      tags: ['Next.js', 'PostgreSQL', 'Prisma'],
      githubLink: 'https://github.com/yourusername/blog-platform',
      demoLink: 'https://blog-platform.example.com',
      category: 'Full Stack'
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'An app that allows users to search for recipes based on ingredients they have.',
      image: 'https://placehold.co/600x400/6E59A5/FFFFFF/png?text=Recipe+Finder',
      tags: ['React Native', 'API Integration'],
      githubLink: 'https://github.com/yourusername/recipe-finder',
      demoLink: 'https://recipe-finder.example.com',
      category: 'Mobile App'
    },
  ];
  
  const filters = ['All', 'Web App', 'Website', 'Full Stack', 'Mobile App'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title mb-12">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter, index) => (
            <Button
              key={index}
              variant={activeFilter === filter ? "default" : "outline"}
              className={
                activeFilter === filter 
                  ? "bg-highlight hover:bg-highlight/80" 
                  : "hover:border-highlight hover:text-highlight"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="border border-border bg-background/50 backdrop-blur-sm hover:border-highlight/50 transition-all overflow-hidden group"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    <div>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-highlight transition-colors mr-2"
                      >
                        <GitHub size={20} />
                      </a>
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-highlight transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <span className="bg-highlight/80 text-white px-3 py-1 rounded-md text-sm">{project.category}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
