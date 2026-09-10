"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";
import ImageUploader from "../ImageUploader";

export default function EventsAdmin() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<any>(null);

  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/cms");
      if (res.ok) {
        const data = await res.json();
        setEvents(data.events);
      }
    } catch (error) {
      console.error("Failed to fetch events", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (href: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    try {
      const res = await fetch(`/api/cms?type=event&id=${encodeURIComponent(href)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchEvents();
        setIsEditing(false);
      } else {
        alert("Failed to delete event");
      }
    } catch (error) {
      console.error("Failed to delete event", error);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = currentEvent?.isNew ? "POST" : "PUT";
      const payload = {
        type: "event",
        id: currentEvent?.href,
        data: currentEvent
      };

      const res = await fetch("/api/cms", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsEditing(false);
        setCurrentEvent(null);
        fetchEvents();
      } else {
        alert("Failed to save event");
      }
    } catch (error) {
      console.error("Failed to save event", error);
    }
  };

  if (loading) return <div>Loading events...</div>;

  if (isEditing) {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 className={styles.pageHeader}>{currentEvent?.isNew ? "New Event" : "Edit Event"}</h1>
          <button className={styles.btnSecondary} onClick={() => setIsEditing(false)}>Back to List</button>
        </div>

        <form onSubmit={handleSave} style={{ backgroundColor: "white", padding: "30px", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
          <ImageUploader value={currentEvent?.imageSrc || ''} onChange={(url) => setCurrentEvent({ ...currentEvent, imageSrc: url })} />

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Title</label>
            <input
              required
              className={styles.formInput}
              value={currentEvent?.title || ""}
              onChange={(e) => setCurrentEvent({ ...currentEvent, title: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Date (e.g. Feb 11, 2026)</label>
            <input
              required
              className={styles.formInput}
              value={currentEvent?.date || ""}
              onChange={(e) => setCurrentEvent({ ...currentEvent, date: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Location / Time (e.g. 10:00 AM CST or Houston, TX)</label>
            <input
              className={styles.formInput}
              value={currentEvent?.location || ""}
              onChange={(e) => setCurrentEvent({ ...currentEvent, location: e.target.value })}
            />
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            <button type="submit" className={styles.btnPrimary}>Save Event</button>
            {!currentEvent?.isNew && (
              <button
                type="button"
                className={styles.btnDanger}
                onClick={() => handleDelete(currentEvent.href)}
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
        <h1 className={styles.pageHeader}>Manage Events</h1>
        <button
          className={styles.btnPrimary}
          onClick={() => {
            setCurrentEvent({ isNew: true, title: "", date: "", location: "", imageSrc: "" });
            setIsEditing(true);
          }}
        >
          Add New Event
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
            {events.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "30px" }}>No events found</td>
              </tr>
            ) : (
              events.map((event: any, index: number) => (
                <tr key={event.href || index}>
                  <td><strong>{event.title}</strong></td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>
                    <div className={styles.actionBtns}>
                      <button
                        className={styles.btnSecondary}
                        style={{ padding: "6px 12px", fontSize: "0.875rem" }}
                        onClick={() => {
                          setCurrentEvent(event);
                          setIsEditing(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.btnDanger}
                        onClick={() => handleDelete(event.href)}
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
