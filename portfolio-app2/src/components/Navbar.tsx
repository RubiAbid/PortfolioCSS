"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

// Define the type for navLinks
interface NavLinkType {
  title: string;
  path: string;
}

const navLinks: NavLinkType[] = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href={"/"} className="logo">
          LOGO
        </Link>
        {/* Mobile menu toggle */}
        <div className="mobile-menu">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="menu-toggle-button"
            >
              <Bars3Icon className="menu-icon" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="menu-toggle-button"
            >
              <XMarkIcon className="menu-icon" />
            </button>
          )}
        </div>
        {/* Desktop menu */}
        <div className="menu">
          <ul className="menu-list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
