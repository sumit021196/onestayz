import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { BedDouble, CalendarCheck, CheckCircle, XCircle } from 'lucide-react';
import '../../styles/Admin.css';

const Dashboard = () => {
    const [stats, setStats] = useState({
        totalRooms: 0,
        availableRooms: 0,
        activeBookings: 0,
        pendingBookings: 0
    });

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            // Fetch Rooms Stats
            const { data: rooms } = await supabase.from('rooms').select('*');
            const totalRooms = rooms?.length || 0;
            const availableRooms = rooms?.filter(r => r.is_available).length || 0;

            // Fetch Bookings Stats
            const { data: bookings } = await supabase.from('bookings').select('*');
            const activeBookings = bookings?.filter(b => b.status === 'confirmed').length || 0;
            const pendingBookings = bookings?.filter(b => b.status === 'pending').length || 0;

            setStats({ totalRooms, availableRooms, activeBookings, pendingBookings });
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-header">
                <h1>Dashboard Overview</h1>
                <p>Welcome back, Admin.</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}>
                        <BedDouble size={24} />
                    </div>
                    <div className="stat-info">
                        <h3>Total Rooms</h3>
                        <p>{stats.totalRooms}</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}>
                        <CheckCircle size={24} />
                    </div>
                    <div className="stat-info">
                        <h3>Available</h3>
                        <p>{stats.availableRooms}</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fef9c3', color: '#ca8a04' }}>
                        <CalendarCheck size={24} />
                    </div>
                    <div className="stat-info">
                        <h3>Active Bookings</h3>
                        <p>{stats.activeBookings}</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}>
                        <XCircle size={24} />
                    </div>
                    <div className="stat-info">
                        <h3>Pending</h3>
                        <p>{stats.pendingBookings}</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity Placeholder */}
            <div className="recent-activity" style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Recent Activity</h3>
                <p style={{ color: '#64748b' }}>No recent activity to show.</p>
            </div>
        </div>
    );
};

export default Dashboard;
