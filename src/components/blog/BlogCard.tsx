import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  imageSrc: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
}

export default function BlogCard({ imageSrc, category, title, excerpt, href }: BlogCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link href={href} className={styles.link}>
          Read More <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </div>
  );
}
