import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, image: "", role: "user" };
    createUser(email, password)
      .then(() => {
        axios
          .post("https://forum-server-six.vercel.app/v1/user", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              // console.log("user added to the database");
              // reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        Swal.fire({
          title: "Success",
          text: "Successfully Registered",
          icon: "success",
          confirmButtonText: "Continue",
        });
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
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
      <div className="flex items-center justify-center bg-white  py-10 h-screen">
        <div className="card w-full max-w-sm bg-white border shadow py-5">
          <h1 className="text-3xl font-semibold text-center">Sign Up</h1>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered border-gray-300 focus:border-none bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input border-gray-300 focus:border-none input-bordered bg-white"
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
                name="password"
                className="input border-gray-300 focus:border-none input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#B68C5A]  text-white hover:bg-white hover:border border-[#B68C5A] hover:border-[#B68C5A] hover:text-black">
                Sign Up
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
                Already Have an account?{" "}
                <Link to="/login" className="text-[#B68C5A]">
                  Sign in
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
