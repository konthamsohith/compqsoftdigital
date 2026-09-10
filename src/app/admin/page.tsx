"use client";

import { useEffect, useState } from "react";
import styles from "./admin.module.css";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    blogs: 0,
    news: 0,
    events: 0,
    webinars: 0,
    caseStudies: 0,
  });

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we will fetch from the CMS API we are going to build
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/cms");
        if (res.ok) {
          const data = await res.json();
          setStats({
            blogs: data.blogs?.length || 0,
            news: data.news?.length || 0,
            events: data.events?.length || 0,
            webinars: data.webinars?.length || 0,
            caseStudies: data.caseStudies?.length || 0,
          });
        }
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h1 className={styles.pageHeader}>Dashboard Overview</h1>
      
      <div className={styles.dashboardGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Total Blogs</div>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
          </div>
          <div className={styles.cardValue}>{stats.blogs}</div>
          <Link href="/admin/blogs" className={styles.cardLink}>Manage Blogs <span aria-hidden="true">&rarr;</span></Link>
        </div>
        
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Total News</div>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            </div>
          </div>
          <div className={styles.cardValue}>{stats.news}</div>
          <Link href="/admin/news" className={styles.cardLink}>Manage News <span aria-hidden="true">&rarr;</span></Link>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Total Events</div>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
          </div>
          <div className={styles.cardValue}>{stats.events}</div>
          <Link href="/admin/events" className={styles.cardLink}>Manage Events <span aria-hidden="true">&rarr;</span></Link>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Total Webinars</div>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            </div>
          </div>
          <div className={styles.cardValue}>{stats.webinars}</div>
          <Link href="/admin/webinars" className={styles.cardLink}>Manage Webinars <span aria-hidden="true">&rarr;</span></Link>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Case Studies</div>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
          </div>
          <div className={styles.cardValue}>{stats.caseStudies}</div>
          <Link href="/admin/case-studies" className={styles.cardLink}>Manage Case Studies <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </div>
    </div>
  );
}
