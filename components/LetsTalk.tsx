"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  containerBaseStyles,
  containerHoverStyles,
  textHoverGradientStyles,
} from "./NavBar";

// Style for the restored heading
const activeTextHoverGradientStyles =
  "bg-gradient-to-r from-white to-[#83BBF4] text-transparent bg-clip-text w-fit";

const LetsTalk = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // --- Placeholder for Resend API Call ---
    // This is where you would fetch your API route that uses Resend
    /*
    try {
      const response = await fetch('/api/send-email', { // Example API route path
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' }); // Clear form
      } else {
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('An error occurred while sending the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
    */
    // --- End Placeholder ---

    // For now, just log the data and simulate submission
    console.log("Form Data (Simulated Submission):", formData);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    setSubmitMessage(
      "Form submitted successfully (simulated). Check browser console for data."
    );
    setIsSubmitting(false);
    setFormData({ name: "", phone: "", email: "", message: "" }); // Clear form after simulated submission
  };

  // Tailwind classes for styling
  const labelStyles = "block text-sm font-medium mb-1 text-gray-300";
  const inputBaseStyles =
    "block w-full bg-[#0f0f0f] border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white";
  const inputStyles = `${inputBaseStyles} px-3 py-2`;
  const textAreaStyles = `${inputBaseStyles} px-3 py-2 min-h-[120px]`;
  const buttonStyles = `inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed`;

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-8">
      <div className="flex flex-col items-center gap-4">
        <h2
          className={`text-8xl font-poppins ${activeTextHoverGradientStyles} mx-auto mb-12`}
        >
          Let's Talk!
        </h2>
        <div
          className={`flex flex-row gap-4 relative overflow-hidden p-1 rounded-lg animated-border-base hover:border-[#83BBF4]/75 hover:shadow-[0_0_10px_#83BBF4] transition-all duration-300 w-fit`}
        >
          <Link
            href="/contact"
            className={`${containerBaseStyles} text-gray-400 flex items-center gap-2`}
          >
            <span className={textHoverGradientStyles}>Book a Call</span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className={labelStyles}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputStyles}
              placeholder="Your Name"
              autoComplete="name"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className={labelStyles}>
                Phone Number{" "}
                <span className="text-xs text-gray-500">(Optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputStyles}
                placeholder="(123) 456-7890"
                autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelStyles}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputStyles}
                placeholder="your.email@example.com"
                autoComplete="email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className={labelStyles}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className={textAreaStyles}
              placeholder="Tell us about your project or inquiry..."
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className={`cursor-pointer text-sm px-4 py-2 rounded-lg border border-gray-700 transition-all duration-300 group ${containerHoverStyles} text-gray-400`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
          {submitMessage && (
            <p
              className={`text-sm text-center mt-4 ${
                submitMessage.includes("successfully")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </form>
      </div>
      <p className="mt-6 text-xs text-gray-500 text-center">
        Note: Email sending requires backend setup with Resend.
      </p>
    </div>
  );
};

export default LetsTalk;
