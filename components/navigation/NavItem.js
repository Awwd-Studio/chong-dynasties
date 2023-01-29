import Link from "next/link";

export default function NavItem({ text, href, active }) {
  return (
    <Link href={href} legacyBehavior>
      <a className={`nav-item ${active ? "active" : ""}`}>{text}</a>
    </Link>
  );
}
