
import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  // In the future, this will fetch the actual post from Supabase based on the slug
  
  return (
    <Layout>
      <article className="py-16 md:py-24 container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-sm text-muted-foreground">April 15, 2025</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              {slug ? slug.split('-').join(' ').replace(/^\w/, c => c.toUpperCase()) : 'Blog Post'}
            </h1>
          </div>
          
          <div className="aspect-video rounded-xl overflow-hidden mb-12">
            <img 
              src="https://source.unsplash.com/random/1200x800?yoga" 
              alt="Blog post hero" 
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>
              This is a placeholder for the blog post content. In the future, this content will be dynamically loaded from Supabase based on the post slug.
            </p>
            
            <p>
              The post will support Markdown formatting, including:
            </p>
            
            <ul>
              <li>Headers and formatting</li>
              <li>Images and media</li>
              <li>Code snippets</li>
              <li>Blockquotes</li>
            </ul>
            
            <h2>Example Heading</h2>
            <p>
              This is an example paragraph to demonstrate the styling of the blog post content. The actual content will be stored in Supabase and rendered here.
            </p>
            
            <blockquote>
              "This is an example blockquote that might appear in the blog post."
            </blockquote>
            
            <p>
              When Supabase integration is complete, this component will fetch and render the actual blog post content based on the URL slug.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
