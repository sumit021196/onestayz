import React from 'react';
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, BedDouble, CalendarCheck, FileText, LogOut } from 'lucide-react';
import '../styles/Admin.css';

const AdminLayout = () => {
    const { user, isAdmin, signOut } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/admin/login" />;
    }

    if (!isAdmin) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', marginTop: '5rem' }}>
                <h2>Access Denied</h2>
                <p>You do not have permission to view this page.</p>
                <button onClick={signOut} className="btn btn-primary" style={{ marginTop: '1rem' }}>Sign Out</button>
            </div>
        );
    }

    const navItems = [
        { path: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { path: '/admin/rooms', label: 'Manage Rooms', icon: <BedDouble size={20} /> },
        { path: '/admin/bookings', label: 'Bookings', icon: <CalendarCheck size={20} /> },
        { path: '/admin/content', label: 'Edit Content', icon: <FileText size={20} /> },
    ];

    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <div className="admin-logo">
                    <h2>Onestayz Admin</h2>
                </div>
                <nav className="admin-nav">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`admin-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="admin-footer">
                    <button onClick={signOut} className="logout-btn">
                        <LogOut size={20} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>
            <main className="admin-content">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
