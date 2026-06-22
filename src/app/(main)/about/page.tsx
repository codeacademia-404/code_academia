import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CodeAcademia",
};

export default function About() {
  return (
    <main>
      <h1>About CodeAcademia</h1>

      <p>
        Welcome to CodeAcademia, a modern online learning platform designed to
        help students, developers, and technology enthusiasts master programming
        and computer science concepts.
      </p>

      <p>
        Our mission is to provide high-quality, easy-to-understand, and
        completely free educational resources for learners at every level.
        Whether you&apos;re a beginner writing your first line of code or an
        experienced developer exploring advanced technologies, CodeAcademia is
        here to support your learning journey.
      </p>

      <h2>What We Offer</h2>

      <ul>
        <li>
          Programming Tutorials (HTML, CSS, JavaScript, Python, Java, C, C++)
        </li>
        <li>Web Development Guides</li>
        <li>Database Tutorials</li>
        <li>Data Structures & Algorithms</li>
        <li>Interview Preparation Materials</li>
        <li>Projects and Practical Examples</li>
        <li>Technology News and Updates</li>
      </ul>

      <h2>Our Vision</h2>

      <p>
        To become one of the most trusted online learning platforms by making
        technology education accessible, practical, and engaging for everyone.
      </p>

      <h2>Why Choose CodeAcademia?</h2>

      <ul>
        <li>Beginner-Friendly Tutorials</li>
        <li>Step-by-Step Learning Path</li>
        <li>Practical Examples and Projects</li>
        <li>Responsive Learning Experience</li>
        <li>Regularly Updated Content</li>
      </ul>

      <p>
        Start learning today and build the skills needed for the future with
        CodeAcademia.
      </p>
    </main>
  );
}
