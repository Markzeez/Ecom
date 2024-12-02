import { useState, useEffect } from 'react';

import { BarChart, LineChart } from '@tremor/react';

const AnalyticsDashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [trafficData, setTrafficData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const salesResponse = await fetch('/api/sales'); // Your API endpoint
      const trafficResponse = await fetch('/api/traffic');
      const sales = await salesResponse.json();
      const traffic = await trafficResponse.json();
      const review = await trafficResponse.json();
      setSalesData(sales);
      setTrafficData(traffic);
      setReviewData(review);
      setLoading(false);
    };

    fetchData();
  }, []);

//   if (loading) return <div className='flex flex-row gap-4 mt-[50px]'>
//   <div className='w-7 h-7 bg-[#768907] rounded-full animate-bounce duration-75'></div>
//   <div className='w-7 h-7 bg-[#768907] rounded-full animate-bounce duration-50'></div>
//   <div className='w-7 h-7 bg-[#768907] rounded-full animate-bounce duration-25'></div>
// </div>;

  return (
    <div className="p-4">
      <h1 className="text-xl text-center font-semibold">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LineChart data={salesData} categories={[]} index={''} />
        <BarChart data={trafficData} categories={[]} index={''} />
        <BarChart data={reviewData} categories={[]} index={''} />

        
      </div>
      {/* Additional components for filters, detailed reports, etc. */}
    </div>
  );
};

export default AnalyticsDashboard;