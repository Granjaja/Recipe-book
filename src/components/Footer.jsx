// components/Footer.js

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo & Social Links */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Recipe Blog</h2>
            <p className="text-sm text-gray-400 mt-2">Delicious recipes and cooking tips</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.5 12.05c0-5.85-4.65-10.5-10.5-10.5S1.5 6.2 1.5 12.05c0 5.25 3.9 9.6 9 10.4V14.7h-2.7v-2.65h2.7v-1.95c0-2.6 1.6-4.05 3.95-4.05 1.1 0 2.1.1 2.4.15v2.65h-1.7c-1.35 0-1.6.65-1.6 1.55v2h2.8l-.4 2.65h-2.4v7.75c5.1-.8 9-5.15 9-10.4z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.8 2H6.2C4.1 2 2.5 3.6 2.5 5.7v11.5c0 2.1 1.6 3.7 3.7 3.7h11.6c2.1 0 3.7-1.6 3.7-3.7V5.7c0-2.1-1.6-3.7-3.7-3.7zm.4 13.2c0 1.3-1.1 2.4-2.4 2.4H8.2c-1.3 0-2.4-1.1-2.4-2.4V8.7c0-1.3 1.1-2.4 2.4-2.4h7.6c1.3 0 2.4 1.1 2.4 2.4v6.5zM12 7.4c-2.5 0-4.6 2-4.6 4.6s2 4.6 4.6 4.6 4.6-2 4.6-4.6-2-4.6-4.6-4.6zm0 7.6c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 7.1c.6-1.1 1.1-2.4 1.3-3.7-.6.4-1.2.7-1.9.8.7-.5 1.2-1.2 1.5-2-1 .6-2 .9-3.1 1.1-.9-.9-2.1-1.4-3.4-1.4-2.6 0-4.7 2.1-4.7 4.7 0 .4 0 .7.1 1-3.9-.2-7.3-2-9.5-4.6-.4.7-.6 1.5-.6 2.4 0 1.6.8 3 2.1 3.8-.7 0-1.4-.2-2-.5 0 2.2 1.6 4.1 3.6 4.5-.4.1-.9.2-1.4.2-.3 0-.7 0-1-.1.7 2 2.6 3.4 4.9 3.4-1.8 1.4-4.1 2.2-6.5 2.2-.4 0-.9 0-1.3-.1 2.3 1.5 5.1 2.3 8 2.3 9.6 0 14.8-8 14.8-14.8 0-.2 0-.4 0-.6.9-.6 1.5-1.4 2.1-2.2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Bottom Section: Navigation & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
            <Link href="/recipes" className="text-gray-400 hover:text-white">Recipes</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Recipe Blog. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
