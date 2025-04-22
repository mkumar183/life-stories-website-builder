
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  // This will eventually be fetched from Supabase
  const samplePosts = [
    {
      id: 1,
      title: "Getting Started with Meditation",
      excerpt: "Learn how to begin a meditation practice that can transform your daily life and bring inner peace.",
      date: "April 12, 2025",
      image: "https://source.unsplash.com/random/800x600?meditation&sig=1",
      slug: "sample-post-1"
    },
    {
      id: 2,
      title: "The Intersection of Technology and Mindfulness",
      excerpt: "Exploring how modern technology can both hinder and enhance our mindfulness practices.",
      date: "April 15, 2025",
      image: "https://source.unsplash.com/random/800x600?technology&sig=2",
      slug: "sample-post-2"
    },
    {
      id: 3,
      title: "Leadership Lessons from Ancient Wisdom",
      excerpt: "How principles from ancient philosophical traditions can inform modern leadership approaches.",
      date: "April 18, 2025",
      image: "https://source.unsplash.com/random/800x600?leadership&sig=3",
      slug: "sample-post-3"
    },
    {
      id: 4,
      title: "Building Resilient Teams",
      excerpt: "Strategies for fostering resilience and adaptability in professional teams.",
      date: "April 20, 2025",
      image: "https://source.unsplash.com/random/800x600?teamwork&sig=4",
      slug: "sample-post-4"
    },
    {
      id: 5,
      title: "The Power of Family Rituals",
      excerpt: "How creating and maintaining family rituals can strengthen bonds and create lasting memories.",
      date: "April 22, 2025",
      image: "https://source.unsplash.com/random/800x600?family&sig=5",
      slug: "sample-post-5"
    },
    {
      id: 6,
      title: "Yoga for Busy Professionals",
      excerpt: "Simple yoga practices that can be integrated into even the busiest schedules.",
      date: "April 25, 2025",
      image: "https://source.unsplash.com/random/800x600?yoga&sig=6",
      slug: "sample-post-6"
    },
  ];

  return (
    <Layout>
      <div className="py-16 md:py-24 container-custom">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Thoughts and reflections on professional growth, family life, and the journey of self-discovery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePosts.map((post) => (
              <article key={post.id} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-border group">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-3">{post.date}</div>
                  <h3 className="text-xl font-medium mb-3 font-serif group-hover:text-accent transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              This is currently a static blog template. Soon, it will be powered by Supabase for dynamic content management.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
