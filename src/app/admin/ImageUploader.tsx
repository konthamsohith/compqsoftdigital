"use client";

import { useState, useRef, DragEvent, ClipboardEvent } from 'react';
import styles from './admin.module.css';

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
}

export default function ImageUploader({ value, onChange }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (file: File) => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        onChange(data.url);
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    } finally {
      setIsUploading(false);
    }
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleUpload(e.dataTransfer.files[0]);
    }
  };

  const onPaste = (e: ClipboardEvent<HTMLDivElement>) => {
    if (e.clipboardData.files && e.clipboardData.files.length > 0) {
      handleUpload(e.clipboardData.files[0]);
    } else {
      const pastedText = e.clipboardData.getData('text');
      if (pastedText && (pastedText.startsWith('http://') || pastedText.startsWith('https://'))) {
        onChange(pastedText);
      }
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleUpload(e.target.files[0]);
    }
  };

  return (
    <div className={styles.formGroup}>
      <label className={styles.formLabel}>Featured Image</label>
      
      <div 
        className={styles.uploadZone}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onPaste={onPaste}
        tabIndex={0}
        style={{
          position: 'relative',
          border: `2px dashed ${isDragging ? 'var(--primary-orange)' : '#d4d4d8'}`,
          backgroundColor: isDragging ? 'rgba(217, 92, 20, 0.05)' : '#fafafa',
          padding: '20px',
          borderRadius: '6px',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s',
          outline: 'none'
        }}
      >
        {isUploading ? (
          <p>Uploading...</p>
        ) : value ? (
          <div>
            <img src={value} alt="Preview" style={{ maxHeight: '150px', maxWidth: '100%', objectFit: 'contain', marginBottom: '10px' }} />
            <p style={{ fontSize: '0.875rem', color: '#737373' }}>Click, drag, or paste to change image</p>
          </div>
        ) : (
          <div>
            <p style={{ marginBottom: '10px', color: '#525252' }}>
              Drag & drop an image here, paste from clipboard, or click to browse.
            </p>
            <p style={{ fontSize: '0.875rem', color: '#737373' }}>You can also paste an image URL directly.</p>
          </div>
        )}
        
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          accept="image/*"
          onChange={onFileChange}
        />
        
        {/* We place a transparent overlay to capture clicks and trigger the file input, but still allow text pasting via focus */}
        <div 
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} 
          onClick={() => fileInputRef.current?.click()}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <input 
          className={styles.formInput} 
          placeholder="Or paste an image URL here..." 
          value={value || ''} 
          onChange={(e) => onChange(e.target.value)} 
        />
      </div>
    </div>
  );
}
