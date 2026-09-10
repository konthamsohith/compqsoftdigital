/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from './BlogCard';
import styles from './BlogGrid.module.css';

import { getBlogs } from '@/lib/cms';

export default async function BlogGrid() {
  const posts = getBlogs();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {posts.map((post: any, index: number) => (
            <BlogCard
              key={post.id || index}
              imageSrc={post.imageSrc || "https://images.unsplash.com/photo-1542435503-956c26b96af5?auto=format&fit=crop&q=80&w=800"}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              href={post.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
