import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - CodeAcademia",
};

export default function ContactUs() {
  return (
    <main>
      <h1>Contact Us</h1>

      <p>
        We would love to hear from you. If you have questions, suggestions,
        feedback, or collaboration opportunities, feel free to contact us.
      </p>

      <h2>Get in Touch</h2>

      <p>
        <strong>Website:</strong> https://codeacadmia.com
      </p>

      <p>
        <strong>Email:</strong> support@codeacadmia.com
      </p>

      <p>
        <strong>Business Inquiries:</strong> business@codeacadmia.com
      </p>

      <h2>Support</h2>

      <p>
        If you find any errors in our tutorials or need help understanding a
        topic, please contact our support team.
      </p>

      <p>We aim to respond to all inquiries within 24–48 hours.</p>
    </main>
  );
}
