"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";
import ImageUploader from "../ImageUploader";

export default function WebinarsAdmin() {
  const [webinars, setWebinars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentWebinar, setCurrentWebinar] = useState<any>(null);

  const fetchWebinars = async () => {
    try {
      const res = await fetch("/api/cms");
      if (res.ok) {
        const data = await res.json();
        setWebinars(data.webinars);
      }
    } catch (error) {
      console.error("Failed to fetch webinars", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebinars();
  }, []);

  const handleDelete = async (href: string) => {
    if (!confirm("Are you sure you want to delete this webinar?")) return;

    try {
      const res = await fetch(`/api/cms?type=webinar&id=${encodeURIComponent(href)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchWebinars();
        setIsEditing(false);
      } else {
        alert("Failed to delete webinar");
      }
    } catch (error) {
      console.error("Failed to delete webinar", error);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = currentWebinar?.isNew ? "POST" : "PUT";
      const payload = {
        type: "webinar",
        id: currentWebinar?.href,
        data: currentWebinar
      };

      const res = await fetch("/api/cms", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsEditing(false);
        setCurrentWebinar(null);
        fetchWebinars();
      } else {
        alert("Failed to save webinar");
      }
    } catch (error) {
      console.error("Failed to save webinar", error);
    }
  };

  if (loading) return <div>Loading webinars...</div>;

  if (isEditing) {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 className={styles.pageHeader}>{currentWebinar?.isNew ? "New Webinar" : "Edit Webinar"}</h1>
          <button className={styles.btnSecondary} onClick={() => setIsEditing(false)}>Back to List</button>
        </div>

        <form onSubmit={handleSave} style={{ backgroundColor: "white", padding: "30px", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
          <ImageUploader value={currentWebinar?.imageSrc || ''} onChange={(url) => setCurrentWebinar({ ...currentWebinar, imageSrc: url })} />

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Title</label>
            <input
              required
              className={styles.formInput}
              value={currentWebinar?.title || ""}
              onChange={(e) => setCurrentWebinar({ ...currentWebinar, title: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Date (e.g. Aug 19)</label>
            <input
              required
              className={styles.formInput}
              value={currentWebinar?.date || ""}
              onChange={(e) => setCurrentWebinar({ ...currentWebinar, date: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Location / Time (e.g. 10:00 AM CST)</label>
            <input
              className={styles.formInput}
              value={currentWebinar?.location || ""}
              onChange={(e) => setCurrentWebinar({ ...currentWebinar, location: e.target.value })}
            />
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            <button type="submit" className={styles.btnPrimary}>Save Webinar</button>
            {!currentWebinar?.isNew && (
              <button
                type="button"
                className={styles.btnDanger}
                onClick={() => handleDelete(currentWebinar.href)}
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 className={styles.pageHeader}>Manage Webinars</h1>
        <button
          className={styles.btnPrimary}
          onClick={() => {
            setCurrentWebinar({ isNew: true, title: "", date: "", location: "", imageSrc: "" });
            setIsEditing(true);
          }}
        >
          Add New Webinar
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Location / Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {webinars.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "30px" }}>No webinars found</td>
              </tr>
            ) : (
              webinars.map((webinar: any, index: number) => (
                <tr key={webinar.href || index}>
                  <td><strong>{webinar.title}</strong></td>
                  <td>{webinar.date}</td>
                  <td>{webinar.location}</td>
                  <td>
                    <div className={styles.actionBtns}>
                      <button
                        className={styles.btnSecondary}
                        style={{ padding: "6px 12px", fontSize: "0.875rem" }}
                        onClick={() => {
                          setCurrentWebinar(webinar);
                          setIsEditing(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.btnDanger}
                        onClick={() => handleDelete(webinar.href)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
