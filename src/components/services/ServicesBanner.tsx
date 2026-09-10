import styles from './ServicesBanner.module.css';

export default function ServicesBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.text}>
          Unlock the full potential of the Microsoft ecosystem with our specialized solutions. From Dynamics 365 and Microsoft 365 to Azure cloud services and Power Platform, we help businesses modernize operations, enhance collaboration, and drive innovation. Whether you&apos;re migrating to the cloud, implementing enterprise applications, or leveraging AI and analytics, our Microsoft experts ensure seamless, secure, and scalable results.
        </p>
      </div>
    </section>
  );
}
