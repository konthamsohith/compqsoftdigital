/* eslint-disable @typescript-eslint/no-explicit-any */
import EventCard from './EventCard';
import styles from './EventsGrid.module.css';

import { getEvents } from '@/lib/cms';

export default async function EventsGrid() {
  const eventsList = getEvents();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {eventsList.map((event: any, index: number) => (
            <EventCard 
              key={event.id || index}
              imageSrc={event.imageSrc || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'}
              title={event.title}
              date={event.date}
              location={event.location}
              href={event.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
