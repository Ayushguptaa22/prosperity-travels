import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 navBar"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center logoClass p-4 text-white">
        <Link href="/">
          <img src="/img/logo.png" />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 ">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4">
            <Link href="/events">Events</Link>
          </li>
          <li className="p-4 submenuBar">
            <Link href="/services  ">Services</Link>
            <div className="sub-menu mega-menu mega-menu-column-4">
              <div className="list-item">
                <h4 className="title">Men's Fashion</h4>
                <ul>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                </ul>
                <h4 className="title">Beauty</h4>
                <ul>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                </ul>
              </div>
              <div className="list-item">
                <h4 className="title">Women's Fashion</h4>
                <ul>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                </ul>
                <h4 className="title">Furniture</h4>
                <ul>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                </ul>
              </div>
              <div className="list-item">
                <h4 className="title">Home, Kitchen</h4>
                <ul>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                  <li>
                    <a href="#">Product List</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
