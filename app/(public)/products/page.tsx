import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Filter, ShoppingBag, ArrowRight, Search } from "lucide-react";
import Link from "next/link";

const categories = [
    { name: "All Products", slug: "all" },
    { name: "Furniture", slug: "furniture" },
    { name: "Room Décor", slug: "room-decor" },
    { name: "DIY Kits", slug: "diy" },
    { name: "School Supplies", slug: "school-stationery" },
    { name: "Birthday Gifts", slug: "birthday" },
    { name: "Games", slug: "games" },
];

const sampleProducts = [
    { id: "1", name: "Kids Trolley Rack", category: "furniture", price: 900, emoji: "🛒", slug: "kids-trolley-rack" },
    { id: "2", name: "Shape Clock", category: "room-decor", price: 900, emoji: "⏰", slug: "shape-clock" },
    { id: "3", name: "Neck Pillow", category: "travel", price: 850, emoji: "🦒", slug: "neck-pillow" },
    { id: "4", name: "Piggy Bank", category: "room-decor", price: 550, emoji: "🐷", slug: "piggy-bank" },
    { id: "5", name: "Artist Kit", category: "diy", price: 1350, emoji: "🎨", slug: "artist-kit" },
    { id: "6", name: "Meal Set", category: "meal-time", price: 950, emoji: "🍱", slug: "meal-set" },
    { id: "7", name: "Uno Cards", category: "games", price: 600, emoji: "🃏", slug: "uno-cards" },
    { id: "8", name: "Tablet Holder", category: "school-stationery", price: 500, emoji: "📱", slug: "tablet-holder" },
];

export default async function ProductsPage(props: { searchParams: Promise<{ category?: string }> }) {
    const searchParams = await props.searchParams;
    const activeCategory = searchParams.category || "all";

    const filteredProducts = activeCategory === "all"
        ? sampleProducts
        : sampleProducts.filter(p => p.category === activeCategory);

    return (
        <div className="pt-[80px]">
            {/* Page Header */}
            <Section variant="light" padding="md">
                <div className="flex flex-wrap items-center justify-between gap-8">
                    <div>
                        <h1 className="text-4xl font-bold">Our <span className="gradient-text">Products</span></h1>
                        <p className="text-gray-600">Explore our wide range of customized gifts and supplies.</p>
                    </div>
                    <div className="flex-1 max-w-[400px]">
                        <div className="relative">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type="text" placeholder="Search products..." className="input pl-10 w-full" />
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12">
                    {/* Sidebar Filters */}
                    <aside className="hidden md:block">
                        <div className="flex items-center gap-2 mb-6">
                            <Filter size={20} className="text-primary" />
                            <h4 className="font-bold text-lg">Categories</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            {categories.map((cat) => (
                                <Link
                                    key={cat.slug}
                                    href={`/products?category=${cat.slug}`}
                                    className={`px-4 py-3 rounded-md transition-all ${activeCategory === cat.slug
                                            ? "bg-primary text-white font-semibold"
                                            : "bg-transparent text-gray-800 hover:bg-gray-100 hover:text-primary"
                                        }`}
                                >
                                    {cat.name}
                                </Link>
                            ))}
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                            <p className="text-gray-600">Showing <b>{filteredProducts.length}</b> products</p>
                            <select className="input w-auto min-w-[180px]">
                                <option>Newest First</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Popularity</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <Card key={product.id} className="animate-fade-in-up overflow-hidden" padding="none">
                                    <div className="h-[240px] bg-slate-100 flex items-center justify-center text-8xl relative">
                                        {product.emoji}
                                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                                            ₹{product.price}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-xs uppercase font-bold text-primary mb-2 tracking-wider">
                                            {product.category.replace("-", " ")}
                                        </p>
                                        <h4 className="font-bold text-xl mb-4 leading-tight">{product.name}</h4>
                                        <div className="flex gap-3">
                                            <Link href={`/products/${product.slug}`} className="btn btn-outline flex-1 py-2 text-sm">
                                                View Details
                                            </Link>
                                            <Link href="/contact" className="btn btn-primary flex-1 py-2 text-sm">
                                                Inquiry
                                                <ShoppingBag size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-16 bg-slate-50 rounded-2xl">
                                <ShoppingBag size={64} className="mx-auto mb-4 text-gray-300" />
                                <h3 className="text-2xl font-bold mb-2">No Products Found</h3>
                                <p className="text-gray-500 mb-8">Try selecting a different category or search term.</p>
                                <Link href="/products" className="btn btn-primary">
                                    Clear All Filters
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
}
