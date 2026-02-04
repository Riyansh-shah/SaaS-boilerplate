"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Home, User, MapPin, Phone, Lock, Save, ArrowLeft } from "lucide-react";

export default function SettingsPage() {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    // Form states
    const [name, setName] = useState(session?.user?.name || "");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");

    // Password states
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSaveProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        // TODO: Implement API call to save profile
        setTimeout(() => {
            setIsLoading(false);
            setMessage({ type: "success", text: "Profile updated successfully!" });
        }, 1000);
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        if (newPassword !== confirmPassword) {
            setMessage({ type: "error", text: "New passwords don't match!" });
            return;
        }

        if (newPassword.length < 8) {
            setMessage({ type: "error", text: "Password must be at least 8 characters!" });
            return;
        }

        setIsLoading(true);

        // TODO: Implement API call to change password
        setTimeout(() => {
            setIsLoading(false);
            setMessage({ type: "success", text: "Password changed successfully!" });
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        }, 1000);
    };

    return (
        <main className="settings-page">
            <div className="settings-container">
                <header className="settings-header">
                    <Link href="/" className="back-button">
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </Link>
                    <h1>Personal Details</h1>
                    <p>Manage your account information and preferences</p>
                </header>

                {message && (
                    <div className={`message ${message.type}`}>
                        {message.text}
                    </div>
                )}

                {/* Profile Section */}
                <section className="settings-section">
                    <div className="section-header">
                        <User size={24} />
                        <h2>Basic Information</h2>
                    </div>
                    <form onSubmit={handleSaveProfile} className="settings-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={session?.user?.email || ""}
                                disabled
                                className="input-disabled"
                            />
                            <span className="help-text">Email cannot be changed</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                            <Save size={18} />
                            {isLoading ? "Saving..." : "Save Changes"}
                        </button>
                    </form>
                </section>

                {/* Contact Section */}
                <section className="settings-section">
                    <div className="section-header">
                        <Phone size={24} />
                        <h2>Contact Information</h2>
                    </div>
                    <form onSubmit={handleSaveProfile} className="settings-form">
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+91 1234567890"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                            <Save size={18} />
                            {isLoading ? "Saving..." : "Save Changes"}
                        </button>
                    </form>
                </section>

                {/* Address Section */}
                <section className="settings-section">
                    <div className="section-header">
                        <MapPin size={24} />
                        <h2>Shipping Address</h2>
                    </div>
                    <form onSubmit={handleSaveProfile} className="settings-form">
                        <div className="form-group">
                            <label htmlFor="street">Street Address</label>
                            <input
                                type="text"
                                id="street"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                placeholder="House no., Building, Street"
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="City"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input
                                    type="text"
                                    id="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    placeholder="State"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pincode">PIN Code</label>
                                <input
                                    type="text"
                                    id="pincode"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    placeholder="PIN Code"
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                            <Save size={18} />
                            {isLoading ? "Saving..." : "Save Address"}
                        </button>
                    </form>
                </section>

                {/* Password Section */}
                <section className="settings-section">
                    <div className="section-header">
                        <Lock size={24} />
                        <h2>Change Password</h2>
                    </div>
                    <form onSubmit={handleChangePassword} className="settings-form">
                        <div className="form-group">
                            <label htmlFor="currentPassword">Current Password</label>
                            <input
                                type="password"
                                id="currentPassword"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                placeholder="Enter current password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newPassword">New Password</label>
                            <input
                                type="password"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter new password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm new password"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                            <Lock size={18} />
                            {isLoading ? "Updating..." : "Update Password"}
                        </button>
                    </form>
                </section>
            </div>

            <style jsx>{`
        .settings-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 2rem 1rem;
        }

        .settings-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .settings-header {
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

        .settings-header h1 {
          font-size: 2rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .settings-header p {
          color: #64748b;
        }

        .message {
          padding: 1rem;
          border-radius: 0.75rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .message.success {
          background: #dcfce7;
          color: #166534;
          border: 1px solid #86efac;
        }

        .message.error {
          background: #fee2e2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }

        .settings-section {
          background: white;
          border-radius: 1.5rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
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

        .settings-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
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

        .form-group input.input-disabled {
          background: #f1f5f9;
          color: #94a3b8;
          cursor: not-allowed;
        }

        .help-text {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
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
