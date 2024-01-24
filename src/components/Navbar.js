import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { Menu } from "@headlessui/react";
import NavBarMd from "./NavBarMd";
function Navbar() {
  return (
    <div className="bg-black text-white flex justify-around py-3">
      <div>
        <Link to="/">
          <p className="hover:text-yellow-500">Home</p>
        </Link>
      </div>
      <div className="mt-1 cursor-pointer font-bold text-xl md:hidden">
        <Menu>
          <Menu.Button>
            <FaBars />
          </Menu.Button>
          <Menu.Items
            className="absolute bg-orange-400 z-10
           top-14 flex flex-col space-y-1 py-5 justify-center items-center left-0 w-full mx-auto"
          >
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className="hover:bg-orange-300 py-1 w-full flex justify-center"
                >
                  Home
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/about-me"
                  className="hover:bg-orange-300 py-1 w-full flex justify-center"
                >
                  about me
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/my-project"
                  className="hover:bg-orange-300 py-1 w-full flex justify-center"
                >
                  my project
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/services"
                  className="hover:bg-orange-300 w-full py-1 flex justify-center"
                >
                  services
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
      <div className="hidden md:block">
        <NavBarMd />
      </div>
    </div>
  );
}

export default Navbar;
