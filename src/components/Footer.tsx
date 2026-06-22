import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <div className="logo-icon">&#123;&#125;</div>
              CodeAcademia
            </Link>
            <p>
              Free coding tutorials for everyone. Learn at your own pace, in your
              own browser.
            </p>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Tutorials</div>
            <ul>
              <li>
                <Link href="/learn/html-learn">HTML</Link>
              </li>
              <li>
                <Link href="#">CSS</Link>
              </li>
              <li>
                <Link href="#">JavaScript</Link>
              </li>
              <li>
                <Link href="#">Python</Link>
              </li>
              <li>
                <Link href="#">SQL</Link>
              </li>
              <li>
                <Link href="#">React</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Resources</div>
            <ul>
              <li>
                <Link href="#">References</Link>
              </li>
              <li>
                <Link href="#">Cheat Sheets</Link>
              </li>
              <li>
                <Link href="/editor">Exercises</Link>
              </li>
              <li>
                <Link href="#">Quizzes</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact_us">Contact</Link>
              </li>
              <li>
                <Link href="/privacy_policy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 CodeAcademia. All rights reserved.</span>
          <span>Made with ❤️ for learners everywhere</span>
        </div>
      </div>
    </footer>
  );
}
