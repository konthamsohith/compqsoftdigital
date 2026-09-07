import Image from 'next/image';
import Link from 'next/link';
import styles from './TeamSection.module.css';

const teamMembers = [
  {
    id: 1,
    name: 'Madhu Sheikh',
    title: 'CEO, Founder, Partner',
    bio: 'Madhu is a technologist with 25+ years of experience transforming enterprises with Microsoft technologies. As CEO, he leads CompQsoft\'s strategic vision and operations, fostering a culture of innovation and excellence.',
    imageSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300',
    linkedIn: '#'
  },
  {
    id: 2,
    name: 'Craig Moser',
    title: 'President & Board Member',
    bio: 'Craig brings 30+ years of leadership experience scaling Microsoft-focused businesses. His strategic foresight and ability to deliver results align perfectly with our customer-centric innovation goals.',
    imageSrc: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
    linkedIn: '#'
  },
  {
    id: 3,
    name: 'Mandeep Singh',
    title: 'EVP, Global Delivery',
    bio: 'Mandeep is an IT Delivery Leader with extensive experience driving successful digital transformation projects. He ensures our global delivery centers operate seamlessly to provide world-class solutions.',
    imageSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    linkedIn: '#'
  },
  {
    id: 4,
    name: 'Jim Sheehan',
    title: 'Board of Directors',
    bio: 'Jim is a highly respected technology executive who played a pivotal role in transforming PowerObjects into a leading Microsoft Dynamics partner. He brings deep expertise to our board.',
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    linkedIn: '#'
  },
  {
    id: 5,
    name: 'James Martin',
    title: 'SVP, Global Sales',
    bio: 'James leads our global sales organization, driving revenue growth and market expansion. His customer-first approach helps enterprises maximize their investment in Microsoft technologies.',
    imageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    linkedIn: '#'
  },
  {
    id: 6,
    name: 'David Smith',
    title: 'VP, Cloud Services',
    bio: 'David oversees our Cloud Modernization practice. With a deep understanding of Azure, he helps organizations migrate, optimize, and secure their workloads in the cloud.',
    imageSrc: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&q=80&w=300',
    linkedIn: '#'
  },
  {
    id: 7,
    name: 'John Doe',
    title: 'Director of AI & Automation',
    bio: 'John leads our AI and Automation initiatives, helping clients leverage Generative AI and Copilot to streamline operations and unlock new business value.',
    imageSrc: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300',
    linkedIn: '#'
  }
];

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet the Team</h2>
          <div className={styles.divider}></div>
        </div>
        
        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={member.imageSrc} 
                  alt={member.name} 
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.memberTitle}>{member.title}</p>
                <Link href={member.linkedIn} className={styles.linkedinIcon}>
                  In
                </Link>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
