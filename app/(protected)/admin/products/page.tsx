"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Plus, LayoutGrid, Package, MessageSquare, Settings, LogOut, Trash2, Edit, Save } from "lucide-react";
import Link from "next/link";

export default function AdminProductsPage() {
    const [products, setProducts] = useState([
        { id: "1", name: "Kids Trolley Rack", category: "furniture", price: 900, slug: "kids-trolley-rack" },
        { id: "2", name: "Shape Clock", category: "room-decor", price: 900, slug: "shape-clock" },
    ]);

    const [isAdding, setIsAdding] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: "",
        category: "furniture",
        price: "",
        description: "",
        specifications: "",
    });

    const handleAddProduct = (e: React.FormEvent) => {
        e.preventDefault();
        const id = (products.length + 1).toString();
        const productToAdd = {
            ...newProduct,
            id,
            slug: newProduct.name.toLowerCase().replace(/ /g, "-"),
            price: parseFloat(newProduct.price)
        };
        setProducts([...products, productToAdd]);
        setIsAdding(false);
        setNewProduct({ name: "", category: "furniture", price: "", description: "", specifications: "" });
        alert("Product added successfully! (In-memory mock)");
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "#f8fafc" }}>
            {/* Sidebar */}
            <aside style={{ width: "260px", background: "var(--color-dark)", color: "white", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
                    <div style={{ width: "40px", height: "40px", background: "var(--gradient-primary)", borderRadius: "var(--radius-lg)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>CC</div>
                    <span style={{ fontWeight: 700, fontSize: "1.25rem" }}>CC-Admin</span>
                </div>

                <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <Link href="/dashboard" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", borderRadius: "8px", color: "rgba(255,255,255,0.6)" }}>
                        <LayoutGrid size={20} /> Dashboard
                    </Link>
                    <Link href="/admin/products" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(255,255,255,0.1)", color: "white" }}>
                        <Package size={20} /> Products
                    </Link>
                    <Link href="/admin/inquiries" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", borderRadius: "8px", color: "rgba(255,255,255,0.6)" }}>
                        <MessageSquare size={20} /> Inquiries
                    </Link>
                    <Link href="/admin/settings" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", borderRadius: "8px", color: "rgba(255,255,255,0.6)", marginTop: "auto" }}>
                        <Settings size={20} /> Settings
                    </Link>
                    <button style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", color: "#f87171", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <LogOut size={20} /> Logout
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: "3rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div>
                        <h1>Product <span className="gradient-text">Management</span></h1>
                        <p style={{ color: "var(--color-gray)" }}>Add, edit, or remove products and services from your catalog.</p>
                    </div>
                    <Button variant="primary" onClick={() => setIsAdding(true)}>
                        <Plus size={20} /> Add New Product
                    </Button>
                </div>

                {isAdding && (
                    <div style={{ background: "white", padding: "2rem", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", marginBottom: "3rem", border: "1px solid var(--color-primary)" }}>
                        <h3 style={{ marginBottom: "1.5rem" }}>Create New Product</h3>
                        <form onSubmit={handleAddProduct} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Product Name</label>
                                <input
                                    type="text"
                                    value={newProduct.name}
                                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                    required
                                    className="input"
                                    placeholder="e.g. Personalized Wooden Clock"
                                />
                            </div>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Category</label>
                                <select
                                    className="input"
                                    value={newProduct.category}
                                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                                >
                                    <option value="furniture">Furniture</option>
                                    <option value="room-decor">Room Décor</option>
                                    <option value="diy">DIY Kits</option>
                                    <option value="school-stationery">School & Stationery</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="games">Games</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Price (₹)</label>
                                <input
                                    type="number"
                                    value={newProduct.price}
                                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                    required
                                    className="input"
                                    placeholder="900"
                                />
                            </div>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Product Image (Placeholder)</label>
                                <div style={{ padding: "0.75rem", border: "2px dashed var(--color-light)", borderRadius: "var(--radius-lg)", textAlign: "center", color: "var(--color-gray-light)" }}>
                                    Drop image or click to upload
                                </div>
                            </div>
                            <div style={{ gridColumn: "span 2" }}>
                                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>Description</label>
                                <textarea
                                    className="input"
                                    value={newProduct.description}
                                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                    placeholder="Tell customers about this product..."
                                    style={{ minHeight: "100px" }}
                                ></textarea>
                            </div>
                            <div style={{ gridColumn: "span 2", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
                                <Button variant="ghost" onClick={() => setIsAdding(false)}>Cancel</Button>
                                <Button type="submit" variant="primary">
                                    <Save size={18} /> Save Product
                                </Button>
                            </div>
                        </form>
                    </div>
                )}

                <div style={{ background: "white", borderRadius: "16px", boxShadow: "var(--shadow-sm)", overflow: "hidden", border: "1px solid #e2e8f0" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                        <thead style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                            <tr>
                                <th style={{ padding: "1.25rem" }}>Product</th>
                                <th style={{ padding: "1.25rem" }}>Category</th>
                                <th style={{ padding: "1.25rem" }}>Price</th>
                                <th style={{ padding: "1.25rem" }}>Status</th>
                                <th style={{ padding: "1.25rem" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p) => (
                                <tr key={p.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                                    <td style={{ padding: "1.25rem" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                            <div style={{ width: "40px", height: "40px", background: "var(--color-light)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>📦</div>
                                            <span style={{ fontWeight: 600 }}>{p.name}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: "1.25rem" }}>
                                        <span style={{ padding: "0.25rem 0.75rem", borderRadius: "var(--radius-full)", background: "var(--color-light)", fontSize: "0.75rem", textTransform: "capitalize" }}>{p.category}</span>
                                    </td>
                                    <td style={{ padding: "1.25rem", fontWeight: 600 }}>₹{p.price}</td>
                                    <td style={{ padding: "1.25rem" }}>
                                        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", color: "#10b981", fontSize: "0.875rem" }}>
                                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }}></div> Active
                                        </span>
                                    </td>
                                    <td style={{ padding: "1.25rem" }}>
                                        <div style={{ display: "flex", gap: "0.5rem" }}>
                                            <button style={{ padding: "0.5rem", borderRadius: "6px", border: "1px solid #e2e8f0", background: "white", color: "var(--color-gray)", cursor: "pointer" }}><Edit size={16} /></button>
                                            <button style={{ padding: "0.5rem", borderRadius: "6px", border: "1px solid #fee2e2", background: "white", color: "#ef4444", cursor: "pointer" }}><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {products.length === 0 && (
                        <div style={{ padding: "4rem", textAlign: "center", color: "var(--color-gray-light)" }}>
                            No products found. Click "Add New Product" to get started.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
