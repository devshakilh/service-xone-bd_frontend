"use client";
import { useCreateFeedbackMutation } from "@/redux/api/feedbackApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/ui/navHader";
import Footer from "@/components/ui/footer";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  comment: string;
  message: string;
}

const FeedbackForm = () => {
  const [createFeedback] = useCreateFeedbackMutation();
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      comment: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await createFeedback(data).unwrap();
      if (res?.success) {
        setSubmitMessage({ type: "success", text: "Thank you for your feedback!" });
        reset();
        setTimeout(() => setSubmitMessage(null), 3000);
      } else {
        setSubmitMessage({ type: "error", text: "Something went wrong." });
      }
    } catch (error) {
      setSubmitMessage({ type: "error", text: "Failed to submit feedback. Please try again." });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-grow py-12 px-4"
      >
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 p-8 flex items-center justify-center bg-gradient-to-br from-[#007BFF] to-blue-400">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  className="rounded-lg"
                  alt="Feedback illustration"
                  src="https://res.cloudinary.com/dhvuyehnq/image/upload/v1697723185/kowvt3prcl15acim8hn0.gif"
                  width={400}
                  height={300}
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Form Section */}
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-[#007BFF] mb-6">We Value Your Feedback</h2>
              {submitMessage && (
                <div
                  className={`mb-4 p-3 rounded-lg text-white ${
                    submitMessage.type === "success" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters" } })}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
                    })}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                    Comments
                  </label>
                  <textarea
                    id="comment"
                    placeholder="Your comments"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none resize-none ${
                      errors.comment ? "border-red-500" : "border-gray-300"
                    }`}
                    rows={3}
                    {...register("comment", { required: "Comments are required", minLength: { value: 10, message: "Comments must be at least 10 characters" } })}
                  />
                  {errors.comment && <p className="mt-1 text-sm text-red-500">{errors.comment.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Suggestions
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your suggestions"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    rows={5}
                    {...register("message", { required: "Suggestions are required", minLength: { value: 10, message: "Suggestions must be at least 10 characters" } })}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#007BFF] text-white py-3 rounded-xl hover:bg-blue-600 transition-colors"
                >
                  Send Feedback
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
};

export default FeedbackForm;