/* eslint-disable @typescript-eslint/no-explicit-any */
import EventCard from '@/components/events/EventCard';
import styles from './WebinarsGrid.module.css';

import { getWebinars } from '@/lib/cms';

export default async function WebinarsGrid() {
  const webinarsList = getWebinars();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {webinarsList.map((webinar: any, index: number) => (
            <EventCard 
              key={webinar.id || index}
              imageSrc={webinar.imageSrc || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'}
              title={webinar.title}
              date={webinar.date}
              location={webinar.location}
              href={webinar.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
