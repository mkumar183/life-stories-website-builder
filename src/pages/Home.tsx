import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary/20 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Welcome to My <span className="text-accent">Life Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                A personal website that captures my professional expertise, 
                family values, and journey of self-discovery through yoga and meditation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg">
                  <Link to="/about">
                    Learn About Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/blog">
                    Read My Blog
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl animate-scale-in bg-gradient-to-b from-accent/5 to-background p-1">
              <img 
                src="/images/hero.jpg"
                alt="Professional headshot against a green foliage background" 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-accent/5">
        <div className="container-custom max-w-4xl">
          <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-center italic">
            "Nature never hurries, yet everything is accomplished."
            <footer className="mt-4 text-base font-sans text-muted-foreground">
              — Rumi
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Journey Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">My Life Journeys</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Professional Journey */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
              <div className="h-48 rounded-lg bg-journey-blue/10 flex items-center justify-center mb-6">
                <svg className="h-16 w-16 text-journey-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Professional Journey</h3>
              <p className="text-muted-foreground mb-6">
                Explore my career path, roles, and the professional expertise I've developed over the years.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/professional">
                  Explore Career Path
                </Link>
              </Button>
            </div>

            {/* Family Journey */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
              <div className="h-48 rounded-lg bg-journey-earth/10 flex items-center justify-center mb-6">
                <svg className="h-16 w-16 text-journey-earth" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Family & Life Journey</h3>
              <p className="text-muted-foreground mb-6">
                Discover my personal background, important life events, and the values that guide me.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/about">
                  Learn About My Life
                </Link>
              </Button>
            </div>

            {/* Self Journey */}
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
              <div className="h-48 rounded-lg bg-journey-blue/5 flex items-center justify-center mb-6">
                <svg className="h-16 w-16 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Journey of Self</h3>
              <p className="text-muted-foreground mb-6">
                Follow my path through yoga, meditation, and the pursuit of conscious living.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/journey">
                  Discover My Practice
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-bold">Latest Blog Posts</h2>
            <Button variant="ghost" asChild>
              <Link to="/blog">
                View All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This will be replaced with actual blog posts from Supabase later */}
            {[1, 2, 3].map((i) => (
              <article key={i} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-border group">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={`https://source.unsplash.com/random/600x400?meditation&sig=${i}`} 
                    alt="Blog post thumbnail" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-3">April {i + 10}, 2025</div>
                  <h3 className="text-xl font-medium mb-3 font-serif group-hover:text-accent transition-colors">
                    <Link to={`/blog/sample-post-${i}`}>Sample Blog Post {i}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    This is a sample blog post description. It will be replaced with actual content from Supabase.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to={`/blog/sample-post-${i}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8 opacity-90">
            Have questions or want to connect? I'd love to hear from you!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Contact Me
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
