import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="/" style={{ fontWeight: '600', letterSpacing: '0.5px' }}>
          💼 Finstack
        </Navbar.Brand>
        <div className="text-light d-none d-md-block">
          Smart Finance
        </div>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
