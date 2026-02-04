import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { Home, Shield } from "lucide-react";

interface ExtendedUser {
  id: string;
  email: string;
  name?: string | null;
  role: "USER" | "ADMIN";
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user as ExtendedUser | undefined;
  const isAdmin = user?.role === "ADMIN";

  const userInitial = user?.name?.charAt(0)?.toUpperCase() ||
    user?.email?.charAt(0)?.toUpperCase() || "U";

  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link
            href="/"
            className="btn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              background: "#f1f5f9",
              borderRadius: "0.75rem",
              color: "#475569",
              fontWeight: 600,
              fontSize: "0.875rem",
            }}
          >
            <Home size={18} />
            Home
          </Link>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>Dashboard</h2>
          {isAdmin && (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                padding: "0.25rem 0.75rem",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "1rem",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.75rem",
              }}
            >
              <Shield size={14} />
              Admin Mode
            </span>
          )}
        </div>
        <div className="dashboard-user">
          <div className="user-avatar">{userInitial}</div>
          <div className="user-info">
            <h4>{user?.name || user?.email}</h4>
          </div>
          <LogoutButton />
        </div>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-welcome">
          <h1>Welcome back, {user?.name?.split(" ")[0] || "User"}!</h1>
          <p>Here&apos;s what&apos;s happening in your account.</p>
        </div>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Email</h3>
            <div className="value" style={{ fontSize: "1rem" }}>
              {user?.email}
            </div>
          </div>

          {isAdmin && (
            <div className="dashboard-card">
              <h3>Admin Panel</h3>
              <Link
                href="/admin/products"
                className="btn btn-primary"
                style={{ marginTop: "0.5rem" }}
              >
                Manage Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

