"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";
import ImageUploader from "../ImageUploader";

export default function NewsAdmin() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNews, setCurrentNews] = useState<any>(null);

  const fetchNews = async () => {
    try {
      const res = await fetch("/api/cms");
      if (res.ok) {
        const data = await res.json();
        setNews(data.news);
      }
    } catch (error) {
      console.error("Failed to fetch news", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleDelete = async (href: string) => {
    if (!confirm("Are you sure you want to delete this news item?")) return;

    try {
      const res = await fetch(`/api/cms?type=news&id=${encodeURIComponent(href)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchNews();
        setIsEditing(false);
      } else {
        alert("Failed to delete news item");
      }
    } catch (error) {
      console.error("Failed to delete news item", error);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = currentNews?.isNew ? "POST" : "PUT";
      const payload = {
        type: "news",
        id: currentNews?.href,
        data: currentNews
      };

      const res = await fetch("/api/cms", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsEditing(false);
        setCurrentNews(null);
        fetchNews();
      } else {
        alert("Failed to save news item");
      }
    } catch (error) {
      console.error("Failed to save news item", error);
    }
  };

  const updateParagraph = (index: number, value: string) => {
    const paragraphs = [...(currentNews?.paragraphs || [])];
    paragraphs[index] = value;
    setCurrentNews({ ...currentNews, paragraphs });
  };

  const addParagraph = () => {
    setCurrentNews({ ...currentNews, paragraphs: [...(currentNews?.paragraphs || []), ""] });
  };

  const removeParagraph = (index: number) => {
    const paragraphs = [...(currentNews?.paragraphs || [])];
    paragraphs.splice(index, 1);
    setCurrentNews({ ...currentNews, paragraphs });
  };

  if (loading) return <div>Loading news...</div>;

  if (isEditing) {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 className={styles.pageHeader}>{currentNews?.isNew ? "New News Item" : "Edit News Item"}</h1>
          <button className={styles.btnSecondary} onClick={() => setIsEditing(false)}>Back to List</button>
        </div>

        <form onSubmit={handleSave} style={{ backgroundColor: "white", padding: "30px", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
          <ImageUploader value={currentNews?.imageSrc || ''} onChange={(url) => setCurrentNews({ ...currentNews, imageSrc: url })} />

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Index Number (e.g. 01)</label>
            <input
              className={styles.formInput}
              value={currentNews?.indexNumber || ""}
              onChange={(e) => setCurrentNews({ ...currentNews, indexNumber: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Title</label>
            <input
              required
              className={styles.formInput}
              value={currentNews?.title || ""}
              onChange={(e) => setCurrentNews({ ...currentNews, title: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Subtitle</label>
            <input
              className={styles.formInput}
              value={currentNews?.subtitle || ""}
              onChange={(e) => setCurrentNews({ ...currentNews, subtitle: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Date (e.g. Jul or &quot;Soon&quot;)</label>
            <input
              required
              className={styles.formInput}
              value={currentNews?.date || ""}
              onChange={(e) => setCurrentNews({ ...currentNews, date: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Person Name (optional, e.g. quoted spokesperson)</label>
            <input
              className={styles.formInput}
              value={currentNews?.personName || ""}
              onChange={(e) => setCurrentNews({ ...currentNews, personName: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Person Role (optional)</label>
            <input
              className={styles.formInput}
              value={currentNews?.personRole || ""}
              onChange={(e) => setCurrentNews({ ...currentNews, personRole: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Body Paragraphs</label>
            {(currentNews?.paragraphs || []).map((paragraph: string, index: number) => (
              <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}>
                <textarea
                  className={styles.formTextarea}
                  style={{ minHeight: "90px" }}
                  value={paragraph}
                  onChange={(e) => updateParagraph(index, e.target.value)}
                />
                <button
                  type="button"
                  className={styles.btnDanger}
                  style={{ flexShrink: 0 }}
                  onClick={() => removeParagraph(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button" className={styles.btnSecondary} onClick={addParagraph}>
              + Add Paragraph
            </button>
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            <button type="submit" className={styles.btnPrimary}>Save News Item</button>
            {!currentNews?.isNew && (
              <button
                type="button"
                className={styles.btnDanger}
                onClick={() => handleDelete(currentNews.href)}
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
        <h1 className={styles.pageHeader}>Manage News</h1>
        <button
          className={styles.btnPrimary}
          onClick={() => {
            setCurrentNews({ isNew: true, indexNumber: "", title: "", subtitle: "", date: "", personName: "", personRole: "", paragraphs: [], imageSrc: "" });
            setIsEditing(true);
          }}
        >
          Add New News Item
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Subtitle</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "30px" }}>No news found</td>
              </tr>
            ) : (
              news.map((item: any, index: number) => (
                <tr key={item.href || index}>
                  <td>{item.indexNumber}</td>
                  <td>
                    <strong>{item.title || <em style={{ color: "#a3a3a3" }}>(Untitled - &quot;Coming Soon&quot; placeholder)</em>}</strong>
                  </td>
                  <td>{item.subtitle}</td>
                  <td>{item.date}</td>
                  <td>
                    <div className={styles.actionBtns}>
                      <button
                        className={styles.btnSecondary}
                        style={{ padding: "6px 12px", fontSize: "0.875rem" }}
                        onClick={() => {
                          setCurrentNews(item);
                          setIsEditing(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.btnDanger}
                        onClick={() => handleDelete(item.href)}
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
