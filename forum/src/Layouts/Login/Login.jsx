import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    logIn(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => Swal.fire({
        position: "top-end",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 1500,
      }));
  };
  return (
    <>
      <div className="pt-5">
        <h1 className=" text-2xl max-w-[1200px] mx-auto">
          <Link className="" to="/">
            my<span className="text-[#B68C5A] font-bold text-2xl">F</span>orum
          </Link>
        </h1>
      </div>
      <div className="flex items-center bg-white justify-center h-screen">
        <div className="card w-full max-w-sm border shadow py-5">
          <h1 className="text-3xl font-semibold text-center">Login</h1>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                name="password"
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
    </>
  );
};

export default Login;
