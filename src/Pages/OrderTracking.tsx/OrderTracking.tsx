import { BsArrowRepeat } from "react-icons/bs";
import { PiKeyReturn } from "react-icons/pi";
import { Link } from "react-router-dom";
import Emoji from "../../Component/Emoji";

function OrderTracking() {
  const orderHistory = [
    { date: "24 Aug 2021", status: "Order Placed" },
    { date: "25 Aug 2021", status: "Dispatched" },
    { date: "26 Aug 2021", status: "In Transit" },
    { date: "27 Aug 2021", status: "Out for Delivery" },
    { date: "27 Aug 2021", status: "Delivered" },
  ];

  return (
    <div className="flex justify-between items-center gap-3 mx-auto">
      {/* Customer and Seller Info */}
      <div className="w-[300px] ml-[10px] border-r pr-[-900px]">
        <h1 className="text-white text-center text-sm w-[150px] bg-black p-2 h-[40px] border-b pb-3">
          Shopfromteepha
        </h1>
        <div className="text-sm space-y-3 w-[70%] border-b pb-3">
          <div className="py-1">
            <p className="font-bold">Customer Name</p>
            <p>Ibrahim Azeez</p>
          </div>
          <div className="py-1">
            <p className="font-bold">Customer Contact</p>
            <p>0812456332</p>
          </div>
          <div className="py-1">
            <p className="font-bold">Delivery Address</p>
            <p>
              306 North Plaza, South Motera, Nr 4D Square Mail, Sabarmati,
              Ahmedabad
            </p>
          </div>
        </div>
        <div className="text-sm space-y-3 w-[70%]">
          <div className="py-1">
            <p className="font-bold">Seller Name</p>
            <p>Shopfromteepha Nig Ltd</p>
          </div>
          <div className="py-1">
            <p className="font-bold">Seller Support</p>
            <p>0812456332</p>
            <p>Shopfromteepha@yahoo.com</p>
          </div>
        </div>
      </div>

      {/* Order Tracking Details */}
      <div className="w-[1000px]">
        <div className="flex flex-row justify-between border-b pb-6">
          <div>
            <h3 className="text-sm">Tracking NO:</h3>
            <h3 className="text-lg font-bold">#34789654</h3>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-300 mr-[50px]">
              BLUE <span className="text-blue-300">HART</span>
            </h3>
          </div>
        </div>

        {/* Delivery Status */}
        <div className="text-sm space-y-8 w-[100%] border-b pb-3 flex flex-row justify-between">
          <div className="py-1">
            <p>Your order is</p>
            <h1 className="text-5xl font-bold">Delivered</h1>
            <p>as of 27 Aug 2021, Friday</p>
            <p>Last update on 29 Aug 2021, Sunday</p>
          </div>
          <div className="w-[200px] h-[100px] bg-gray-300 rounded-lg mr-[50px] flex flex-col mx-auto p-2">
            <div className="flex items-center gap-2 mb-2 cursor-pointer">
              <PiKeyReturn /> <span className="underline">Return Order</span>
            </div>
            <div className="flex items-center gap-2 mb-2 cursor-pointer">
              <BsArrowRepeat /> <span className="underline">Exchange Order</span>
            </div>
            <p>For Delivery Queries</p>
            <Link to={"/contactus"} className="underline text-blue-500">
              Contact us
            </Link>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="py-3 border-b">
          <p>How was your delivery experience?</p>
          <div className="flex gap-4 mt-2">
            <Emoji emoji="😊" label="Happy" />
            <Emoji emoji="😐" label="Fair" />
            <Emoji emoji="🙂" label="Good" />
            <Emoji emoji="😞" label="Sad" />
          </div>
        </div>

        {/* Order History */}
        <div className="py-3">
          <p>Tracking History</p>
          <ul className="mt-3 space-y-2 text-sm">
            {orderHistory.map((history, index) => (
              <li key={index} className="flex justify-between border p-2 rounded">
                <span>{history.date}</span>
                <span>{history.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderTracking;

