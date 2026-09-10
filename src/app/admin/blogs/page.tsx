"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";
import ImageUploader from "../ImageUploader";

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<any>(null);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/cms");
      if (res.ok) {
        const data = await res.json();
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (href: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const res = await fetch(`/api/cms?type=blog&id=${encodeURIComponent(href)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchBlogs();
        setIsEditing(false);
      } else {
        alert("Failed to delete blog");
      }
    } catch (error) {
      console.error("Failed to delete blog", error);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = currentBlog?.isNew ? "POST" : "PUT";
      const payload = {
        type: "blog",
        id: currentBlog?.href,
        data: currentBlog
      };

      const res = await fetch("/api/cms", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsEditing(false);
        setCurrentBlog(null);
        fetchBlogs();
      } else {
        alert("Failed to save blog");
      }
    } catch (error) {
      console.error("Failed to save blog", error);
    }
  };

  if (loading) return <div>Loading blogs...</div>;

  if (isEditing) {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 className={styles.pageHeader}>{currentBlog?.isNew ? "New Blog" : "Edit Blog"}</h1>
          <button className={styles.btnSecondary} onClick={() => setIsEditing(false)}>Back to List</button>
        </div>

        <form onSubmit={handleSave} style={{ backgroundColor: "white", padding: "30px", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
          <ImageUploader value={currentBlog?.imageSrc || ''} onChange={(url) => setCurrentBlog({ ...currentBlog, imageSrc: url })} />

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Title</label>
            <input
              required
              className={styles.formInput}
              value={currentBlog?.title || ""}
              onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Category</label>
            <input
              className={styles.formInput}
              placeholder="e.g. Artificial Intelligence"
              value={currentBlog?.category || ""}
              onChange={(e) => setCurrentBlog({ ...currentBlog, category: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Excerpt</label>
            <textarea
              required
              className={styles.formTextarea}
              value={currentBlog?.excerpt || ""}
              onChange={(e) => setCurrentBlog({ ...currentBlog, excerpt: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Date (e.g. Jul)</label>
            <input
              required
              className={styles.formInput}
              value={currentBlog?.date || ""}
              onChange={(e) => setCurrentBlog({ ...currentBlog, date: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Read Time (e.g. 5 min read)</label>
            <input
              className={styles.formInput}
              value={currentBlog?.readTime || ""}
              onChange={(e) => setCurrentBlog({ ...currentBlog, readTime: e.target.value })}
            />
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            <button type="submit" className={styles.btnPrimary}>Save Blog</button>
            {!currentBlog?.isNew && (
              <button
                type="button"
                className={styles.btnDanger}
                onClick={() => handleDelete(currentBlog.href)}
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
        <h1 className={styles.pageHeader}>Manage Blogs</h1>
        <button
          className={styles.btnPrimary}
          onClick={() => {
            setCurrentBlog({ isNew: true, title: "", category: "", excerpt: "", date: "", readTime: "", imageSrc: "" });
            setIsEditing(true);
          }}
        >
          Add New Blog
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Read Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "30px" }}>No blogs found</td>
              </tr>
            ) : (
              blogs.map((blog: any, index: number) => (
                <tr key={blog.href || index}>
                  <td>
                    <strong>{blog.title}</strong>
                    <div style={{ fontSize: "0.875rem", color: "#737373", marginTop: "4px" }}>{blog.excerpt?.substring(0, 50)}...</div>
                  </td>
                  <td>{blog.category}</td>
                  <td>{blog.date}</td>
                  <td>{blog.readTime}</td>
                  <td>
                    <div className={styles.actionBtns}>
                      <button
                        className={styles.btnSecondary}
                        style={{ padding: "6px 12px", fontSize: "0.875rem" }}
                        onClick={() => {
                          setCurrentBlog(blog);
                          setIsEditing(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.btnDanger}
                        onClick={() => handleDelete(blog.href)}
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
