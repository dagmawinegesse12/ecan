// src/pages/donate.tsx
import { useState, FormEvent } from "react";
import type { NextPage } from "next";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Donate: NextPage = () => {
  const [form, setForm] = useState({
    name: "",
    anonymous: false,
    phone: "",
    amount: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // require either a name or anonymous
    if (!form.anonymous && !form.name.trim()) {
      alert("Please enter your name or check Anonymous.");
      return;
    }
    if (!form.amount || Number(form.amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* Banner */}
      <div className="bg-green-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">Donate</h1>
          <p className="mt-2 text-lg">
            Your gift helps ECAN continue our mission. Thank you for
            your support!
          </p>
        </div>
      </div>

      {/* Form & Payment */}
      <main className="flex-1 bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold">Your Information</h2>

            <div>
              <label className="block mb-1 font-medium">
                Full Name *
              </label>
              <input
                name="name"
                type="text"
                disabled={form.anonymous}
                value={form.name}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 disabled:bg-gray-100"
                placeholder="Your full name"
              />
              <p className="text-sm text-red-600 mt-1">
                {/** inline hint */}
                {(!form.anonymous && !form.name.trim()) &&
                  "Type in your name or check Anonymous below"}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="anonymous"
                name="anonymous"
                type="checkbox"
                checked={form.anonymous}
                onChange={handleChange}
                className="h-5 w-5 text-green-600"
              />
              <label
                htmlFor="anonymous"
                className="font-medium"
              >
                Donate anonymously
              </label>
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Phone Number{" "}
                <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Donation Amount (USD) *
              </label>
              <input
                name="amount"
                type="number"
                required
                value={form.amount}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                placeholder="e.g. 50"
                min="1"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Continue to Payment
              </button>
            </div>
          </form>

          {submitted && (
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Donation Amount: ${form.amount}
              </h3>
              <PayPalScriptProvider
                options={{
                  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                  currency: "USD",
                }}
              >
                <PayPalButtons
                  style={{
                    layout: "vertical",
                    color: "blue",
                    shape: "pill",
                    label: "pay",
                  }}
                  createOrder={(data, actions) =>
                    actions.order.create({
                      intent: "CAPTURE",
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            value: form.amount,
                          },
                        },
                      ],
                    })
                  }
                  onApprove={async (_, actions) => {
                    const order = await actions.order?.capture();
                    alert("Thank you for your donation!");
                  }}
                  onError={(err) => {
                    console.error(err);
                    alert("Payment failed. Please try again.");
                  }}
                />
              </PayPalScriptProvider>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
