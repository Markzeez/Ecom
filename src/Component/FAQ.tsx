import React, { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase with a receipt.",
  },
  {
    question: "How do I track my order?",
    answer: "Log in to your account and click on 'Track Order' to see updates.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs vary.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer: "You can cancel or modify orders within 24 hours of placing them.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-t-lg focus:outline-none flex justify-between"
            >
              {faq.question}
              <span className="ml-2">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-600 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;