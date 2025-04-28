"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { containerBaseStyles, containerHoverStyles } from "./NavBar";

// Style for the restored heading
const activeTextHoverGradientStyles =
  "bg-gradient-to-r from-white to-[#83BBF4] text-transparent bg-clip-text w-fit";

// Add type for grecaptcha window property
declare global {
  interface Window {
    grecaptcha: {
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

const LetsTalk = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    document.head.appendChild(script);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get reCAPTCHA token
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string,
        { action: "submit" }
      );

      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Tailwind classes for styling
  const labelStyles = "block text-sm font-medium mb-1 text-gray-300";
  const inputBaseStyles =
    "block w-full bg-[#0f0f0f] border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white";
  const inputStyles = `${inputBaseStyles} px-3 py-2`;
  const textAreaStyles = `${inputBaseStyles} px-3 py-2 min-h-[120px]`;

  return (
    <div
      id="contact"
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <div className="flex flex-col items-center md:items-center gap-4 mb-8 md:mb-0">
        <h2
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins ${activeTextHoverGradientStyles} mx-auto mb-6 md:mb-12 text-center md:text-left`}
        >
          Let&apos;s Talk!
        </h2>
        <div
          className={`flex flex-row gap-4 relative overflow-hidden p-1 rounded-lg animated-border-base hover:border-[#83BBF4]/75 hover:shadow-[0_0_10px_#83BBF4] transition-all duration-300 w-fit mb-4 md:mb-0`}
        >
          <Link
            href="https://cal.com/pawel-misiura-iminyz"
            className={`${containerBaseStyles} text-gray-400 flex items-center gap-2`}
          >
            <span className={activeTextHoverGradientStyles}>Book a Call</span>
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
          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              className={`cursor-pointer text-sm px-4 py-2 rounded-lg border border-gray-700 transition-all duration-300 group ${containerHoverStyles} text-gray-400`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
          {submitStatus && (
            <p
              className={`text-sm text-center mt-4 ${
                submitStatus.type === "success"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {submitStatus.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LetsTalk;
