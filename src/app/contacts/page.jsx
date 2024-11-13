// /pages/contacts.js
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contacts() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-8 text-center max-w-md">
        Feel free to reach out through any of the following channels!
      </p>

      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4">
          <FaPhone className="text-blue-500" size={24} />
          <span className="text-lg font-medium">+254 (7) 124 918</span>
        </div>

        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-red-500" size={24} />
          <span className="text-lg font-medium">crysfoanalysis@gmail.com</span>
        </div>

        <div className="flex space-x-6 mt-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 hover:text-blue-900" size={30} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 hover:text-gray-600" size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-500 hover:text-blue-400" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
