import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - CodeAcademia",
};

export default function Careers() {
  return (
    <main>
      <h1>Careers at CodeAcademia</h1>

      <p>
        Join our mission to make programming education accessible to everyone.
      </p>

      <h2>Why Work With Us?</h2>
      <ul>
        <li>Flexible work environment</li>
        <li>Continuous learning opportunities</li>
        <li>Work on impactful educational products</li>
        <li>Collaborative and innovative culture</li>
      </ul>

      <h2>Current Openings</h2>
      <p>
        We are currently not hiring. Please check back later for future
        opportunities.
      </p>

      <h2>Contact</h2>
      <p>Email: careers@codeacadmia.com</p>
    </main>
  );
}
