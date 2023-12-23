const AddBlogs = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold w-[50%] mx-auto my-10 p-5  border-b-2">
        ADD NEW BLOG
      </h1>
      <div className="md:w-[80%] w-[95%] mx-auto bg-[#F3F3F3] py-8 space-y-2">
        <div className="w-[90%] mx-auto font-semibold">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Blog Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="lg:flex gap-5 justify-between">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select name="" id="" className="p-3 border-2 rounded-lg">
                <option value="others">Others</option>
                <option value="UI/UX DESIGN">UI/UX DESIGN</option>
                <option value="SOFTWARE ENGINEERING">SOFTWARE ENGINEERING</option>
                <option value="FRONT-END DEVELOPER">FRONT-END DEVELOPER</option>
                <option value="FULL STACK WEB DEVELOPER">FULL STACK WEB DEVELOPER</option>
                <option value="DATA ANALYSIS">DATA ANALYSIS</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">SubTitle</span>
              </label>
              <input
                type="text"
                placeholder="Blog SubTitle"
                className="input input-bordered"
                required
              />
              
            </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Article</span>
              </label>
              <textarea
                type="text"
                placeholder="Write Article"
                className="input input-bordered h-28"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Banner</span>
              </label>
              <input type="file" name="" id="" placeholder="" />
            </div>
            
            <div className="text-left mt-6">
              <button className="btn bg-[#B68C5A] text-white hover:border hover:border-[#B68C5A] hover:bg-white hover:text-black">Add Blog</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
