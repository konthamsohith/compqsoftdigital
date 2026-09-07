import styles from './ContactMap.module.css';

export default function ContactMap() {
  return (
    <div className={styles.mapContainer}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.511394143242!2d-95.57867292357731!3d29.99341497494957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cebbaeecc073%3A0xc39f225df586e92!2s11445%20Compaq%20Center%20W%20Dr%2C%20Houston%2C%20TX%2077070%2C%20USA!5e0!3m2!1sen!2s!4v1716301234567!5m2!1sen!2s" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="CompQsoft Digital Office Location"
        className={styles.iframe}
      ></iframe>
    </div>
  );
}
