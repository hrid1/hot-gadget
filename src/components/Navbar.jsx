import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { getCartList, getWishList } from "../utils";
import { useContext, useEffect, useState } from "react";
import { InfoContext } from "../provider/InfoProvider/InfoProvider";

const Navbar = () => {
  const location = useLocation();
  // console.log(location);

  const isHome = location.pathname === "/";
  // console.log(isHome);

  // get total cart and wishlist and update
  const [totalcart, setTotalcart] = useState([]);
  const [totalwish, setTotalwish] = useState([]);
  useEffect(() => {
    const cartList = getCartList();
    setTotalcart(cartList);
    const wishList = getWishList();
    setTotalwish(wishList);
  }, []);

  // const user = useContext(InfoContext);
  // console.log(user);

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "font-bold underline underline-offset-4" : ""}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "font-bold underline underline-offset-4" : ""}`
        }
        to="/statistics"
      >
        Statistics
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "font-bold underline underline-offset-4" : ""}`
        }
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "font-bold underline underline-offset-4" : ""}`
        }
        to="/aboutus"
      >
        About Us
      </NavLink>
    </>
  );

  return (
    <div>
      <div
        className={`   navbar  mt-2 py-4  px-6 ${
          isHome ? "bg-purple-600 text-white rounded-t-xl" : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-lg">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end flex items-center  gap-4">
          {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              <span className="badge badge-sm indicator-item ">8</span>
            </div>
          </div> */}

          {/* love icon */}

          <div className="h-12 w-12 border flex items-center justify-center rounded-full cursor-pointer hover:scale-110 duration-300">
            <div className="indicator">
            <FaRegHeart className="text-xl" />
              <span className="badge badge-sm  indicator-item  -right-1 ">
                {totalwish.length}
              </span>
            </div>
          </div>

          <div className="h-12 w-12 border flex items-center justify-center rounded-full cursor-pointer hover:scale-110 duration-300">
            <div className="indicator ">
              <AiOutlineShoppingCart className="text-2xl" />
              <span className="badge badge-sm indicator-item ">
                {totalcart.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
