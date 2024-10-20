"use client";
import { welcomePageProjects } from "@/utils/constants";
import React, { useState } from "react";
import Heading from "../shared/Heading";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    phoneNumber: "",
    query: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, project, phoneNumber, query } = formData;

    if (!name || !email || !project || !phoneNumber) {
      setError("All fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, project, phoneNumber, query }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Email sent:", result);
        setFormData({
          name: "",
          email: "",
          project: "",
          phoneNumber: "",
          query: "",
        });
        setError(""); // Clear error on successful submission
      } else {
        setError(result.message || "Failed to send email.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      setError("An error occurred while sending the email.");
    }
  };

  return (
    <div className="w-full px-8 md:px-0 md:max-w-[80vw] mx-auto pt-12">
      <Heading text="Contact Us"></Heading>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mt-12 max-w-sm mx-auto"
      >
        <label
          htmlFor="Name"
          className="relative block rounded-md border border-primaryText shadow-sm focus-within:border-primaryAccent focus-within:ring-2 focus-within:ring-primaryAccent"
        >
          <input
            type="text"
            id="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
            placeholder="Name"
          />
          <span className="bg-background pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-primaryText transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Name
          </span>
        </label>

        <label
          htmlFor="Email"
          className="relative block rounded-md border border-primaryText shadow-sm focus-within:border-primaryAccent focus-within:ring-2 focus-within:ring-primaryAccent"
        >
          <input
            type="email"
            id="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
            placeholder="Email"
          />
          <span className="bg-background pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-primaryText transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Email
          </span>
        </label>

        <label
          htmlFor="Phone Number"
          className="relative block rounded-md border border-primaryText shadow-sm focus-within:border-primaryAccent focus-within:ring-2 focus-within:ring-primaryAccent"
        >
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
            placeholder="Email"
          />
          <span className="bg-background pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-primaryText transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Phone Number
          </span>
        </label>

        <label
          htmlFor="Project"
          className="relative block rounded-md border border-primaryText shadow-sm focus-within:border-primaryAccent focus-within:ring-2 focus-within:ring-primaryAccent"
        >
          <select
            id="Project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="block w-full p-2 border-none focus:outline-none text-primaryText bg-background rounded-md"
          >
            <option value="" disabled className="text-primaryText">
              Select a project
            </option>
            {welcomePageProjects.map((project) => (
              <option
                key={project.sl}
                value={project.url}
                disabled={project.bookingStatus !== "Open"}
                className={
                  project.bookingStatus !== "Open"
                    ? "text-gray-400"
                    : "text-primaryText"
                }
              >
                {project.title} - {project.bookingStatus}
              </option>
            ))}
          </select>
        </label>

        <label
          htmlFor="Query"
          className="relative block rounded-md border border-primaryText shadow-sm focus-within:border-primaryAccent focus-within:ring-2 focus-within:ring-primaryAccent"
        >
          <input
            type="text"
            id="Query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            className="w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
            placeholder="Name"
          />
          <span className="bg-background pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-primaryText transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Query
          </span>
        </label>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-primaryAccent text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUsPage;
