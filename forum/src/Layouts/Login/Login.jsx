const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-full max-w-sm bg-base-100 shadow ">
        <h1 className="text-3xl font-semibold text-center">Login</h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
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
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#B68C5A]  text-white hover:bg-white hover:border hover:border-[#B68C5A] hover:text-black">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
