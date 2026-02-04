import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

interface ExtendedUser {
  id: string;
  email: string;
  name?: string | null;
  role: "USER" | "ADMIN";
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user as ExtendedUser | undefined;

  const userInitial = user?.name?.charAt(0)?.toUpperCase() ||
    user?.email?.charAt(0)?.toUpperCase() || "U";

  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>Dashboard</h2>
        <div className="dashboard-user">
          <div className="user-avatar">{userInitial}</div>
          <div className="user-info">
            <h4>{user?.name || user?.email}</h4>
            <span className={`role-badge ${user?.role?.toLowerCase()}`}>
              {user?.role}
            </span>
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
            <h3>Account Type</h3>
            <div className="value">{user?.role}</div>
          </div>

          <div className="dashboard-card">
            <h3>Email</h3>
            <div className="value" style={{ fontSize: "1rem" }}>
              {user?.email}
            </div>
          </div>

          {user?.role === "ADMIN" && (
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

