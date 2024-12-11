import React from "react";
import { PaystackButton } from "react-paystack";

interface PaystackPaymentProps {
  email: string;
  amount: number; // Amount in kobo (1 Naira = 100 kobo)
  publicKey: string;
}

const Paystack: React.FC<PaystackPaymentProps> = ({ email, amount, publicKey }) => {
  const onSuccess = (reference: any) => {
    console.log("Payment successful", reference);
    alert("Payment Successful!");
  };

  const onClose = () => {
    console.log("Payment dialog closed");
    alert("Payment dialog closed");
  };

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay Now",
    onSuccess,
    onClose,
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-bold mb-4">Complete Your Payment</h2>
      <PaystackButton
        {...componentProps}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      />
    </div>
  );
};

export default Paystack;
