import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>© {new Date().getFullYear()} - Recipe_Wishlist</p>
  </aside>
</footer>
    );
};

export default Footer;