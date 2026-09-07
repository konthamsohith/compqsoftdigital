'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <input 
            type="text" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name" 
            required 
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <input 
            type="text" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name" 
            required 
            className={styles.input}
          />
        </div>
      </div>
      
      <div className={styles.inputGroup}>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email *" 
          required 
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message" 
          required 
          className={styles.textarea}
        ></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>
        Send
      </button>
    </form>
  );
}
