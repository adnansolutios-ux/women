import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import Button from '../components/Button';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const post = BLOG_POSTS.find(p => p.id === Number(id));

  if (!post) {
    // Redirect if post not found. Using useEffect to avoid rendering during render.
    useEffect(() => {
      navigate('/blog', { replace: true });
    }, [navigate]);
    return null; // Render nothing while redirecting
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
            <Link to="/blog" className="text-[#A584A5] hover:underline font-semibold transition-colors mb-4 inline-block">
                &larr; Back to Articles
            </Link>
          <h1 className="text-4xl md:text-5xl font-['Lora'] font-bold text-slate-800 leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{post.excerpt}</p>
        </header>
        
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg my-8"
        />

        <div className="text-lg text-slate-700 leading-relaxed space-y-6">
          {post.content}
        </div>
      </article>

      <div className="text-center mt-20 bg-white/60 p-12 rounded-2xl max-w-3xl mx-auto shadow-sm">
        <h3 className="text-2xl font-['Lora'] font-bold text-slate-800">You are not alone on this journey</h3>
        <p className="mt-4 text-slate-600">Join our community to receive gentle, supportive notes and your free ‘Calm Mom Sleep Journal’.</p>
        <div className="mt-8">
            <Button to="/contact">Join Our Community</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;