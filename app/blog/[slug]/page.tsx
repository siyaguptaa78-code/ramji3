import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Breadcrumb, JsonLd, SITE_CONFIGS } from '@ramji/shared';
import { RAMJI3_BLOG_POSTS, BlogPost } from '../blog-data';
import { Clock, Calendar, UserCheck, ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';

const config = SITE_CONFIGS.ramji3;

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return RAMJI3_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = RAMJI3_BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  const postUrl = `https://ramji247cricket.live/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: `${post.metaTitle} | RAMJI247`,
      description: post.metaDescription,
      url: postUrl,
      siteName: 'RAMJI247 Cricket',
      type: 'article',
      publishedTime: '2026-11-18T00:00:00+05:30',
      authors: [post.author],
      images: [
        {
          url: `https://ramji247cricket.live${post.heroImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.metaTitle} | RAMJI247`,
      description: post.metaDescription,
      images: [`https://ramji247cricket.live${post.heroImage}`],
    },
  };
}

export default function ArticlePage({ params }: PageProps) {
  const post = RAMJI3_BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = RAMJI3_BLOG_POSTS.filter((p) => p.slug !== post.slug);
  const postUrl = `https://ramji247cricket.live/blog/${post.slug}`;

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${postUrl}#article`,
        headline: post.title,
        description: post.metaDescription,
        image: `https://ramji247cricket.live${post.heroImage}`,
        datePublished: '2026-11-18T00:00:00+05:30',
        dateModified: '2026-11-18T00:00:00+05:30',
        author: {
          '@type': 'Organization',
          name: post.author,
          url: 'https://ramji247cricket.live',
        },
        publisher: {
          '@type': 'Organization',
          name: 'RAMJI247',
          url: 'https://ramji247cricket.live',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ramji247cricket.live/images/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': postUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${postUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://ramji247cricket.live',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://ramji247cricket.live/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.shortTitle,
            item: postUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${postUrl}#faq`,
        mainEntity: post.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <JsonLd data={jsonLdData} />
      <Breadcrumb
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.shortTitle },
        ]}
      />

      <header className="my-6">
        <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold uppercase tracking-wider text-[11px] border border-emerald-500/20">
            {post.category}
          </span>
          <span className="text-neutral-400 flex items-center gap-1">
            <Clock size={12} /> {post.readTime}
          </span>
          <span className="text-neutral-400 flex items-center gap-1">
            <Calendar size={12} /> {post.publishedDate}
          </span>
          <span className="text-neutral-400 flex items-center gap-1">
            <UserCheck size={12} /> {post.author}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-8 bg-neutral-900 shadow-2xl">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500 p-5 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            Executive Summary
          </h2>
          <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed m-0">
            {post.summary}
          </p>
        </div>

        <div className="rounded-xl bg-neutral-900/50 border border-white/10 p-5 mb-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
            Table of Contents
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {post.tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-500/50">›</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <article
        className="prose prose-invert max-w-none text-neutral-300 text-sm sm:text-base leading-relaxed space-y-6"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <section className="mt-14 pt-10 border-t border-white/10" id="faqs">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle size={22} className="text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {post.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-neutral-900/50 border border-white/10 p-5"
            >
              <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed m-0">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-xl bg-neutral-900/60 border border-white/10 p-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center text-lg flex-shrink-0 border border-emerald-500/30">
          R
        </div>
        <div className="text-xs text-neutral-400 leading-relaxed">
          <span className="font-bold text-white block mb-0.5">
            RAMJI247 Live Cricket Research Desk
          </span>
          Analytical cricket insights compiled by sports statisticians and cricket analysts. Information is verified through official ICC, BCCI, and tournament board releases. 18+ responsible entertainment standards strictly observed.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>All Cricket Guides</span>
        </Link>
        {otherPosts[0] && (
          <Link
            href={`/blog/${otherPosts[0].slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-white transition-colors"
          >
            <span>Next: {otherPosts[0].shortTitle}</span>
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}
