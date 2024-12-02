import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-3">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to shopfromteepha! We are dedicated to providing you with the best shopping experience,
        with a focus on dependability, customer service, and uniqueness.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Our mission is to offer high-quality products that meet the needs of our customers and enhance their lives.
        We believe in sustainability and strive to make a positive impact on our community.
      </p>
      
      {/* Team Members Section */}
      <h2 className="text-2xl font-semibold text-center mb-2">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Dummy data for team members
const teamMembers = [
  {
    id: 1,
    name: 'Ibrahim Lateefat',
    role: 'CEO',
    image: 'https://via.placeholder.com/150?text=Alice',
  },
  {
    id: 2,
    name: 'Ibrahim Azeez',
    role: 'CTO',
    image: 'https://via.placeholder.com/150?text=Bob',
  },
  {
    id: 3,
    name: 'Aderonke Ibrahim',
    role: 'Marketing Manager',
    image: 'https://via.placeholder.com/150?text=Charlie',
  },
  // Add more team members as needed
];

export default AboutUs;
