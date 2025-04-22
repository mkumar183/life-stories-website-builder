
import { Layout } from '@/components/layout/Layout';

export default function About() {
  return (
    <Layout>
      <div className="py-16 md:py-24 container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">About Me</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-8">
              This page will contain detailed information about your family life journey, 
              personal background, upbringing, and values. It will highlight important events
              and milestones in your life and include reflections on family and relationships.
            </p>

            <div className="my-12 p-8 bg-secondary/50 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-serif mb-6">Under Construction</h2>
              <p className="text-muted-foreground">
                This section is currently being developed. Check back soon for the complete story of my life journey!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
