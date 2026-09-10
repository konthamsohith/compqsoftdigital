"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";
import ImageUploader from "../ImageUploader";

export default function CaseStudiesAdmin() {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCaseStudy, setCurrentCaseStudy] = useState<any>(null);

  const fetchCaseStudies = async () => {
    try {
      const res = await fetch("/api/cms");
      if (res.ok) {
        const data = await res.json();
        setCaseStudies(data.caseStudies);
      }
    } catch (error) {
      console.error("Failed to fetch case studies", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this case study?")) return;

    try {
      const res = await fetch(`/api/cms?type=caseStudy&id=${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchCaseStudies();
        setIsEditing(false);
      } else {
        alert("Failed to delete case study");
      }
    } catch (error) {
      console.error("Failed to delete case study", error);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = currentCaseStudy?.isNew ? "POST" : "PUT";
      const payload = {
        type: "caseStudy",
        id: currentCaseStudy?.slug,
        data: currentCaseStudy
      };

      const res = await fetch("/api/cms", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsEditing(false);
        setCurrentCaseStudy(null);
        fetchCaseStudies();
      } else {
        alert("Failed to save case study");
      }
    } catch (error) {
      console.error("Failed to save case study", error);
    }
  };

  // --- Sections editor helpers ---
  const updateSection = (index: number, field: string, value: string) => {
    const sections = [...(currentCaseStudy?.sections || [])];
    sections[index] = { ...sections[index], [field]: value };
    setCurrentCaseStudy({ ...currentCaseStudy, sections });
  };

  const addSection = () => {
    const sections = [...(currentCaseStudy?.sections || []), { heading: "", intro: "", items: [""] }];
    setCurrentCaseStudy({ ...currentCaseStudy, sections });
  };

  const removeSection = (index: number) => {
    const sections = [...(currentCaseStudy?.sections || [])];
    sections.splice(index, 1);
    setCurrentCaseStudy({ ...currentCaseStudy, sections });
  };

  const updateSectionItem = (sectionIndex: number, itemIndex: number, value: string) => {
    const sections = [...(currentCaseStudy?.sections || [])];
    const items = [...(sections[sectionIndex].items || [])];
    items[itemIndex] = value;
    sections[sectionIndex] = { ...sections[sectionIndex], items };
    setCurrentCaseStudy({ ...currentCaseStudy, sections });
  };

  const addSectionItem = (sectionIndex: number) => {
    const sections = [...(currentCaseStudy?.sections || [])];
    const items = [...(sections[sectionIndex].items || []), ""];
    sections[sectionIndex] = { ...sections[sectionIndex], items };
    setCurrentCaseStudy({ ...currentCaseStudy, sections });
  };

  const removeSectionItem = (sectionIndex: number, itemIndex: number) => {
    const sections = [...(currentCaseStudy?.sections || [])];
    const items = [...(sections[sectionIndex].items || [])];
    items.splice(itemIndex, 1);
    sections[sectionIndex] = { ...sections[sectionIndex], items };
    setCurrentCaseStudy({ ...currentCaseStudy, sections });
  };

  if (loading) return <div>Loading case studies...</div>;

  if (isEditing) {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 className={styles.pageHeader}>{currentCaseStudy?.isNew ? "New Case Study" : "Edit Case Study"}</h1>
          <button className={styles.btnSecondary} onClick={() => setIsEditing(false)}>Back to List</button>
        </div>

        <form onSubmit={handleSave} style={{ backgroundColor: "white", padding: "30px", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
          <ImageUploader value={currentCaseStudy?.imageSrc || ''} onChange={(url) => setCurrentCaseStudy({ ...currentCaseStudy, imageSrc: url })} />

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Title</label>
            <input
              required
              className={styles.formInput}
              value={currentCaseStudy?.title || ""}
              onChange={(e) => setCurrentCaseStudy({ ...currentCaseStudy, title: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Slug (used in the URL, e.g. retail-operations)</label>
            <input
              required
              className={styles.formInput}
              value={currentCaseStudy?.slug || ""}
              onChange={(e) => setCurrentCaseStudy({ ...currentCaseStudy, slug: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Category (e.g. CASE STUDIES)</label>
            <input
              className={styles.formInput}
              value={currentCaseStudy?.category || ""}
              onChange={(e) => setCurrentCaseStudy({ ...currentCaseStudy, category: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Excerpt</label>
            <textarea
              required
              className={styles.formTextarea}
              value={currentCaseStudy?.excerpt || ""}
              onChange={(e) => setCurrentCaseStudy({ ...currentCaseStudy, excerpt: e.target.value })}
            />
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <div className={styles.formGroup} style={{ flex: 1 }}>
              <label className={styles.formLabel}>Date (e.g. Apr 22, 2025)</label>
              <input
                required
                className={styles.formInput}
                value={currentCaseStudy?.date || ""}
                onChange={(e) => setCurrentCaseStudy({ ...currentCaseStudy, date: e.target.value })}
              />
            </div>
            <div className={styles.formGroup} style={{ flex: 1 }}>
              <label className={styles.formLabel}>Read Time (e.g. 5 min read)</label>
              <input
                className={styles.formInput}
                value={currentCaseStudy?.readTime || ""}
                onChange={(e) => setCurrentCaseStudy({ ...currentCaseStudy, readTime: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <div className={styles.formGroup} style={{ flex: 1 }}>
              <label className={styles.formLabel}>Views</label>
              <input
                className={styles.formInput}
                value={currentCaseStudy?.views ?? ""}
                onChange={(e) => setCurrentCaseStudy({ ...currentCaseStudy, views: e.target.value })}
              />
            </div>
            <div className={styles.formGroup} style={{ flex: 1 }}>
              <label className={styles.formLabel}>Likes</label>
              <input
                type="number"
                className={styles.formInput}
                value={currentCaseStudy?.likes ?? ""}
                onChange={(e) => setCurrentCaseStudy({ ...currentCaseStudy, likes: Number(e.target.value) })}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Sections (Customer, Business Challenge, Solutions, Results, etc.)</label>

            {(currentCaseStudy?.sections || []).map((section: any, sIndex: number) => (
              <div key={sIndex} style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "16px", marginBottom: "16px", backgroundColor: "#f8fafc" }}>
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-end" }}>
                  <div style={{ flex: 1 }}>
                    <label className={styles.formLabel} style={{ marginBottom: "6px" }}>Section Heading</label>
                    <input
                      className={styles.formInput}
                      placeholder="e.g. Business Challenge"
                      value={section.heading || ""}
                      onChange={(e) => updateSection(sIndex, "heading", e.target.value)}
                    />
                  </div>
                  <button type="button" className={styles.btnDanger} onClick={() => removeSection(sIndex)}>
                    Remove Section
                  </button>
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <label className={styles.formLabel} style={{ marginBottom: "6px" }}>Intro (optional)</label>
                  <textarea
                    className={styles.formTextarea}
                    style={{ minHeight: "70px" }}
                    value={section.intro || ""}
                    onChange={(e) => updateSection(sIndex, "intro", e.target.value)}
                  />
                </div>

                <label className={styles.formLabel} style={{ marginBottom: "6px" }}>
                  Items (a single item renders as a paragraph; multiple render as a bullet list)
                </label>
                {(section.items || []).map((item: string, iIndex: number) => (
                  <div key={iIndex} style={{ display: "flex", gap: "10px", marginBottom: "8px", alignItems: "flex-start" }}>
                    <textarea
                      className={styles.formTextarea}
                      style={{ minHeight: "60px" }}
                      value={item}
                      onChange={(e) => updateSectionItem(sIndex, iIndex, e.target.value)}
                    />
                    <button
                      type="button"
                      className={styles.btnDanger}
                      style={{ flexShrink: 0 }}
                      onClick={() => removeSectionItem(sIndex, iIndex)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" className={styles.btnSecondary} onClick={() => addSectionItem(sIndex)}>
                  + Add Item
                </button>
              </div>
            ))}

            <button type="button" className={styles.btnPrimary} onClick={addSection}>
              + Add Section
            </button>
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            <button type="submit" className={styles.btnPrimary}>Save Case Study</button>
            {!currentCaseStudy?.isNew && (
              <button
                type="button"
                className={styles.btnDanger}
                onClick={() => handleDelete(currentCaseStudy.slug)}
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
        <h1 className={styles.pageHeader}>Manage Case Studies</h1>
        <button
          className={styles.btnPrimary}
          onClick={() => {
            setCurrentCaseStudy({
              isNew: true,
              title: "",
              slug: "",
              category: "CASE STUDIES",
              excerpt: "",
              date: "",
              readTime: "",
              views: "0",
              likes: 0,
              imageSrc: "",
              sections: [{ heading: "Customer", items: [""] }],
            });
            setIsEditing(true);
          }}
        >
          Add New Case Study
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Views / Likes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {caseStudies.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "30px" }}>No case studies found</td>
              </tr>
            ) : (
              caseStudies.map((caseStudy: any, index: number) => (
                <tr key={caseStudy.slug || index}>
                  <td>
                    <strong>{caseStudy.title}</strong>
                    <div style={{ fontSize: "0.875rem", color: "#737373", marginTop: "4px" }}>{caseStudy.excerpt?.substring(0, 50)}...</div>
                  </td>
                  <td>{caseStudy.category}</td>
                  <td>{caseStudy.date}</td>
                  <td>{caseStudy.views} / {caseStudy.likes}</td>
                  <td>
                    <div className={styles.actionBtns}>
                      <button
                        className={styles.btnSecondary}
                        style={{ padding: "6px 12px", fontSize: "0.875rem" }}
                        onClick={() => {
                          setCurrentCaseStudy(caseStudy);
                          setIsEditing(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.btnDanger}
                        onClick={() => handleDelete(caseStudy.slug)}
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
