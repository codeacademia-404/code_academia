import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - CodeAcademia",
};

export default function Terms() {
  return (
    <main>
      <h1>Terms & Conditions</h1>

      <p>
        By accessing and using CodeAcademia, you agree to comply with these terms
        and conditions.
      </p>

      <h2>Use of Content</h2>
      <p>All tutorials and content are provided for educational purposes only.</p>

      <h2>User Responsibilities</h2>
      <p>
        Users must not misuse the website or attempt unauthorized access to our
        systems.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, logos, and materials on CodeAcademia are protected by
        applicable copyright laws.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        CodeAcademia is not responsible for any damages resulting from the use
        of our content.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We may update these terms at any time. Continued use of the website
        constitutes acceptance of any changes.
      </p>

      <h2>Contact Us</h2>
      <p>Email: support@codeacadmia.com</p>
    </main>
  );
}
