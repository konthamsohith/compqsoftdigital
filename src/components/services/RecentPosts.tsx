import Image from 'next/image';
import styles from './RecentPosts.module.css';

const posts = [
  {
    title: "Modernizing Legacy Applications for the Digital Age",
    image: "/blog-03.jpg",
    href: "https://www.compqsoftdigital.com/post/modernizing-legacy-applications-for-the-digital-age"
  },
  {
    title: "Dynamics 365 Business Central Implementation: A Step-by-Step Guide",
    image: "/Implementing-Dynamics-365-Business-Central-A-Guide-compqsoft-blog.jpg",
    href: "https://www.compqsoftdigital.com/post/dynamics-365-business-central-implementation-a-step-by-step-guide"
  },
  {
    title: "InfoPath to Power Apps Migration: A Complete Guide",
    image: "/Migrate-InfoPath-to-Power-Apps-A-Complete-Guide-compqsoft-blog.jpg",
    href: "https://www.compqsoftdigital.com/post/infopath-to-power-apps-migration-a-complete-guide"
  }
];

export default function RecentPosts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Recent Posts</h2>
        
        <div className={styles.postsGrid}>
          {posts.map((post, index) => (
            <a key={index} href={post.href} target="_blank" rel="noopener noreferrer" className={styles.postCard}>
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
            </a>
          ))}
        </div>
        
        <div className={styles.btnContainer}>
          <a 
            href="https://www.compqsoftdigital.com/blog/categories/blog-posts" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.readBlogBtn}
          >
            Read Blog
          </a>
        </div>
      </div>
    </section>
  );
}
