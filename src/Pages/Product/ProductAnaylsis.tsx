import { useState, useEffect } from 'react';
// import { AreaChart } from '@tremor/react';

interface Sale {
  amount: number;
}

interface Traffic {
  visitors: number;
}

interface Review {
  
}

const ProductAnalysis = () => {
  // const [salesData, setSalesData] = useState<Sale[]>([]);
  // const [trafficData, setTrafficData] = useState<Traffic[]>([]);
  // const [reviewData, setReviewData] = useState<Review[]>([]);
  const [totalSales, setTotalSales] = useState<number>(0);
  const [totalCustomers, setTotalCustomers] = useState<number>(0);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [totalVisitors, setTotalVisitors] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const salesResponse = await fetch('/api/sales'); // Replace with your API endpoint
        const trafficResponse = await fetch('/api/traffic');
        const reviewResponse = await fetch('/api/reviews');

        const sales: Sale[] = await salesResponse.json();
        const traffic: Traffic[] = await trafficResponse.json();
        const review: Review[] = await reviewResponse.json();

        // setSalesData(sales);
        // setTrafficData(traffic);
        // setReviewData(review);

        // Calculate totals
        setTotalSales(sales.reduce((acc, curr) => acc + curr.amount, 0));
        setTotalCustomers(sales.length); // Assuming one customer per sale
        setTotalReviews(review.length); // Assuming reviews array length is total reviews
        setTotalVisitors(traffic.reduce((acc, curr) => acc + curr.visitors, 0));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='flex flex-row gap-4 mt-[50px]'>
        <div className='w-7 h-7 bg-[#768907] rounded-full animate-bounce duration-75'></div>
        <div className='w-7 h-7 bg-[#768907] rounded-full animate-bounce duration-50'></div>
        <div className='w-7 h-7 bg-[#768907] rounded-full animate-bounce duration-25'></div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl text-center font-semibold">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
        <div className="flex flex-col items-center bg-gray-400 rounded w-[120px] h-[60px] ">
          <h2 className="text-xs font-semibold">Total Sales</h2>
          <p className="text-xl">{totalSales}</p>
        </div>
        <div className="flex flex-col items-center bg-gray-400 rounded w-[120px] h-[60px]">
          <h2 className="text-xs font-semibold">Total Customers</h2>
          <p className="text-xl">{totalCustomers}</p>
        </div>
        <div className="flex flex-col items-center bg-gray-400 rounded w-[120px] h-[60px]">
          <h2 className="text-xs font-semibold">Total Reviews</h2>
          <p className="text-xl">{totalReviews}</p>
        </div>
        <div className="flex flex-col items-center bg-gray-400 rounded w-[120px] h-[60px]">
          <h2 className="text-xs font-semibold">Total Website Visitors</h2>
          <p className="text-xl">{totalVisitors}</p>
        </div>
      </div>

      
    </div>
  );
};

export default ProductAnalysis;
