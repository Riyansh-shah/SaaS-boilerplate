"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    category: string;
}

// Demo cart items - replace with actual cart state management
const demoCartItems: CartItem[] = [
    {
        id: "1",
        name: "Personalized Name Puzzle",
        price: 899,
        quantity: 1,
        image: "/placeholder-product.jpg",
        category: "Kids",
    },
    {
        id: "2",
        name: "Custom Wall Art Print",
        price: 1299,
        quantity: 2,
        image: "/placeholder-product.jpg",
        category: "Room Décor",
    },
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState<CartItem[]>(demoCartItems);

    const updateQuantity = (id: string, delta: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id: string) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 999 ? 0 : 99;
    const total = subtotal + shipping;

    return (
        <main className="cart-page">
            <div className="cart-container">
                <header className="cart-header">
                    <Link href="/products" className="back-button">
                        <ArrowLeft size={20} />
                        <span>Continue Shopping</span>
                    </Link>
                    <h1>
                        <ShoppingBag size={32} />
                        Shopping Cart
                    </h1>
                    <p>{cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart</p>
                </header>

                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <ShoppingBag size={80} strokeWidth={1} />
                        <h2>Your cart is empty</h2>
                        <p>Looks like you haven&apos;t added anything to your cart yet.</p>
                        <Link href="/products" className="btn btn-primary">
                            Browse Products
                        </Link>
                    </div>
                ) : (
                    <div className="cart-content">
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-image">
                                        <div className="image-placeholder">
                                            <ShoppingBag size={32} />
                                        </div>
                                    </div>
                                    <div className="item-details">
                                        <span className="item-category">{item.category}</span>
                                        <h3 className="item-name">{item.name}</h3>
                                        <p className="item-price">₹{item.price.toLocaleString()}</p>
                                    </div>
                                    <div className="item-quantity">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="qty-btn"
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="qty-value">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="qty-btn"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                    <div className="item-total">
                                        ₹{(item.price * item.quantity).toLocaleString()}
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="remove-btn"
                                        title="Remove item"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <h2>Order Summary</h2>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                            </div>
                            {shipping === 0 && (
                                <div className="free-shipping-badge">
                                    🎉 You got free shipping!
                                </div>
                            )}
                            <div className="summary-divider"></div>
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>₹{total.toLocaleString()}</span>
                            </div>
                            <Link href="/checkout" className="btn btn-primary checkout-btn">
                                Proceed to Checkout
                                <ArrowRight size={18} />
                            </Link>
                            <p className="secure-text">🔒 Secure checkout powered by Razorpay</p>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
        .cart-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 2rem 1rem;
        }

        .cart-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .cart-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 1rem;
          transition: color 0.2s;
        }

        .back-button:hover {
          color: #6366f1;
        }

        .cart-header h1 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-size: 2rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .cart-header p {
          color: #64748b;
        }

        .empty-cart {
          text-align: center;
          padding: 4rem 2rem;
          background: white;
          border-radius: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .empty-cart svg {
          color: #cbd5e1;
          margin-bottom: 1.5rem;
        }

        .empty-cart h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .empty-cart p {
          color: #64748b;
          margin-bottom: 1.5rem;
        }

        .cart-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 2rem;
        }

        @media (max-width: 900px) {
          .cart-content {
            grid-template-columns: 1fr;
          }
        }

        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cart-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .item-image {
          flex-shrink: 0;
        }

        .image-placeholder {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #e2e8f0 0%, #f1f5f9 100%);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
        }

        .item-details {
          flex: 1;
        }

        .item-category {
          font-size: 0.75rem;
          font-weight: 600;
          color: #6366f1;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .item-name {
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0.25rem 0;
        }

        .item-price {
          font-size: 0.875rem;
          color: #64748b;
        }

        .item-quantity {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #f1f5f9;
          border-radius: 0.5rem;
          padding: 0.25rem;
        }

        .qty-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border: none;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: all 0.2s;
          color: #475569;
        }

        .qty-btn:hover:not(:disabled) {
          background: #6366f1;
          color: white;
        }

        .qty-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .qty-value {
          width: 2rem;
          text-align: center;
          font-weight: 600;
          color: #1e293b;
        }

        .item-total {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1e293b;
          min-width: 100px;
          text-align: right;
        }

        .remove-btn {
          padding: 0.5rem;
          background: #fee2e2;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          color: #ef4444;
          transition: all 0.2s;
        }

        .remove-btn:hover {
          background: #ef4444;
          color: white;
        }

        .cart-summary {
          background: white;
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          height: fit-content;
          position: sticky;
          top: 2rem;
        }

        .cart-summary h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          color: #64748b;
        }

        .summary-row.total {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-top: 1rem;
        }

        .free-shipping-badge {
          background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
          color: #166534;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-align: center;
          margin: 0.5rem 0;
        }

        .summary-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 1rem 0;
        }

        .checkout-btn {
          width: 100%;
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .secure-text {
          text-align: center;
          font-size: 0.75rem;
          color: #94a3b8;
          margin-top: 1rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          font-weight: 600;
          border-radius: 0.75rem;
          transition: all 0.2s;
          cursor: pointer;
          border: none;
          text-decoration: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        @media (max-width: 640px) {
          .cart-item {
            flex-wrap: wrap;
          }

          .item-total {
            width: 100%;
            text-align: left;
            margin-top: 0.5rem;
          }
        }
      `}</style>
        </main>
    );
}
