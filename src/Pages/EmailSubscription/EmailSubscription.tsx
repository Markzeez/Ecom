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
            <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default EmailSubscriptionForm;