import Link from "next/link";
import React, { useState } from "react";
import navStyles from "../styles/Navbar.module.css";
import { Input, Menu } from "semantic-ui-react";
//
function Navbar() {
  //
  const [activeItem, setActiveItem] = useState(null);
  //
  return (
    <nav className={navStyles.nav}>
      <Menu secondary>
        <Link href="/" passHref>
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={(e) => {
              setActiveItem(e.target.name);
            }}
          >
            Home
          </Menu.Item>
        </Link>
        <Link href="/products" passHref>
          <Menu.Item
            name="Products"
            active={activeItem === "Products"}
            onClick={(e) => {
              setActiveItem(e.target.name);
            }}
          >
            Products
          </Menu.Item>
        </Link>
        <Link href="/map" passHref>
          <Menu.Item
            name="Map"
            active={activeItem === "Map"}
            onClick={(e) => {
              setActiveItem(e.target.name);
            }}
          >
            Map
          </Menu.Item>
        </Link>
        <Link href="/animations" passHref>
          <Menu.Item
            name="Animations"
            active={activeItem === "Animations"}
            onClick={(e) => {
              setActiveItem(e.target.name);
            }}
          >
            Animations
          </Menu.Item>
        </Link>
        <Link href="/shop" passHref>
          <Menu.Item
            name="shop"
            active={activeItem === "shop"}
            onClick={(e) => {
              setActiveItem(e.target.name);
            }}
          >
            Shop
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input
              icon="search"
              color="rgb(252, 77, 158)"
              placeholder="Search Products..."
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </nav>
  );
}

export default Navbar;
