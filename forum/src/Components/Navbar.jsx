import { NavLink } from "react-router-dom";

const Navbar = () => {
  const Links = (
    <>
      <li className="text-base">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#B68C5A] font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-base">
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#B68C5A]font-semibold " : ""
          }
        >
          Blogs
        </NavLink>
      </li>
      <li className="text-base">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#B68C5A] font-semibold" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="text-base">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#B68C5A] font-semibold" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-between max-w-[1200px] py-3 mx-auto">
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
          <h1 className="text-center text-2xl">
            my<span className="text-[#B68C5A] font-bold text-2xl">F</span>orum
          </h1>
        </div>

        <div className="navbar-end ">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{Links}</ul>
          </div>
          <NavLink to="/login">
            <p className="py-2 px-4 bg-[#B68C5A] text-white  rounded-md">
              Login
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
