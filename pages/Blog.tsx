
import React from 'react';
import { BLOG_POSTS } from '../constants';
import ArticlePreview from '../components/ArticlePreview';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-['Lora'] font-bold text-slate-800">
          Gentle reads for your healing journey.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A collection of articles filled with compassionate advice and practical tips for your postpartum mind, body, and soul.
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {BLOG_POSTS.map(post => (
          <ArticlePreview key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
