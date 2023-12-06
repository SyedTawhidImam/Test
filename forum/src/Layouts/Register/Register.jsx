import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    alert(`from submit  ${name}, ${email}, ${password}`);
  };
  return (
    <div className="flex items-center justify-center h-auto py-10">
      <div className="card w-full max-w-sm bg-base-100 shadow py-5">
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
              className="input input-bordered border-gray-300 focus:border-none"
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
              className="input border-gray-300  input-bordered"
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
              className="input border-gray-300  input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#B68C5A]  text-white hover:bg-white hover:border hover:border-[#B68C5A] hover:text-black">
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
  );
};

export default Register;
