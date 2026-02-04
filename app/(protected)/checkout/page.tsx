"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
    ArrowLeft,
    MapPin,
    CreditCard,
    Truck,
    ShoppingBag,
    Check,
    Shield,
} from "lucide-react";

interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

// Demo order items - replace with actual cart state
const demoOrderItems: OrderItem[] = [
    { id: "1", name: "Personalized Name Puzzle", price: 899, quantity: 1 },
    { id: "2", name: "Custom Wall Art Print", price: 1299, quantity: 2 },
];

export default function CheckoutPage() {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("razorpay");

    // Form states
    const [name, setName] = useState(session?.user?.name || "");
    const [email, setEmail] = useState(session?.user?.email || "");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");

    const orderItems = demoOrderItems;
    const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 999 ? 0 : 99;
    const total = subtotal + shipping;

    const handlePlaceOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // TODO: Implement order placement with payment gateway
        setTimeout(() => {
            setIsLoading(false);
            alert("Order placed successfully! (Demo)");
        }, 2000);
    };

    return (
        <main className="checkout-page">
            <div className="checkout-container">
                <header className="checkout-header">
                    <Link href="/cart" className="back-button">
                        <ArrowLeft size={20} />
                        <span>Back to Cart</span>
                    </Link>
                    <h1>Checkout</h1>
                    <div className="checkout-steps">
                        <div className="step active">
                            <div className="step-icon"><Check size={16} /></div>
                            <span>Cart</span>
                        </div>
                        <div className="step-line active"></div>
                        <div className="step active">
                            <div className="step-icon">2</div>
                            <span>Checkout</span>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-icon">3</div>
                            <span>Confirmation</span>
                        </div>
                    </div>
                </header>

                <form onSubmit={handlePlaceOrder} className="checkout-content">
                    <div className="checkout-forms">
                        {/* Shipping Address */}
                        <section className="checkout-section">
                            <div className="section-header">
                                <MapPin size={24} />
                                <h2>Shipping Address</h2>
                            </div>
                            <div className="form-grid">
                                <div className="form-group full-width">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="+91 1234567890"
                                        required
                                    />
                                </div>
                                <div className="form-group full-width">
                                    <label htmlFor="street">Street Address *</label>
                                    <input
                                        type="text"
                                        id="street"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                        placeholder="House no., Building, Street"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City *</label>
                                    <input
                                        type="text"
                                        id="city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder="City"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State *</label>
                                    <input
                                        type="text"
                                        id="state"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        placeholder="State"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pincode">PIN Code *</label>
                                    <input
                                        type="text"
                                        id="pincode"
                                        value={pincode}
                                        onChange={(e) => setPincode(e.target.value)}
                                        placeholder="PIN Code"
                                        required
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Payment Method */}
                        <section className="checkout-section">
                            <div className="section-header">
                                <CreditCard size={24} />
                                <h2>Payment Method</h2>
                            </div>
                            <div className="payment-options">
                                <label
                                    className={`payment-option ${paymentMethod === "razorpay" ? "selected" : ""}`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="razorpay"
                                        checked={paymentMethod === "razorpay"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <div className="payment-content">
                                        <div className="payment-icon">
                                            <CreditCard size={24} />
                                        </div>
                                        <div className="payment-info">
                                            <h4>Razorpay</h4>
                                            <p>Cards, UPI, Net Banking, Wallets</p>
                                        </div>
                                    </div>
                                </label>
                                <label
                                    className={`payment-option ${paymentMethod === "cod" ? "selected" : ""}`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentMethod === "cod"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <div className="payment-content">
                                        <div className="payment-icon">
                                            <Truck size={24} />
                                        </div>
                                        <div className="payment-info">
                                            <h4>Cash on Delivery</h4>
                                            <p>Pay when you receive</p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </section>
                    </div>

                    {/* Order Summary */}
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <div className="order-items">
                            {orderItems.map((item) => (
                                <div key={item.id} className="order-item">
                                    <div className="item-image">
                                        <ShoppingBag size={20} />
                                    </div>
                                    <div className="item-info">
                                        <h4>{item.name}</h4>
                                        <p>Qty: {item.quantity}</p>
                                    </div>
                                    <div className="item-price">
                                        ₹{(item.price * item.quantity).toLocaleString()}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toLocaleString()}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>₹{total.toLocaleString()}</span>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary place-order-btn"
                            disabled={isLoading}
                        >
                            {isLoading ? "Processing..." : `Place Order • ₹${total.toLocaleString()}`}
                        </button>

                        <div className="security-badges">
                            <div className="badge">
                                <Shield size={16} />
                                <span>Secure Payment</span>
                            </div>
                            <div className="badge">
                                <Truck size={16} />
                                <span>Fast Delivery</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <style jsx>{`
        .checkout-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 2rem 1rem;
        }

        .checkout-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .checkout-header {
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

        .checkout-header h1 {
          font-size: 2rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }

        .checkout-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .step {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
        }

        .step.active {
          color: #6366f1;
        }

        .step-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          background: #e2e8f0;
        }

        .step.active .step-icon {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
        }

        .step-line {
          width: 40px;
          height: 2px;
          background: #e2e8f0;
        }

        .step-line.active {
          background: #6366f1;
        }

        .checkout-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 2rem;
          align-items: start;
        }

        @media (max-width: 900px) {
          .checkout-content {
            grid-template-columns: 1fr;
          }
        }

        .checkout-forms {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .checkout-section {
          background: white;
          border-radius: 1.5rem;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .section-header svg {
          color: #6366f1;
        }

        .section-header h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .form-group.full-width {
          grid-column: span 2;
        }

        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.full-width {
            grid-column: span 1;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #475569;
        }

        .form-group input {
          padding: 0.875rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.75rem;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .form-group input:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .payment-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .payment-option {
          display: block;
          cursor: pointer;
        }

        .payment-option input {
          display: none;
        }

        .payment-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.75rem;
          transition: all 0.2s;
        }

        .payment-option.selected .payment-content {
          border-color: #6366f1;
          background: #f5f3ff;
        }

        .payment-icon {
          width: 48px;
          height: 48px;
          background: #f1f5f9;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6366f1;
        }

        .payment-info h4 {
          font-weight: 600;
          color: #1e293b;
        }

        .payment-info p {
          font-size: 0.875rem;
          color: #64748b;
        }

        .order-summary {
          background: white;
          border-radius: 1.5rem;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 2rem;
        }

        .order-summary h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .order-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .order-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .item-image {
          width: 48px;
          height: 48px;
          background: #f1f5f9;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
        }

        .item-info {
          flex: 1;
        }

        .item-info h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1e293b;
        }

        .item-info p {
          font-size: 0.75rem;
          color: #64748b;
        }

        .item-price {
          font-weight: 600;
          color: #1e293b;
        }

        .summary-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 1rem 0;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          color: #64748b;
        }

        .summary-row.total {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
        }

        .place-order-btn {
          width: 100%;
          margin-top: 1.5rem;
          padding: 1rem;
          font-size: 1rem;
        }

        .security-badges {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #64748b;
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
        }

        .btn-primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
        </main>
    );
}
