import Image from 'next/image';
import Link from 'next/link';
import styles from './EventCard.module.css';

interface EventCardProps {
  imageSrc: string;
  title: string;
  date: string;
  location: string;
  href: string;
}

export default function EventCard({ 
  imageSrc, 
  title, 
  date, 
  location, 
  href 
}: EventCardProps) {
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
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.meta}>
          {date}{location && ` | ${location}`}
        </p>
        
        <div className={styles.buttonContainer}>
          <Link href={href} className={styles.button}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
