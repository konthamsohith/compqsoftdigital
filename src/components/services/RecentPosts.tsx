import Image from 'next/image';
import styles from './RecentPosts.module.css';

const posts = [
  {
    title: "Modern AI & Machine Learning for the Digital Era",
    image: "/image1.png"
  },
  {
    title: "Dynamics 365 Business Cloud Transformation for the Modern Workspace",
    image: "/image2.png"
  },
  {
    title: "AI and Power Apps Migration: A Complete Guide",
    image: "/ai_graphic.jpg"
  }
];

export default function RecentPosts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Recent Posts</h2>
        
        <div className={styles.postsGrid}>
          {posts.map((post, index) => (
            <div key={index} className={styles.postCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className={styles.image}
                />
              </div>
              <div className={styles.postContent}>
                <h3 className={styles.postTitle}>{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.btnContainer}>
          <button className={styles.readBlogBtn}>Read Blog</button>
        </div>
      </div>
    </section>
  );
}
