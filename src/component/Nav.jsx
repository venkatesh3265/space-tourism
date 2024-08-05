import React, { useState } from "react";
import Logo from "../assets/home/logo.svg";
import hamBurger from "../assets/shared/icon-hamburger.svg";
import hamBurgerclose from "../assets/shared/icon-close.svg";
import Drawer from "react-modern-drawer";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <header className=" relative z-2 w-full  lg:py-7  font-Barlow_Condensed  text-white_custom lg:text-2xl ">
        <nav className="flex items-center justify-center ">
          <a href="/space-tourism" className="flex-1 p-6">
            <img
              className={`logo-image`}
              src={Logo}
              alt="Logo"
              width={48}
              height={48}
            />
            <span className="z-5 logo-span hidden"></span>
          </a>
          <ul className="hidden lg:flex py-0 px-0  lg:w-6/12  sm:w-8/12 lg:mx-auto backdrop-blur bg-white/10 justify-center rounded ">
            {navLinks.map((items) => (
              <NavLink
                key={items.label}
                className={({ isActive }) => (isActive ? "" : "")}
                to={items.path}
              >
                {({ isActive }) => (
                  <li
                    className={`px-8 py-6 m-0 ${
                      isActive ? "custom-border " : ""
                    }`}
                  >
                    {items.label}
                  </li>
                )}
              </NavLink>
            ))}
          </ul>
          <div class="lg:hidden">
            <button class="navbar-burger flex items-center text-white_custom p-3 cursor-pointer">
              <img
                src={hamBurger}
                alt="hamBurger"
                width={24}
                height
                onClick={toggleDrawer}
              />
            </button>
          </div>
        </nav>
      </header>
      {isOpen ? (
        <>
          <ul className="z-20 absolute top-0 right-0 w-8/12 backdrop-blur bg-white_custom/10 text-white_custom min-h-screen h-full">
            <button class="navbar-burger flex items-center text-white_custom p-3 cursor-pointer float-end">
              <img
                src={hamBurgerclose}
                alt="hamBurger"
                width={24}
                height
                onClick={toggleDrawer}
              />
            </button>

            {navLinks.map((items) => (
              <NavLink
                key={items.label}
                className={({ isActive }) => (isActive ? "" : "")}
                to={items.path}
              >
                {({ isActive }) => (
                  <li
                  onClick={()=>setIsOpen(false)}
                    className={`px-8 py-6 m-7 lg:m-0  ${
                      isActive ? "custom-border " : ""
                    }`}
                  >
                    {items.label}
                  </li>
                )}
              </NavLink>
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Nav;
