import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div className="flex items-center bg-white justify-center h-screen">
      <div className="card w-full max-w-sm border shadow py-5">
        <h1 className="text-3xl font-semibold text-center">Login</h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input border-gray-300 input-bordered focus:border-none bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input border-gray-300 input-bordered focus:border-none bg-white"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#B68C5A] text-white focus:border-none hover:bg-white border border-[#B68C5A] hover:border-[#B68C5A] hover:text-black">
              Singn In
            </button>
          </div>
          <div className="space-y-4 mt-3">
            <h1 className="text-center text-sm">Or Sign in With</h1>
            <div className="flex items-center justify-center gap-5">
              <Link className="p-2 bg-gray-200 rounded-full">
                <FaFacebookF></FaFacebookF>
              </Link>
              <Link className="p-2 bg-gray-200 rounded-full">
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
              <Link className="p-2 bg-gray-200 rounded-full">
                <FcGoogle></FcGoogle>
              </Link>
            </div>
            <h1 className="text-center">
              Do not Have account?{" "}
              <Link to="/register" className="text-[#B68C5A]">
                Register
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
