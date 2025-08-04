// src/pages/register.tsx
import { useState, FormEvent } from "react";
import { NextPage } from "next";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MEMBERSHIP_FEE = 60; // USD

const Register: NextPage = () => {
    const [form, setForm] = useState({
        name: "",
        birthYear: "",
        gender: "",
        phone: "",
        email: "",
        spouseName: "",
        spouseBirthYear: "",
        spousePhone: "",
        spouseEmail: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) =>
        setForm((f) => ({
            ...f,
            [e.target.name]: e.target.value,
        }));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: send form data to your backend if desired
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Nav />

            {/* Banner */}
            <div className="bg-green-600 py-12">
                <div className="max-w-4xl mx-auto text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        Membership Registration
                    </h1>
                    <p className="mt-2 text-lg">
                        Fill out your details below and complete payment to join ECAN.
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
                        {/* … form fields identical to what you already have … */}<div>
                            <label className="block mb-1 font-medium">Full Name *</label>
                            <input
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                                placeholder="Your full name"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Birth Year *</label>
                            <input
                                name="birthYear"
                                type="number"
                                required
                                value={form.birthYear}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                                placeholder="e.g. 1985"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Gender *</label>
                            <select
                                name="gender"
                                required
                                value={form.gender}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                            >
                                <option value="">Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Phone Number *</label>
                            <input
                                name="phone"
                                type="tel"
                                required
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                                placeholder="(123) 456-7890"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Email Address *</label>
                            <input
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                                placeholder="you@example.com"
                            />
                        </div>

                        <h2 className="text-2xl font-semibold mt-8">Spouse’s Information (optional)</h2>
                        <div>
                            <label className="block mb-1 font-medium">Full Name</label>
                            <input
                                name="spouseName"
                                type="text"
                                value={form.spouseName}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                                placeholder="Spouse full name"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Birth Year</label>
                            <input
                                name="spouseBirthYear"
                                type="number"
                                value={form.spouseBirthYear}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                                placeholder="e.g. 1988"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Phone Number</label>
                            <input
                                name="spousePhone"
                                type="tel"
                                value={form.spousePhone}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                                placeholder="(123) 456-7890"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Email Address</label>
                            <input
                                name="spouseEmail"
                                type="email"
                                value={form.spouseEmail}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                                placeholder="spouse@example.com"
                            />
                        </div>            <div className="text-center">
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                            >
                                Continue to Payment
                            </button>
                        </div>
                    </form>

                    {submitted && (
                        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 text-center">
                            <h3 className="text-2xl font-semibold mb-4">
                                Membership Fee: ${MEMBERSHIP_FEE}
                            </h3>

                            <PayPalScriptProvider
                                options={{
                                    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                                    currency: "USD",
                                }}
                            >
                                <PayPalButtons
  style={{ layout: "vertical", color: "blue", shape: "pill", label: "pay" }}
  createOrder={(data, actions) =>
    actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: MEMBERSHIP_FEE.toString(),
          },
        },
      ],
    })
  }
  onApprove={async (data, actions) => {
    await actions.order?.capture();
    alert("Payment complete—thank you!");
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

export default Register;
