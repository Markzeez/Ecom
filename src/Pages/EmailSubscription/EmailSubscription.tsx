import React, { useState } from 'react';


const EmailSubscriptionForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Replace with your API endpoint to handle subscriptions
        fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(response => {
                if (response.ok) {
                    setSuccessMessage('Thank you for subscribing!');
                    setEmail('');
                } else {
                    setError('There was an issue with your subscription. Please try again later.');
                }
            })
            .catch(() => {
                setError('There was an issue with your subscription. Please try again later.');
            });
    };

    return (
        <div className="max-w-md mx-auto p-3  rounded-lg ">
            <h2 className="text-2xl font-light ">Subscribe</h2>
            <p className='text-sm'>Get E-mail update about our latest shop and special offers</p>
            <form onSubmit={handleSubmit}>
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
                    type="submit"
                    className="  text-black w-[100px] border p-1 rounded mt-2 hover:text-white hover:bg-gray-400  "
                >
                    subscribe
                </button>
                    
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}   
            </form>
            <div className='flex flex-row text-xs mt-1 gap-4 w-[80%] pb-4'>
                
                </div>
            
        </div>
    );
};

export default EmailSubscriptionForm;