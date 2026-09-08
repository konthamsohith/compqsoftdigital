import EventCard from './EventCard';
import styles from './EventsGrid.module.css';

const mockEvents = [
  {
    id: 1,
    imageSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    title: 'Driving Your Agentic AI Field Services to Empower Your Oil & Gas / Energy Assets',
    date: 'Feb 11, 2026',
    location: '',
    href: '/events/agentic-ai-field-services'
  },
  {
    id: 2,
    imageSrc: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    title: 'Transforming Insurance with Power Platform, AI Agents, and Microsoft Copilot',
    date: 'Sep 23-24, 2025',
    location: 'New York, NY, USA',
    href: '/events/transforming-insurance'
  },
  {
    id: 3,
    imageSrc: 'https://images.unsplash.com/photo-1475721025505-c315a6ab3600?auto=format&fit=crop&q=80&w=800',
    title: 'Power Platform Community Conference',
    date: 'Oct 28-30, 2025',
    location: 'Las Vegas, NV, USA',
    href: '/events/power-platform-conference'
  },
  {
    id: 4,
    imageSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    title: 'Fuel Innovation with Copilot, Power Platform, and AI Agents',
    date: 'Nov 18, 2025',
    location: 'Arlington, VA, USA',
    href: '/events/fuel-innovation-copilot'
  }
];

export default function EventsGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {mockEvents.map((event) => (
            <EventCard 
              key={event.id}
              imageSrc={event.imageSrc}
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
