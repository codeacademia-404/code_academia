import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <div className="logo-icon">&#123;&#125;</div>
        CodeAcademia
      </Link>

      <ul className="nav-links">
        <li>
          <Link href="/learn/html-learn">Tutorials</Link>
        </li>
        <li>
          <Link href="#">References</Link>
        </li>
        <li>
          <Link href="/editor">Exercises</Link>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">Quizzes</Link>
        </li>
      </ul>

      <div className="nav-right">
        <Link href="#" className="btn btn-ghost">
          Log in
        </Link>
        <Link href="#" className="btn btn-primary">
          Sign up free
        </Link>
      </div>
    </nav>
  );
}
