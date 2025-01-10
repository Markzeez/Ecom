import axios from 'axios';
import React, { useState } from 'react';


const EmailSubscriptionForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    
    const handleSubscribe = async () => {
        try {
            await axios.post("http://localhost:5000/subscribe", { email});
            alert("Subscribed Successfully!");
            setEmail("");
        } catch (error) {
            console.log("Error subscribing: ", error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-3 ml-2 rounded-lg ">
            <h2 className="text-2xl font-light ">Subscribe</h2>
            <p className='text-xs lg:text-sm '>Get E-mail update about our latest shop and special offers</p>
            <form >
                <div className='flex flex-col rounded-lg w-[230px] h-[40px]  bg-white border border-gray-300 '>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='shopfromteepha@gmail.com'
                        required
                        className="w-full p-2 text-sm  rounded-md focus:outline-none "
                    />
                
                    <button
                    onClick={handleSubscribe}
                    className="  text-black w-[100px] border p-1 rounded mt-2 hover:text-white hover:bg-gray-400  "
                >
                    Subscribe
                </button>
                </div>  
            </form>
            
        </div>
    );
};

export default EmailSubscriptionForm;