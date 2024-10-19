import ContactUsPage from "@/components/pages/ContactUsPage";
import React from "react";
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

console.log(process.env.GMAIL_PASSWORD);

const mailOptions = {
  from: "info@jnghomes.in",
  to: "info@jnghomes.in",
  subject: "New Enquiry",
  text: "This is a test email sent using Nodemailer.",
};

// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error("Error sending email: ", error);
//   } else {
//     console.log("Email sent: ", info.response);
//   }
// });

function page() {
  return (
    <div className="w-full px-8 md:px-0 md:max-w-[80vw] mx-auto pt-24">
      <ContactUsPage></ContactUsPage>
    </div>
  );
}

export default page;
