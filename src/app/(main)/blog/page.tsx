import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - CodeAcademia",
};

export default function Blog() {
  return (
    <main>
      <h1>CodeAcademia Blog</h1>

      <p>
        Welcome to our blog where we share programming tutorials, development
        tips, technology news, and career guidance.
      </p>

      <h2>Latest Articles</h2>

      <ul>
        <li>Getting Started with HTML and CSS</li>
        <li>JavaScript for Beginners</li>
        <li>Introduction to React</li>
        <li>Python Programming Basics</li>
        <li>Top Web Development Trends</li>
      </ul>

      <p>More articles coming soon.</p>
    </main>
  );
}
