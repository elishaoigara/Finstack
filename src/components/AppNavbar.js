// src/components/AppNavbar.js
import React from 'react';
import { Navbar, Container, Dropdown, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import userAvatar from '../assets/avatar.png'; // Ensure this file exists

function AppNavbar() {
  return (
    <Navbar expand="md" className="py-3" style={{
      background: 'linear-gradient(90deg, #056676, #00c897)',
      color: '#fff',
    }}>
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Animated Brand */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar.Brand href="/" style={{
            fontWeight: '600',
            fontSize: '1.5rem',
            color: '#ffffff',
            letterSpacing: '0.5px'
          }}>
            💼 Finstack
          </Navbar.Brand>
        </motion.div>

        {/* Subtext */}
        <div className="text-light d-none d-md-block" style={{ fontStyle: 'italic', fontSize: '1rem' }}>
          Your friendly finance companion 💚
        </div>

        {/* User Avatar Dropdown */}
        <Dropdown align="end">
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-transparent border-0 p-0">
            <Image
              src={userAvatar}
              roundedCircle
              width={38}
              height={38}
              alt="User Avatar"
              style={{ objectFit: 'cover', border: '2px solid #ffffff' }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-end">
            <Dropdown.Item href="#/profile">👤 Profile</Dropdown.Item>
            <Dropdown.Item href="#/settings">⚙️ Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/logout">🚪 Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
