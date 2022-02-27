import Link from "next/link";
import React from "react";
import navStyles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={navStyles.navDiv}>
      <nav className={navStyles.nav}>
        <ul className={navStyles.navUl}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/animations">Animations</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/map">Map</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
