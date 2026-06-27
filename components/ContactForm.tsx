"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  propertyOfInterest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    propertyOfInterest: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Pre-fill from URL query param: /contact?property=Property%20Title
  useEffect(() => {
    const property = searchParams.get("property");
    if (property) {
      setFormData((prev) => ({ ...prev, propertyOfInterest: property }));
    }
  }, [searchParams]);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Your name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Your email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Please include a message.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // FUTURE UPGRADE: Replace this mock delay with a real email service.
    // Options include:
    //   - Resend: https://resend.com
    //   - SendGrid: https://sendgrid.com
    //   - Formspree: https://formspree.io
    //   - Next.js API route + Nodemailer
    //
    // Example POST to an API route:
    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    //
    // Email subject: `New property inquiry from ${formData.name}`
    // Email body should include: name, email, phone, propertyOfInterest, message

    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
        <CheckCircle size={40} className="text-emerald-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-stone-800 mb-2">Message Sent</h3>
        <p className="text-stone-600">
          Thanks for reaching out. Shannon will get back to you soon.
        </p>
      </div>
    );
  }

  const fieldClass = (name: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border text-stone-800 text-sm outline-none transition-colors ${
      errors[name]
        ? "border-red-300 bg-red-50 focus:border-red-400"
        : "border-stone-200 bg-white focus:border-emerald-400"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          autoComplete="name"
          className={fieldClass("name")}
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          className={fieldClass("email")}
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1.5">
          Phone <span className="text-stone-400 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(306) 000-0000"
          autoComplete="tel"
          className={fieldClass("phone")}
        />
      </div>

      {/* Property of Interest */}
      <div>
        <label
          htmlFor="propertyOfInterest"
          className="block text-sm font-medium text-stone-700 mb-1.5"
        >
          Property of Interest{" "}
          <span className="text-stone-400 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          id="propertyOfInterest"
          name="propertyOfInterest"
          value={formData.propertyOfInterest}
          onChange={handleChange}
          placeholder="Which property are you asking about?"
          className={fieldClass("propertyOfInterest")}
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-stone-700 mb-1.5"
        >
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Ask about a property, location, lot details, or development potential..."
          className={fieldClass("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
