import React from 'react';
import { GiQuickMan, GiQuickSlash, GiReturnArrow } from 'react-icons/gi';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const features: Feature[] = [
  
  {
    icon: <GiQuickSlash size={50} />,
    title: 'Fast Delivery',
    description:
      'We ensure fast delivery for all your orders. Our logistics network operates 24/7 to get your products delivered in the shortest time possible.',
    bgColor: 'bg-green-100',
  },
  {
    icon: <GiQuickMan size={50} />,
    title: 'Reliable and Trustworthy',
    description:
      'We take pride in being a reliable and trustworthy online store. Your satisfaction is our top priority, and we are always here to assist you.',
    bgColor: 'bg-blue-100',
  },
  {
    icon: <GiReturnArrow size={50} />,
    title: 'Return Policy',
    description:
      "Our return policy is simple. If you're not satisfied with your purchase, you can return it within 2 days of delivery for a full refund. The item must be in its original condition and packaging.",
    bgColor: 'bg-slate-100',
  },
  // {
  //   icon: <CiDiscount1 size={50} />,
  //   title: 'Special Price Offer',
  //   description:
  //     "Our return policy is simple. If you're not satisfied with your purchase, you can return it within 2 days of delivery for a full refund. The item must be in its original condition and packaging.",
  //   bgColor: 'bg-purple-100',
  // },
];

const FeatureCard: React.FC<Feature> = ({ icon, title, description, bgColor }) => {
  return (
    <div className={`${bgColor} p-4 rounded-md flex items-start gap-3 space-x-4`}>
      <div>{icon}</div>
      <div>
        <h3 className="text-sm font-semibold mb-2">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

const CardFeature: React.FC = () => {
  return (
    <section className="p-4 bg-white rounded-lg shadow-lg">
      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            bgColor={feature.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default CardFeature;
