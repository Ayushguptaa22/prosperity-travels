import React from "react";
import $ from "jquery";
import { useEffect } from "react";
import Link from "next/link";

function Navbar() {
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    var header = document.getElementById("nav1");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    const menu = document.querySelector(".menu");
    const menuMain = menu.querySelector(".menu-main");
    const goBack = menu.querySelector(".go-back");
    const menuTrigger = document.querySelector(".mobile-menu-trigger");
    const closeMenu = menu.querySelector(".mobile-menu-close");
    let subMenu;
    menuMain.addEventListener("click", (e) => {
      if (!menu.classList.contains("active")) {
        return;
      }
      if (e.target.closest(".menu-item-has-children")) {
        const hasChildren = e.target.closest(".menu-item-has-children");
        showSubMenu(hasChildren);
      }
    });
    goBack.addEventListener("click", () => {
      hideSubMenu();
    });
    menuTrigger.addEventListener("click", () => {
      toggleMenu();
    });
    closeMenu.addEventListener("click", () => {
      toggleMenu();
    });
    document.querySelector(".menu-overlay").addEventListener("click", () => {
      toggleMenu();
    });
    function toggleMenu() {
      menu.classList.toggle("active");
      document.querySelector(".menu-overlay").classList.toggle("active");
    }
    function showSubMenu(hasChildren) {
      subMenu = hasChildren.querySelector(".sub-menu");
      subMenu.classList.add("active");
      subMenu.style.animation = "slideLeft 0.5s ease forwards";
      const menuTitle =
        hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
      menu.querySelector(".current-menu-title").innerHTML = menuTitle;
      menu.querySelector(".mobile-menu-head").classList.add("active");
    }

    function hideSubMenu() {
      subMenu.style.animation = "slideRight 0.5s ease forwards";
      setTimeout(() => {
        subMenu.classList.remove("active");
      }, 300);
      menu.querySelector(".current-menu-title").innerHTML = "";
      menu.querySelector(".mobile-menu-head").classList.remove("active");
    }

    window.onresize = function () {
      if (this.innerWidth > 991) {
        if (menu.classList.contains("active")) {
          toggleMenu();
        }
      }
    };
  });
  return (
    <>
      <header1 id="nav1" className="header1">
        <div className="container">
          <div className="row v-center">
            <div className="header1-item item-left">
              <div className="logo">
                <a href="#">
                  <img src="/img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="header1-item item-center">
              <div className="menu-overlay"></div>
              <nav className="menu">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">×</div>
                </div>
                <ul className="menu-main">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/">About</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/">Services</Link>
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
                      <div className="list-item"></div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/"></Link>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li>
                          <a href="#">Standard Layout</a>
                        </li>
                        <li>
                          <a href="#">Grid Layout</a>
                        </li>
                        <li>
                          <a href="#">single Post Layout</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/events">Events</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header1-item item-right">
              <a href="#">
                <i className="fas fa-search"></i>
              </a>
              <a href="#">
                <i className="far fa-heart"></i>
              </a>
              <a href="#">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <div className="mobile-menu-trigger">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header1>
    </>
  );
}

export default Navbar;
