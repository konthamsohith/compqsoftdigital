import EventCard from '@/components/events/EventCard';
import styles from './WebinarsGrid.module.css';

const mockWebinars = [
  {
    id: 1,
    imageSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    title: 'Building AI-Powered Apps and Agents with Copilot Studio and Power Platform',
    date: 'Aug 19',
    location: '10:00 AM CST',
    href: '/webinars/ai-powered-apps'
  },
  {
    id: 2,
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    title: 'How Enterprises Are Scaling Agentic AI for Measurable Impact',
    date: 'Tuesday, June 16',
    location: '',
    href: '/webinars/scaling-agentic-ai'
  },
  {
    id: 3,
    imageSrc: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
    title: 'Reimagining Customer Service with Agentic AI & Intelligent Agents',
    date: 'April 1st',
    location: '11 AM CT',
    href: '/webinars/reimagining-customer-service'
  },
  {
    id: 4,
    imageSrc: 'https://images.unsplash.com/photo-1518932945647-7a3c96922df6?auto=format&fit=crop&q=80&w=800',
    title: 'AI Foundations That Deliver Real Business Value',
    date: 'Sep 30',
    location: '12 PM EST',
    href: '/webinars/ai-foundations'
  },
  {
    id: 5,
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    title: 'Modernizing Enterprise RPA & BPM with Microsoft Power Platform',
    date: 'Sep 24, 2026',
    location: '10AM CST',
    href: '/webinars/rpa-bpm-modernization'
  },
  {
    id: 6,
    imageSrc: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    title: 'Copilot Studio in a Day Workshop',
    date: 'April 30, 2026',
    location: '',
    href: '/webinars/copilot-studio-workshop'
  },
  {
    id: 7,
    imageSrc: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
    title: 'Driving AI Balance in Your Microsoft Frontier Journey',
    date: 'Dec 11, 2025',
    location: '',
    href: '/webinars/driving-ai-balance'
  },
  {
    id: 8,
    imageSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    title: 'Empowering CX Through Autonomous Agents',
    date: 'Jul 16, 2025',
    location: '',
    href: '/webinars/empowering-cx-autonomous'
  },
  {
    id: 9,
    imageSrc: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    title: 'How Agentic AI Agents Are Providing High Performance Customer Experiences',
    date: 'Aug 20',
    location: '10:00 AM CST',
    href: '/webinars/agentic-ai-cx'
  },
  {
    id: 10,
    imageSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    title: 'Power Platform App in a Day Workshop',
    date: 'April 29, 2026',
    location: '',
    href: '/webinars/power-platform-workshop'
  },
  {
    id: 11,
    imageSrc: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    title: 'Agentic AI and the Next Frontier of Digital Innovation',
    date: 'Oct 29',
    location: '11 AM CST',
    href: '/webinars/agentic-ai-frontier'
  }
];

export default function WebinarsGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {mockWebinars.map((webinar) => (
            <EventCard 
              key={webinar.id}
              imageSrc={webinar.imageSrc}
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
