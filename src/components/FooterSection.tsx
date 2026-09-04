import styles from './FooterSection.module.css';
import Image from 'next/image';

export default function FooterSection() {
  return (
    <section id="footer-section" className={styles.section}>
      <div className={styles.container}>
        {/* Left Side */}
        <div className={styles.leftSide}>
          <div className={styles.infoWrapper}>
            <div className={styles.linksColumn}>
              <a href="#">Services</a>
              <a href="#">Industries</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            
            <div className={styles.contactColumn}>
              <p>Tel: 571-200-3923</p>
              
              <div className={styles.address}>
                <p>11445 Compaq Center W.</p>
                <p>Drive Building CCA6</p>
                <p>Houston, TX 77070</p>
              </div>
              
              <p className={styles.email}>Email: info@compqsoftdigital.com</p>
              
              <div className={styles.partnerBadge}>
                <Image 
                  src="/WhatsApp Image 2025-05-06 at 23.51.17_28d1b3d9.jpg" 
                  alt="Microsoft Solutions Partner" 
                  width={350} 
                  height={110} 
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                />
              </div>
            </div>
          </div>
          
          <div className={styles.copyright}>
            © 2025 by CompQsoft Digital. All rights reserved.
          </div>
        </div>
        
        {/* Right Side */}
        <div className={styles.rightSide}>
          <div className={styles.newsletterSection}>
            <h3 className={styles.newsletterTitle}>Never miss an update from us</h3>
            <p className={styles.newsletterDesc}>Sign up to receive CompQsoft Digital news and updates.</p>
            
            <form className={styles.subscribeForm}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Email *</label>
                <div className={styles.inputRow}>
                  <input type="email" required className={styles.emailInput} />
                  <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
                </div>
              </div>
              
              <div className={styles.checkboxGroup}>
                <input type="checkbox" id="newsletter-check" required className={styles.checkbox} />
                <label htmlFor="newsletter-check" className={styles.checkboxLabel}>Yes, subscribe me to your newsletter. *</label>
              </div>
            </form>
          </div>
          
          <div className={styles.socialAndLinks}>
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/company/compqsoft-digital/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="https://www.youtube.com/@CompQsoft" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="https://www.instagram.com/compqsoft_digital?igsh=MXM4ZXpibDFjcGw4cQ%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            
            <div className={styles.legalLinks}>
              <a href="#">Privacy Policy</a> <span className={styles.separator}>|</span> 
              <a href="#">Cookies Policies</a> <span className={styles.separator}>|</span> 
              <a href="#">Terms & Conditions</a> <span className={styles.separator}>|</span> 
              <a href="#">Sitemap</a> <span className={styles.separator}>|</span> 
              <a href="#">Unsubscribe</a>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
}
