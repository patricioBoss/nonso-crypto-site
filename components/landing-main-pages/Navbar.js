import Link from "next/link";
import React from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "About Us",
    href: "about",
  },
];

const Navbar = ({ isSticky }) => {
  const [isScroll, setIsScroll] = React.useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  function toggleMenu() {
    document.getElementById("isToggle").classList.toggle("open");
    var isOpen = document.getElementById("navigation");
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  }

  const handleSubMenuToggle = (event) => {
    event.preventDefault();
    const submenu = event.target.nextElementSibling.nextElementSibling;
    console.log("this is the submenue", submenu);
    submenu.classList.toggle("open");
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <nav
      id="topnav"
      className={`defaultscroll ${isScroll || isSticky ? "nav-sticky" : ""}`}
    >
      <div className="container">
        <Link className="logo pl-0" href="/">
          <span className="inline-block">
            <img
              src="/logo/logo-full-black.svg"
              className="h-8 l-dark"
              height="6"
              alt=""
            />
            <img
              src="/logo/logo-full-white.svg"
              className="h-8 l-light"
              height="6"
              alt=""
            />
          </span>
        </Link>
        <div className="menu-extras">
          <div className="menu-item">
            {/* <!-- Mobile menu toggle--> */}
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            {/* <!-- End mobile menu toggle--> */}
          </div>
        </div>

        {/* <!--Login button Start--> */}
        <ul className="buy-button list-none mb-0">
          <li className="inline mb-0">
            <Link href="/login">
              <span className="login-btn-primary">
                <span className="btn btn-icon rounded-full bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white">
                  <i data-feather="settings" className="h-4 w-4"></i>
                </span>
              </span>
              <span className="login-btn-light">
                <span className="btn btn-icon rounded-full bg-gray-50 hover:bg-gray-200 hover:border-gray-100">
                  <i data-feather="settings" className="h-4 w-4"></i>
                </span>
              </span>
            </Link>
          </li>

          <li className="inline pl-1 mb-0">
            <Link href="/register">
              <span className="login-btn-primary">
                <span className="btn btn-icon rounded-full bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white">
                  <BsFillPersonPlusFill className=" text-current h-5 w-5" />
                </span>
              </span>
              <span className="login-btn-light">
                <span className="btn btn-icon rounded-full bg-gray-50 hover:bg-gray-200 hover:border-gray-100">
                  <BsFillPersonPlusFill className=" text-current h-5 w-5" />
                </span>
              </span>
            </Link>
          </li>
        </ul>
        {/* <!--Login button End--> */}

        <div id="navigation">
          {/* <!-- Navigation Menu-->    */}
          <ul className="navigation-menu nav-light">
            {navLinks.map(({ title, sub, href }) => {
              return (
                <li
                  key={title}
                  className={sub?.length ? "has-submenu parent-menu-item" : ""}
                >
                  <Link
                    href={href ?? ""}
                    onClick={!href && handleSubMenuToggle}
                    className={sub?.length ? "" : "sub-menu-item"}
                  >
                    {title.toUpperCase()}{" "}
                  </Link>
                  {sub?.length && <span className="menu-arrow"></span>}
                  <ul className="submenu">
                    {sub?.map(({ title, href }) => (
                      <li key={title}>
                        <Link href={href} className="sub-menu-item">
                          {title.toUpperCase()}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
            {/* <li className="has-submenu parent-menu-item">
              <a href="javascript:void(0)">Docs</a>
             
              <ul className="submenu">
                <li>
                  <a href="documentation.html" className="sub-menu-item">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="changelog.html" className="sub-menu-item">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="widget.html" className="sub-menu-item">
                    Widget
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-submenu parent-parent-menu-item">
              <a href="/">Landing</a>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Pages</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Company </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="page-aboutus.html" className="sub-menu-item">
                        {" "}
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="page-services.html" className="sub-menu-item">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="page-team.html" className="sub-menu-item">
                        {" "}
                        Team
                      </a>
                    </li>
                    <li>
                      <a href="page-pricing.html" className="sub-menu-item">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="page-testimonial.html" className="sub-menu-item">
                        Testimonial{" "}
                        <span className="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ml-1">
                          New
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Multi Level Menu</a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="javascript:void(0)" className="sub-menu-item">
                        Level 1.0
                      </a>
                    </li>
                    <li className="has-submenu child-menu-item">
                      <a href="javascript:void(0)"> Level 2.0 </a>
                      <span className="submenu-arrow"></span>
                      <ul className="submenu">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="sub-menu-item"
                          >
                            Level 2.1
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="sub-menu-item"
                          >
                            Level 2.2
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Portfolio</a>
            </li>

            <li>
              <a href="contact-one.html" className="sub-menu-item">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
