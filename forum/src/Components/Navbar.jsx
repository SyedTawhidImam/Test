import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between max-w-[1200px] py-3 mx-auto">
             <h1 className="text-lg">my<span className="text-[#E58B00] font-bold text-2xl">F</span>orum</h1>
             <ul className="flex gap-5 items-center">
                <li><NavLink>Home</NavLink></li>
                <li><NavLink>About</NavLink></li>
                <li><NavLink>Contact Us</NavLink></li>
                <li className="border border-[#E58B00] py-1 px-3 rounded-full"><Link to='/login'>Login</Link></li>
             </ul>
        </div>
    );
};

export default Navbar; 