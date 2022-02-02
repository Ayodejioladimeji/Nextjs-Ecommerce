import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

function NavBar() {
  const router = useRouter();

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={auth.user.avatar}
            alt={auth.user.avatar}
            style={{
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              transform: "translateY(-3px)",
              marginRight: "3px",
            }}
          />{" "}
          {auth.user.name}
        </a>

        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/profile">
            <a className="dropdown-item">Profile</a>
          </Link>
          {auth.user.role === "admin" && adminRouter()}
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <div className="navbar-header">
        <Link href="/">
          <a className="navbar-brand text-white">Seller.com</a>
        </Link>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FiMenu className="menu" />
      </button>

      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav p-1">
          <li className="nav-item">
            <Link href="/products">
              <a className={"nav-link" + isActive("/products")}>Products</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/blogs">
              <a className={"nav-link" + isActive("/blogs")}>Blogs</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/contact">
              <a className={"nav-link" + isActive("/contact")}>Contact</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/about">
              <a className={"nav-link" + isActive("/about")}>About Us</a>
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav p-1">
          <li className="nav-item">
            <Link href="/cart">
              <a className={"nav-link" + isActive("/cart")}>
                <i
                  className="fas fa-shopping-cart position-relative"
                  aria-hidden="true"
                >
                  <span
                    className="position-absolute"
                    style={{
                      height: "15px",
                      width: "15px",
                      background: "#fff",
                      borderRadius: "50%",
                      top: "-10px",
                      right: "20px",
                      color: "red",
                      fontSize: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    2
                  </span>
                </i>
                Cart
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/signin">
              <a className={"nav-link" + isActive("/signin")}>
                <i className="fas fa-user" aria-hidden="true"></i> Sign in
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
