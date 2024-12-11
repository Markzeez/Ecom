import React from 'react';
import EmailSubscriptionForm from '../Pages/EmailSubscription/EmailSubscription';
import { BiArrowToTop } from 'react-icons/bi';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { FloatingWhatsApp} from 'react-floating-whatsapp';
import { BsYoutube } from 'react-icons/bs';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-400 text-[#0f0f0f] py-8 mt-10">
      <div className="container mx-auto px-1">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
          {/* Links Section */}
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">ABOUT US</h3> */}
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Store location</a></li>  
              <li><a href="#" className="hover:underline">Order tracking</a></li>
              {/* <li><a href="#" className="hover:underline">Support Policy</a></li> */}
            </ul>
          </div>


          {/* Links Section */}
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Links</h3> */}
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Products</a></li>
              <li><a href="#" className="hover:underline">Review</a></li>
              <li><a href="#" className="hover:underline">New Arrival</a></li>
              {/* <li><a href="#" className="hover:underline">Support Policy</a></li> */}
              <li><a href="#" className="hover:underline">Brands guide</a></li>

            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow us</h3>
            {/* <p>If you have any questions, feel free to reach out!</p> */}
            <p className="mt-2">Email: support@example.com</p>
            <p>Phone: (234) 288-6348</p>
           <ul>
           <li><a href="#" className="hover:underline">Support Policy</a></li>
           </ul>
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
               <BsYoutube size={25}/>
              </a>
              <a href="#" className="hover:text-blue-400">
              <FloatingWhatsApp phoneNumber={'07042886348'} accountName={'shopfromteepha'}  />
              </a>
             
            </div>
            
          </div>
          </div>
          
         <EmailSubscriptionForm/>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-5 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shopfromteepha. All rights reserved.</p>
        </div>
        {/* <div className="bottom-[100px] right-4 flex justify-end "> */}
      
        <a href="#top">
          <BiArrowToTop
            width={40}
            className="mt-[-50px] bg-gray-600 p-2 rounded-full text-gray-300 text-4xl hover:bg-gray-500"
          />
        </a>
      {/* </div> */}
      </div>
      
    </footer>
  );
};

export default Footer;
