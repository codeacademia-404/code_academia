import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - CodeAcademia",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <h1>Privacy Policy</h1>

      <p>Last Updated: June 2026</p>

      <p>
        At CodeAcademia, we respect your privacy and are committed to protecting
        your personal information.
      </p>

      <h2>Information We Collect</h2>

      <ul>
        <li>Name (if voluntarily provided)</li>
        <li>Email Address (for contact forms or newsletters)</li>
        <li>Browser and Device Information</li>
        <li>Usage Analytics Data</li>
      </ul>

      <h2>How We Use Your Information</h2>

      <ul>
        <li>Improve our website and learning experience</li>
        <li>Respond to user inquiries</li>
        <li>Analyze website performance</li>
        <li>Provide educational content and updates</li>
      </ul>

      <h2>Cookies</h2>

      <p>
        CodeAcademia may use cookies to improve website functionality and user
        experience. You can disable cookies through your browser settings.
      </p>

      <h2>Third-Party Services</h2>

      <p>
        We may use trusted third-party services such as analytics providers and
        advertising networks that may collect anonymous usage data.
      </p>

      <h2>Data Security</h2>

      <p>
        We implement reasonable security measures to protect your information
        from unauthorized access or disclosure.
      </p>

      <h2>Changes to This Policy</h2>

      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated revision date.
      </p>

      <h2>Contact Us</h2>

      <p>
        If you have any questions regarding this Privacy Policy, please contact
        us at: support@codeacadmia.com
      </p>
    </main>
  );
}
