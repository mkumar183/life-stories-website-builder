
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  // This will be connected to a form submission API or Supabase later
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
    alert("This form is currently for demonstration. In the future, it will actually send messages.");
  };

  return (
    <Layout>
      <div className="py-16 md:py-24 container-custom">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg mb-6">
                Have questions or want to connect? Feel free to reach out using the form or through any of the social channels listed below.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="What would you like to discuss?" 
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <h2 className="font-serif text-2xl font-medium mb-6">Connect With Me</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-secondary/80 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-secondary/80 p-3 rounded-full mr-4">
                    <Linkedin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/yourprofile" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-secondary/80 p-3 rounded-full mr-4">
                    <Github className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      github.com/yourusername
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="font-medium mb-4">Response Time</h3>
                <p className="text-muted-foreground">
                  I typically respond to messages within 24-48 hours. Thanks for your patience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
