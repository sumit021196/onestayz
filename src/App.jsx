import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// Import placeholder pages (create these next)
import About from './pages/About';
import Rooms from './pages/Rooms';
import Dining from './pages/Dining';
import Events from './pages/Events';
import Contact from './pages/Contact';

import { AuthProvider } from './context/AuthContext';
import AdminLayout from './layouts/AdminLayout';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ManageRooms from './pages/admin/ManageRooms';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/about" element={<><Header /><About /><Footer /></>} />
        <Route path="/rooms" element={<><Header /><Rooms /><Footer /></>} />
        <Route path="/dining" element={<><Header /><Dining /><Footer /></>} />
        <Route path="/events" element={<><Header /><Events /><Footer /></>} />
        <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="rooms" element={<ManageRooms />} />
          <Route path="bookings" element={<div style={{ padding: '2rem' }}>Bookings Management (Coming Soon)</div>} />
          <Route path="content" element={<div style={{ padding: '2rem' }}>Content Editing (Coming Soon)</div>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

