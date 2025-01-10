import { useState } from "react";

// Reusable Input Component
function TextInput({ name, placeholder, value, onChange }: { name: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="w-[500px] p-2 border rounded"
      value={value}
      onChange={onChange}
    />
  );
}

// Reusable TextArea Component
function TextArea({ name, placeholder, value, onChange }: { name: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="w-[500px] p-2 border rounded gap-4 grid grid-cols-2"
      value={value}
      onChange={onChange}
    ></textarea>
  );
}

// Emoji Component
function Emoji({ emoji, label, isSelected, onClick }: { emoji: string; label: string; isSelected: boolean; onClick: () => void }) {
  return (
    <div
      className={`cursor-pointer p-2 rounded-full ${isSelected ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
      onClick={onClick}
      aria-label={label}
    >
      {emoji}
    </div>
  );
}

function OrderTrackingForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerContact: "",
    deliveryAddress: "",
    sellerName: "",
    sellerSupport: "",
    feedback: "",
    trackingNumber: "",
    orderHistory: [{ date: "", time: "", status: "" }],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderHistoryChange = (index: number, field: string, value: string) => {
    const updatedOrderHistory = formData.orderHistory.map((history, i) =>
      i === index ? { ...history, [field]: value } : history
    );
    setFormData((prev) => ({ ...prev, orderHistory: updatedOrderHistory }));
  };

  const addOrderHistoryRow = () => {
    setFormData((prev) => ({
      ...prev,
      orderHistory: [...prev.orderHistory, { date: "", time: "", status: "" }],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    // Submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
      <h1 className="text-xl font-bold">Order Tracking Form</h1>

      {/* Customer Information */}
      <section>
        <h2 className="font-semibold">Customer Information</h2>
        <div className="space-y-4 flex flex-col ">
          <TextInput name="customerName" placeholder="Customer Name" value={formData.customerName} onChange={handleInputChange} />
          <TextInput name="customerContact" placeholder="Customer Contact" value={formData.customerContact} onChange={handleInputChange} />
          <TextArea name="deliveryAddress" placeholder="Delivery Address" value={formData.deliveryAddress} onChange={handleInputChange} />
        </div>
      </section>

      {/* Seller Information */}
      <section>
        <h2 className="font-semibold">Seller Information</h2>
        <div className="space-y-3 flex flex-col">
          <TextInput name="sellerName" placeholder="Seller Name" value={formData.sellerName} onChange={handleInputChange} />
          <TextArea name="sellerSupport" placeholder="Seller Support Details" value={formData.sellerSupport} onChange={handleInputChange} />
        </div>
      </section>

      {/* Delivery Feedback */}
      <section>
        <h2 className="font-semibold">Delivery Feedback</h2>
        <div className="flex gap-4 mt-2">
          {["😊", "😐", "🙂", "😞"].map((emoji) => (
            <Emoji
              key={emoji}
              emoji={emoji}
              label={emoji}
              isSelected={formData.feedback === emoji}
              onClick={() => setFormData((prev) => ({ ...prev, feedback: emoji }))}
            />
          ))}
        </div>
      </section>

      {/* Tracking Details */}
      <section>
        <h2 className="font-semibold">Tracking Details</h2>
        <TextInput
          name="trackingNumber"
          placeholder="Tracking Number"
          value={formData.trackingNumber}
          onChange={handleInputChange}
        />
      </section>

      {/* Order History */}
      <section>
        <h2 className="font-semibold">Order History</h2>
        {formData.orderHistory.map((history, index) => (
          <div key={index} className="flex gap-3 mb-3">
            <input
              type="date"
              value={history.date}
              onChange={(e) => handleOrderHistoryChange(index, "date", e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="time"
              value={history.time}
              onChange={(e) => handleOrderHistoryChange(index, "time", e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Status"
              value={history.status}
              onChange={(e) => handleOrderHistoryChange(index, "status", e.target.value)}
              className="p-2 border rounded "
            />
          </div>
        ))}
        <button type="button" onClick={addOrderHistoryRow} className="p-2 bg-blue-500 text-white rounded">
          Add History
        </button>
      </section>

      {/* Submit Button */}
      <button type="submit" className="w-[150px] p-3 bg-green-500 text-white rounded">
        Submit
      </button>
    </form>
  );
}

export default OrderTrackingForm;
