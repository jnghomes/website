"use client";
import { welcomePageProjects } from "@/utils/constants";
import React, { useState } from "react";
import Heading from "../shared/Heading";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@jnghomes.in",
    pass: process.env.GMAIL_PASSWORD,
  },
});
console.log(JSON.stringify(process.env));

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, project, phoneNumber } = formData;

    if (!name || !email || !project || !phoneNumber) {
      setError("All fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    const mailOptions = {
      from: "info@jnghomes.in",
      to: "info@jnghomes.in",
      subject: `New Enquiry for ${project}`,
      text: `New Enquiry for ${project} by ${name}. Email: ${email}, Phone Number: ${phoneNumber}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
    console.log("Form submitted with data:", formData);
    setFormData({
      name: "",
      email: "",
      project: "",
    });
    setError(""); // Clear error on successful submission
  };

  return (
    <div className="w-full px-8 md:px-0 md:max-w-[80vw] mx-auto pt-12">
      <Heading text="Contact Us"></Heading>
      <form onSubmit={handleSubmit} className="space-y-4 mt-12 max-w-sm mx-auto">
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
          htmlFor="Email"
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
                className={project.bookingStatus !== "Open" ? "text-gray-400" : "text-primaryText"}
              >
                {project.title} - {project.bookingStatus}
              </option>
            ))}
          </select>
        </label>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" className="bg-primaryAccent text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUsPage;
