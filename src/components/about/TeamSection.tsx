import Image from 'next/image';
import Link from 'next/link';
import styles from './TeamSection.module.css';

const teamMembers = [
  {
    id: 1,
    name: 'Madina Shaik',
    title: 'CEO, Chairman of Board',
    bio: 'Madina Shaik is a tech expert, a real estate investor, and the chief innovator behind CompQsoft. He brings expertise from 30 years of consulting on system integration, implementation, requirements analysis, and more.',
    imageSrc: '/madina.jpg',
    linkedIn: '#'
  },
  {
    id: 2,
    name: 'Greg Moser',
    title: 'President, Board Member',
    bio: 'Greg is responsible for driving the strategy and vision for the business, in addition to driving operational efficiencies, culture, growth, and go-to-market strategies for CompQSoft Digital. He brings over 28 years of delivering digital transformative programs and has been involved in the some of the largest Microsoft deployments globally.',
    imageSrc: '/CQSD Leadership Team Profiles.png',
    linkedIn: '#'
  },
  {
    id: 3,
    name: 'Sachin Narula',
    title: 'CFO, Board Member',
    bio: 'Sachin has over 20+ years of experience building financial strategies and managing projects, 12 of which were directed towards growing CompQsoft. He oversees financial operations, which include Cost Management and financial statements.',
    imageSrc: '/WhatsApp Image 2025-07-01 at 22.32.39_554b4369.jpg',
    linkedIn: '#'
  },
  {
    id: 4,
    name: 'Jon Rastia',
    title: 'CTO, EVP Strategy',
    bio: 'Jon is responsible for driving sales, pre-sales, IP and CompQSoft Digital’s vision for our go-to-markets and strategies. He brings over 25 years of experience in designing and implementing enterprise customer experience, finance, and user experience solutions, with a proven track record of reducing costs, increasing efficiency, and improving ROI. His expertise spans retail, manufacturing, insurance, and financial services.',
    imageSrc: '/WhatsApp Image 2025-05-07 at 15.34_edited.png',
    linkedIn: '#'
  },
  {
    id: 5,
    name: 'Andrew Jeffers',
    title: 'Chief Customer Officer',
    bio: 'Andrew is responsible for overseeing the delivery of enterprise level digital transformations for customers in a variety of industry verticals. He possesses over 25 years of Microsoft-focused solution experience by building high performing, cross functional teams successfully delivering solutions for hundreds of organizations over the course of his career. Andrew has worked for various organizations including Deloitte, Avanade, IBM/Neudesic, TTEC, and DXC, among others.',
    imageSrc: '/greg1.jpg',
    linkedIn: '#'
  },
  {
    id: 6,
    name: 'Thomas Decot',
    title: 'COO, Board Member',
    bio: 'Thomas is a seasoned operations executive with proven expertise in executing and building businesses across the Defense and Intelligence communities, including the Navy, Air Force, Army, DISA, DLA, DFAS, COCOMs, and DIA.',
    imageSrc: '/WhatsApp Image 2025-05-07 at 15.34.18_b76623a3.jpg',
    linkedIn: '#'
  },
  {
    id: 7,
    name: 'Qamer Baber',
    title: 'Chief Information Officer',
    bio: 'Qamer is a seasoned IT professional with over 17+ years of experience servicing both the Commercial and Federal sectors. At CompQsoft, he heads the development, implementation, and maintenance of operational standards and procedures.',
    imageSrc: '/qamer.jpg',
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
