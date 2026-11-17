'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, SITE_CONFIGS } from '@ramji/shared';
import { RAMJI3_BLOG_POSTS } from './blog-data';
import { Trophy, Clock, ArrowRight, Flame } from 'lucide-react';

const config = SITE_CONFIGS.ramji3;

export default function BlogHubPage() {
  const featuredPost = RAMJI3_BLOG_POSTS[0];
  const allPosts = RAMJI3_BLOG_POSTS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Cricket Insights & Analytics' }]} />

      <div className="my-6 pb-6 border-b border-white/10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">
          <Flame size={14} />
          <span>RAMJI247 Live Cricket Analysis</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Cricket Analytics, WTC Scenarios &amp; Match Previews
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-3xl">
          Deep tactical research on international cricket series, World Test Championship mathematics, death-overs bowling telemetry, and live match data.
        </p>
      </div>

      {/* Featured Spotlight */}
      {featuredPost && (
        <div className="mb-12 rounded-2xl bg-neutral-900/80 border border-white/10 overflow-hidden shadow-2xl hover:border-emerald-500/30 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8">
            <div className="lg:col-span-7">
              <Link href={`/blog/${featuredPost.slug}`} className="block overflow-hidden rounded-xl border border-white/10">
                <img
                  src={featuredPost.heroImage}
                  alt={featuredPost.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold uppercase tracking-wider text-[11px] border border-emerald-500/20">
                    {featuredPost.category}
                  </span>
                  <span className="text-neutral-400 flex items-center gap-1">
                    <Clock size={12} /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:text-emerald-400 transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-6">
                  {featuredPost.summary}
                </p>
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-white transition-colors"
              >
                <span>Read Full WTC Analysis</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {allPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl bg-neutral-900/60 border border-white/10 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-lg"
          >
            <div>
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden border-b border-white/10">
                <img
                  src={post.heroImage}
                  alt={post.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs mb-2">
                  <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
                    {post.category}
                  </span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-neutral-400 flex items-center gap-1 text-[11px]">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-emerald-400 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-white transition-colors"
              >
                <span>Read Article</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
