
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8 text-highlight" />,
      title: 'Email',
      value: 'sainarasimhareddyayuluri@gmail.com',
      link: 'mailto:sainarasimhareddyayuluri@gmail.com',
    },
    {
      icon: <Phone className="h-8 w-8 text-highlight" />,
      title: 'Phone',
      value: '+1-838-265-9814',
      link: 'tel:+18382659814',
    },
    {
      icon: <MapPin className="h-8 w-8 text-highlight" />,
      title: 'Location',
      value: 'Albany, NY',
      link: 'https://maps.google.com/?q=Albany,NY',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-bl from-background to-secondary/20">
      <div className="section-container">
        <h2 className="section-title mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border border-border bg-background/50 backdrop-blur-sm hover:border-highlight/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-lg">{info.title}</h3>
                <a 
                  href={info.link} 
                  target={info.title === 'Location' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-highlight transition-colors"
                >
                  {info.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button className="bg-highlight hover:bg-highlight/80 text-white px-8">
            <a href="mailto:sainarasimhareddyayuluri@gmail.com">
              Send Me An Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
