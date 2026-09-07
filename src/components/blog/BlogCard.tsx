import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  imageSrc: string;
  category: string;
  title: string;
  excerpt: string;
  date?: string;
  readTime?: string;
  href: string;
  views?: number;
  comments?: number;
}

export default function BlogCard({ 
  imageSrc, 
  category, 
  title, 
  excerpt, 
  date = "Jul 30", 
  readTime = "3 min read", 
  href,
  views = 7,
  comments = 0
}: BlogCardProps) {
  return (
    <div className={styles.card}>
      <Link href={href} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className={styles.image}
          />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.metaRow}>
          <span className={styles.meta}>
            {date} · {readTime}
          </span>
          <button className={styles.menuButton}>
            ⋮
          </button>
        </div>
        
        <div className={styles.category}>{category}</div>
        
        <Link href={href} className={styles.titleLink}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        
        <div className={styles.divider}></div>
        
        <div className={styles.footerRow}>
          <div className={styles.stats}>
            <span>{views} views</span>
            <span>{comments} comments</span>
          </div>
          <button className={styles.heartButton}>
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}
