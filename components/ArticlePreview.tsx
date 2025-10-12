
import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';

interface ArticlePreviewProps {
  post: BlogPost;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="block group bg-white/60 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="overflow-hidden rounded-lg mb-6">
          <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <h3 className="text-2xl font-['Lora'] font-bold text-slate-800 mb-3 group-hover:text-[#A584A5] transition-colors">{post.title}</h3>
      <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
      <span className="font-semibold text-[#A584A5] self-start">
        Read Full Article &rarr;
      </span>
    </Link>
  );
};

export default ArticlePreview;