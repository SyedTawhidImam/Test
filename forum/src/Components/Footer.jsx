import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
const Footer = () => {
  return (
    <div className="bg-[#363B3F]">
      <div className="max-w-[1200px] mx-auto space-y-5 py-10">
        <h1 className="text-center text-lg text-white">
          <span className="text-[#B68C5A] font-bold text-2xl">D</span>ahuk
        </h1>
        <ul className="flex text-gray-400 items-center justify-center gap-5">
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Service</Link></li>
            <li><Link>Contact Us</Link></li>
        </ul>
        <div className="flex items-center justify-center gap-3">
              <Link className="p-2 bg-white rounded-full">
                <SiIndeed></SiIndeed>
              </Link>
              <Link className="p-2 bg-white rounded-full">
                <FaFacebookF></FaFacebookF>
              </Link>
              <Link className="p-2 bg-white rounded-full">
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
              <Link className="p-2 bg-white rounded-full">
                <FcGoogle></FcGoogle>
              </Link>
            </div>
      </div>
      <div className="bg-[#676767] text-center text-white py-3">
        <h1>Copyright © myForum. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
