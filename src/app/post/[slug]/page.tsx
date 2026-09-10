/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogs } from '@/lib/cms';
import blogContentData from '@/data/blogContent.json';
import styles from './page.module.css';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const posts = getBlogs();
  const post = posts.find((p: any) => p.href === `/post/${slug}`);
  const contentParagraphs = (blogContentData as Record<string, string[]>)[slug] || [];

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        {/* Breadcrumb / Back link */}
        <div className={styles.backLinkWrapper}>
          <Link href="/blog" className={styles.backLink}>
            ← Back to Insights
          </Link>
        </div>

        {/* Post Header */}
        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.readTime}>{post.readTime}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
        </header>

        {/* Post Hero Image */}
        <div className={styles.heroImageWrapper}>
          <Image
            src={post.imageSrc || "https://images.unsplash.com/photo-1542435503-956c26b96af5?auto=format&fit=crop&q=80&w=1200"}
            alt={post.title}
            fill
            className={styles.heroImage}
            unoptimized
          />
        </div>

        {/* Post Content */}
        <div className={styles.content}>
          <p className={styles.lead}>{post.excerpt}</p>
          
          {contentParagraphs.length > 0 ? (
            contentParagraphs.map((paragraph, idx) => {
              if (paragraph.length < 80 && !paragraph.endsWith('.') && !paragraph.includes('https://')) {
                return <h2 key={idx}>{paragraph}</h2>;
              }
              return <p key={idx}>{paragraph}</p>;
            })
          ) : (
            <p>Content is currently being updated for this post. Please check back soon!</p>
          )}
        </div>
      </article>

      {/* Recommended Posts */}
      <section className={styles.recommended}>
        <h2 className={styles.recommendedTitle}>More from Insights</h2>
        <div className={styles.recommendedGrid}>
          {posts
            .filter((p: any) => p.id !== post.id)
            .slice(0, 3)
            .map((recPost: any) => (
              <Link href={recPost.href} key={recPost.id} className={styles.recCard}>
                <div className={styles.recImageWrapper}>
                  <Image
                    src={recPost.imageSrc || "https://images.unsplash.com/photo-1542435503-956c26b96af5?auto=format&fit=crop&q=80&w=800"}
                    alt={recPost.title}
                    fill
                    className={styles.recImage}
                    unoptimized
                  />
                </div>
                <div className={styles.recContent}>
                  <h3 className={styles.recTitle}>{recPost.title}</h3>
                  <p className={styles.recMeta}>{recPost.date} • {recPost.readTime}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
