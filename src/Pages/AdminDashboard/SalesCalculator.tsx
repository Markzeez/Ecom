import React, { useState } from 'react';
import useSalesStore from '../../Store/Store';

const SalesCalculator: React.FC = () => {
  const { addSale, getSalesByPeriod } = useSalesStore();
  const [amount, setAmount] = useState<number>(0);

  const handleAddSale = () => {
    addSale({ amount, date: new Date().toISOString() });
    setAmount(0);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-md">
      <h1 className="text-xl font-bold mb-4">Sales Calculator</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Sale Amount</label>
        <input
          type="number"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>

      <button
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        onClick={handleAddSale}
      >
        Add Sale
      </button>

      <div className="mt-6">
        <h2 className="text-lg font-medium mb-2">Sales Summary</h2>
        <p className="text-gray-700">Today's Sales: ${getSalesByPeriod('day')}</p>
        <p className="text-gray-700">Weekly Sales: ${getSalesByPeriod('week')}</p>
        <p className="text-gray-700">Monthly Sales: ${getSalesByPeriod('month')}</p>
      </div>
    </div>
  );
};

export default SalesCalculator;
