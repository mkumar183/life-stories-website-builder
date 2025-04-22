
import { Layout } from '@/components/layout/Layout';

export default function Professional() {
  return (
    <Layout>
      <div className="py-16 md:py-24 container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Professional Journey</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-8">
              This page will showcase your professional journey with a timeline of your career,
              roles you've held, companies you've worked at, and your special abilities like
              technical acumen, leadership, and team building skills.
            </p>

            <div className="my-12 p-8 bg-secondary/50 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-serif mb-6">Under Construction</h2>
              <p className="text-muted-foreground">
                This section is currently being developed. Check back soon for a complete timeline of my professional journey!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
