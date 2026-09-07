import Image from 'next/image';
import Link from 'next/link';
import styles from './CaseStudyCard.module.css';

interface CaseStudyCardProps {
  imageSrc: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  excerpt: string;
  views: string;
  likes: number;
  href: string;
}

export default function CaseStudyCard({ 
  imageSrc, 
  date, 
  readTime, 
  category, 
  title, 
  excerpt, 
  views, 
  likes, 
  href 
}: CaseStudyCardProps) {
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
          <span className={styles.date}>{date} &middot; {readTime}</span>
          <button className={styles.menuButton}>&#8942;</button>
        </div>
        
        <span className={styles.category}>{category}</span>
        
        <Link href={href} className={styles.titleLink}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        
        <p className={styles.excerpt}>{excerpt}</p>
        
        <div className={styles.footerRow}>
          <span className={styles.views}>{views} views</span>
          <div className={styles.likesContainer}>
            <span className={styles.likesCount}>{likes}</span>
            <button className={styles.likeButton}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.heartIcon}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
