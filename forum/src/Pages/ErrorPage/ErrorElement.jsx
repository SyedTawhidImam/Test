import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import errorimg from "../../assets/404.png"
const ErrorElement = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
      <div className="text-center space-y-3">
        <h1 className="text-6xl font-bold">Sorry</h1>
        <p className="text-lg font-semibold text-gray-400">This page is not Found</p>
      </div>
      <img src={errorimg} alt="" className="w-[450px]" />
      <div className="text-center">
      <Link to='/'><button className=" text-white py-2 hover:text-black border hover:bg-white hover:border-[#B68C5A] px-8 text-sm font-semibold rounded-md bg-[#B68C5A] ">Back To Home</button></Link>
      </div>
      </div>
    </div>
  );
};
ErrorElement.propTypes ={
  link: PropTypes.string
}
export default ErrorElement;