import { useState, useEffect } from 'react';

import { BarChart, LineChart } from '@tremor/react';

const AnalyticsDashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [trafficData, setTrafficData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const salesResponse = await fetch('/api/sales'); // Your API endpoint
      const trafficResponse = await fetch('/api/traffic');
      const sales = await salesResponse.json();
      const traffic = await trafficResponse.json();
      setSalesData(sales);
      setTrafficData(traffic);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LineChart data={salesData} categories={[]} index={''} />
        <BarChart data={trafficData} categories={[]} index={''} />
      </div>
      {/* Additional components for filters, detailed reports, etc. */}
    </div>
  );
};

export default AnalyticsDashboard;