import React from 'react';
import EmailSubscriptionForm from '../Pages/EmailSubscription/EmailSubscription';
import { BiArrowToTop } from 'react-icons/bi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-400 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Products</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>If you have any questions, feel free to reach out!</p>
            <p className="mt-2">Email: support@example.com</p>
            <p>Phone: (234) 288-6348</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12h-4v10H6V12H2l10-10 10 10z" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.36 4.64A9 9 0 002.64 13.36m1.6 5.75A11.96 11.96 0 0112 21c6.627 0 12-5.373 12-12 0-2.104-.54-4.064-1.49-5.734m-7.65 2.23c-2.6 0-4.84 2.31-4.84 5.16 0 1.373.54 2.634 1.43 3.579A4.8 4.8 0 018 13.5c1.5 0 2.84-.67 3.75-1.73.206-.267.38-.573.49-.895a4.2 4.2 0 01-.21.019A4.24 4.24 0 0012 12c-.154 0-.305-.014-.452-.043a3.975 3.975 0 00-.82-.077 2.09 2.09 0 01-1.5-2.5A2.07 2.07 0 0111 8.5a3.7 3.7 0 011.68.494A2.09 2.09 0 0112 10a2.04 2.04 0 00.457-1.036A4.26 4.26 0 0116 9a4.25 4.25 0 01-4.25 4.25c-.667 0-1.305-.157-1.845-.433.454-.685 1.08-1.055 1.845-1.055a2.625 2.625 0 002.625-2.625c0-.883-.337-1.68-.894-2.276a4.26 4.26 0 00-2.556-1.165z" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 4.343A10 10 0 1012 22a10 10 0 008.657-13.657zM12 15v3m0-12v3m6.364 1.636l-2.121 2.121m-12.728 0l2.121-2.121" />
                </svg>
              </a>
              
            </div>
            <EmailSubscriptionForm/>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shopfromteepha. All rights reserved.</p>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 ">
        <a href="#top">
          <BiArrowToTop
            width={40}
            className="bg-gray-600 p-2 rounded-full text-gray-300 text-4xl hover:bg-gray-500"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
