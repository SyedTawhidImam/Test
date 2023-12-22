import { NavLink, Outlet } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaThList } from "react-icons/fa";
import { MdOutlineArticle, MdOutlinePostAdd } from "react-icons/md";
const Dashboard = () => {
  return (
    <div className="lg:flex max-w-[1200px] mx-auto">
      <div className="lg:w-[20%] bg-[#B68C5A] lg:min-h-screen px-6">
        <h1 className="text-3xl font-bold py-6">IT Forum</h1>
        <ul className="space-y-2">
          <li className="text-base">
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white font-semibold flex gap-2 items-center"
                  : "flex gap-2 items-center"
              }
            >
              <IoIosHome></IoIosHome> My Home
            </NavLink>
          </li>
          <li className="text-base">
            <NavLink
              to="/dashboard/addblog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white font-semibold flex gap-2 items-center"
                  : "flex gap-2 items-center"
              }
            >
              <MdOutlinePostAdd></MdOutlinePostAdd> Add Blogs
            </NavLink>
          </li>
          <li className="text-base">
            <NavLink
              to="/dashboard/manageusers"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white font-semibold flex gap-2 items-center"
                  : "flex gap-2 items-center"
              }
            >
              <FaThList></FaThList> Manage Users
            </NavLink>
          </li>
          <li className="text-base">
            <NavLink
              to="/dashboard/myblogs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white font-semibold flex gap-2 items-center"
                  : "flex gap-2 items-center"
              }
            >
              <MdOutlineArticle></MdOutlineArticle> My Blogs
            </NavLink>
          </li>
          <li className="text-base space-y-5">
          <hr className="mt-5" />
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white font-semibold flex gap-2 items-center pb-5"
                  : "flex gap-2 items-center pb-5"
              }
            >
             <IoIosHome></IoIosHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="lg:w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
