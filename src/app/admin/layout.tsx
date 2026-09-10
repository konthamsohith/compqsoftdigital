"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./admin.module.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/admin" },
    { name: "Blogs", href: "/admin/blogs" },
    { name: "News", href: "/admin/news" },
    { name: "Events", href: "/admin/events" },
    { name: "Webinars", href: "/admin/webinars" },
    { name: "Case Studies", href: "/admin/case-studies" },
  ];

  return (
    <div className={styles.adminLayout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          CQD Admin
        </div>
        <nav className={styles.sidebarNav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/admin");
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <header className={styles.topbar}>
          <div>Welcome, Admin</div>
        </header>
        <div className={styles.contentArea}>
          {children}
        </div>
      </main>
    </div>
  );
}
