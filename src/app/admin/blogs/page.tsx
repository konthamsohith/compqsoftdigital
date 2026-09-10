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

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Status</label>
            <select
              className={styles.formInput}
              value={currentBlog?.published === false ? "draft" : "published"}
              onChange={(e) => setCurrentBlog({ ...currentBlog, published: e.target.value !== "draft" })}
            >
              <option value="published">Published (live on the site)</option>
              <option value="draft">Draft (hidden from the site)</option>
            </select>
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
            setCurrentBlog({ isNew: true, title: "", category: "", excerpt: "", date: "", readTime: "", imageSrc: "", published: true });
            setIsEditing(true);
          }}
        >
          Add New Blog
        </button>
      </div>

      <div className={styles.cardListContainer}>
        <div className={styles.cardListHeader}>
          <div className={styles.colMain}>Post</div>
          <div className={styles.colValue}>Read Time</div>
          <div className={styles.colDate}>Date</div>
          <div className={styles.colAuthor}>Author</div>
          <div className={styles.colStatus}>Status</div>
          <div className={styles.colActions}></div>
        </div>

        <div className={styles.cardListBody}>
          {blogs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "30px", color: "#64748b" }}>No blogs found</div>
          ) : (
            blogs.map((blog: any, index: number) => {
              const isDraft = blog.published === false;
              return (
                <div key={blog.href || index} className={styles.listItemCard}>
                  <div className={styles.colMain}>
                    {blog.imageSrc ? (
                      <img src={blog.imageSrc} alt="" className={styles.itemThumb} />
                    ) : (
                      <div className={styles.itemThumbPlaceholder} />
                    )}
                    <div className={styles.itemMainText}>
                      <div className={styles.itemTitle}>{blog.title}</div>
                      <div className={styles.itemSubtitle}>{blog.excerpt?.substring(0, 40)}...</div>
                    </div>
                  </div>

                  <div className={styles.colValue}>
                    <span className={styles.itemValue}>{blog.readTime || '—'}</span>
                    <span className={styles.itemSubtitle}>{blog.category || '—'}</span>
                  </div>

                  <div className={styles.colDate}>
                    <span className={styles.itemDate}>{blog.date || '—'}</span>
                  </div>

                  <div className={styles.colAuthor}>
                    <div className={styles.authorWrapper}>
                      <div className={styles.authorAvatar}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      </div>
                      <span className={styles.authorName}>Admin</span>
                    </div>
                  </div>

                  <div className={styles.colStatus}>
                    <span className={`${styles.itemStatus} ${isDraft ? styles.itemStatusPending : ''}`}>
                      {isDraft ? 'Draft' : 'Published'}
                    </span>
                  </div>

                  <div className={styles.colActions}>
                    <div className={styles.actionDropdown}>
                      <button className={styles.dotsButton}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                      </button>
                      <div className={styles.dropdownMenu}>
                        <button 
                          className={styles.dropdownItem}
                          onClick={() => {
                            setCurrentBlog(blog);
                            setIsEditing(true);
                          }}
                        >
                          Edit
                        </button>
                        <button 
                          className={`${styles.dropdownItem} ${styles.dangerItem}`}
                          onClick={() => handleDelete(blog.href)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
