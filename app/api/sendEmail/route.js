import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, project, phoneNumber, query } = await req.json();

    if (!name || !email || !project || !phoneNumber) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

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

    const mailOptions = {
      from: "info@jnghomes.in",
      to: "info@jnghomes.in",
      subject: `New Enquiry for ${project}`,
      text: `New Enquiry for ${project} by ${name}. Email: ${email}, Phone Number: ${phoneNumber}. Query: ${query}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
    });
  }
}
