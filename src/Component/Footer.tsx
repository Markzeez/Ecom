import React from 'react';
import EmailSubscriptionForm from '../Pages/EmailSubscription/EmailSubscription';
import { BiArrowToTop } from 'react-icons/bi';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FloatingWhatsApp} from 'react-floating-whatsapp';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#eae5e5] text-[#0f0f0f] py-8 mt-10">
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
            <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            {/* Social Media Section */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
               <CiFacebook size={25}/>
              </a>
              <a href="#" className="hover:text-blue-400">
               <FaInstagram size={25}/>
              </a>
              <a href="#" className="hover:text-blue-400">
               <FaTiktok size={25}/>
              </a>
              <a href="#" className="hover:text-blue-400">
              <FloatingWhatsApp phoneNumber={'07042886348'} accountName={'shopfromteepha'}  />
              </a>
              <a href="#" className="hover:text-blue-400">
               
              </a>
            </div>
            
          </div>
          </div>
          
         <EmailSubscriptionForm/>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shopfromteepha. All rights reserved.</p>
        </div>
      </div>
      <div className="bottom-1 right-4 flex justify-end ">
      
        <a href="#top">
          <BiArrowToTop
            width={40}
            className="bottom-1 left-[50px] bg-gray-600 p-2 rounded-full text-gray-300 text-4xl hover:bg-gray-500"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
