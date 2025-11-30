import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Trash2, Edit } from 'lucide-react';
import '../../styles/Admin.css';

const ManageRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        type: 'Deluxe',
        price: '',
        description: '',
        is_available: true
    });

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        try {
            const { data, error } = await supabase.from('rooms').select('*').order('created_at', { ascending: false });
            if (error) throw error;
            setRooms(data || []);
        } catch (error) {
            console.error('Error fetching rooms:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { error } = await supabase.from('rooms').insert([formData]);
            if (error) throw error;
            setShowModal(false);
            setFormData({ name: '', type: 'Deluxe', price: '', description: '', is_available: true });
            fetchRooms();
        } catch (error) {
            alert('Error adding room: ' + error.message);
        }
    };

    const toggleAvailability = async (id, currentStatus) => {
        try {
            const { error } = await supabase.from('rooms').update({ is_available: !currentStatus }).eq('id', id);
            if (error) throw error;
            fetchRooms();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const deleteRoom = async (id) => {
        if (!window.confirm('Are you sure you want to delete this room?')) return;
        try {
            const { error } = await supabase.from('rooms').delete().eq('id', id);
            if (error) throw error;
            fetchRooms();
        } catch (error) {
            console.error('Error deleting room:', error);
        }
    };

    return (
        <div className="manage-rooms-page">
            <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Manage Rooms</h1>
                <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                    <Plus size={18} style={{ marginRight: '0.5rem' }} /> Add Room
                </button>
            </div>

            {loading ? (
                <p>Loading rooms...</p>
            ) : (
                <div className="rooms-table-container" style={{ background: 'white', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                            <tr>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#64748b' }}>Name</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#64748b' }}>Type</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#64748b' }}>Price</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#64748b' }}>Status</th>
                                <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#64748b' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((room) => (
                                <tr key={room.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '1rem' }}>{room.name}</td>
                                    <td style={{ padding: '1rem' }}>{room.type}</td>
                                    <td style={{ padding: '1rem' }}>₹{room.price}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span
                                            onClick={() => toggleAvailability(room.id, room.is_available)}
                                            style={{
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '999px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                backgroundColor: room.is_available ? '#dcfce7' : '#fee2e2',
                                                color: room.is_available ? '#16a34a' : '#dc2626'
                                            }}
                                        >
                                            {room.is_available ? 'Available' : 'Booked'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                                        <button onClick={() => deleteRoom(room.id)} style={{ background: 'none', color: '#ef4444', padding: '0.5rem' }}>
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {rooms.length === 0 && (
                                <tr>
                                    <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>No rooms found. Add one to get started.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Simple Modal for Adding Room */}
            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1100 }}>
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', width: '100%', maxWidth: '500px' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Add New Room</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Room Name</label>
                                <input name="name" value={formData.name} onChange={handleInputChange} required placeholder="e.g. Deluxe Room 101" />
                            </div>
                            <div className="grid grid-2" style={{ gap: '1rem' }}>
                                <div className="form-group">
                                    <label>Type</label>
                                    <select name="type" value={formData.type} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px' }}>
                                        <option value="Deluxe">Deluxe</option>
                                        <option value="Suite">Suite</option>
                                        <option value="Standard">Standard</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Price (₹)</label>
                                    <input name="price" type="number" value={formData.price} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea name="description" value={formData.description} onChange={handleInputChange} rows="3" style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px' }}></textarea>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                                <button type="button" onClick={() => setShowModal(false)} className="btn btn-secondary">Cancel</button>
                                <button type="submit" className="btn btn-primary">Save Room</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageRooms;
