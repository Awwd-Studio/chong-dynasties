import styles from "./styles.module.scss";
import { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";

const menuList = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [navActive, setNavActive] = useState(false);
  const [activeIDX] = useState(-1);

  return (
    <div className={styles.navbar}>
      <Link className={styles.logoWrap} href={"/"}>
        <h1 className={styles.logo}>Logo</h1>
      </Link>
      <nav className={styles.navMenu}>
        <li className={styles.navLink}>
          <NavItem text="Home" href="/" active={activeIDX === 0} />
        </li>
        <li className={styles.navLink}>
          <NavItem text="About" href="/about" active={activeIDX === 1} />
        </li>
        <li className={styles.navLink}>
          <NavItem text="Breeding" href="/breeding" active={activeIDX === 2} />
        </li>
      </nav>
      <div className={styles.toggle}>
        <div>span</div>
        <div>span</div>
        <div>span</div>
      </div>
    </div>
  );
}
