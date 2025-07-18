import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <small>&copy; {new Date().getFullYear()} Finstack. All Rights Reserved.</small>
    </footer>
  );
}

export default Footer;
