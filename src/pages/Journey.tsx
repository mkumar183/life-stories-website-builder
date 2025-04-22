
import { Layout } from '@/components/layout/Layout';

export default function Journey() {
  return (
    <Layout>
      <div className="py-16 md:py-24 container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Journey of Self</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-8">
              This page will detail your experience with yoga, meditation, and wellness,
              along with your thoughts and experiments in conscious living. It will include
              inspirations and people/events that shaped your inner development.
            </p>

            <div className="my-12 p-8 bg-secondary/50 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-serif mb-6">Under Construction</h2>
              <p className="text-muted-foreground">
                This section is currently being developed. Check back soon for insights into my journey of self-discovery!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
