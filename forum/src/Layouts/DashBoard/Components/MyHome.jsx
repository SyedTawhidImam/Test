import { FaStar } from "react-icons/fa6";
import { LuFileSpreadsheet } from "react-icons/lu";
import { LiaDonateSolid } from "react-icons/lia";
import userimg from "../../../assets/user.png"
const MyHome = () => {
  return (
    <div className="w-[90%] mx-auto space-y-10 mt-10 md:mt-20">
      <h1 className="text-3xl">Hi, Welcome Back!</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="bg-[#BB34F5] text-center p-6 text-white">
          <h1 className="text-2xl font-bold">000</h1>
          <p>Total Publish</p>
        </div>
        <div className="bg-[#B68C5A] text-center p-6 text-white"> 
          <h1 className="text-2xl font-bold">000</h1>
          <p>UI/UX Design</p>
        </div>
        <div className="bg-[#FE4880] text-center p-6 text-white">
          <h1 className="text-2xl font-bold">000</h1>
          <p>Frontend Developer</p>
        </div>
        <div className="bg-[#6AAEFF] text-center p-6 text-white">
          <h1 className="text-2xl font-bold">000</h1>
          <p>Back-End Developer</p>
        </div>
      </div>

      <div className="md:flex">
        <div className="bg-[#FFEDD5] flex-1 p-20 flex flex-col items-center justify-center space-y-2">
          <img src={userimg} alt="userimg" className="w-32 h-32 rounded-full"/>
          <h1 className="text-2xl font-semibold">User Name</h1>
        </div>
        <div className="bg-[#FEF9C3] flex-1 p-20 space-y-3">
            <h1 className="text-2xl font-semibold">Your Activities</h1>
            <div>
                <p className="text-[#00C4A1] flex items-center gap-1"><FaStar></FaStar> Review: 0</p>
                <p className="text-[#FFBB28] flex items-center gap-1"><LuFileSpreadsheet></LuFileSpreadsheet> Read Time: 0</p>
                <p className="text-[#FF8042] flex items-center gap-1"><LiaDonateSolid></LiaDonateSolid> Total Donate: 0</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyHome;
