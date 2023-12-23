import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddBlogs = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const subtitle = form.subtitle.value;
    const category = form.category.value;
    const bannerImage = form.bannerImage.files[0];
    const article = form.article.value;
    console.log(bannerImage)
    axios
      .get(`https://forum-server-six.vercel.app/v1/user?email=${user?.email}`)
      .then(async(res) => {
        const imageFile = { image: bannerImage }
        const imgbbRes = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        
        const blog = {
          title,
          subtitle,
          category,
          bannerImage:imgbbRes.data.data.display_url,
          article,
          author: [{ name: res.data.name, image: res.data.image }],
          image:imgbbRes.data.data.display_url
        };
        // console.log(blog, imgbbRes.data.data.display_url)
        axios
          .post("https://forum-server-six.vercel.app/v1/addblog", blog)
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Blog added successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        // console.log(blog)
        form.reset();
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold w-[50%] mx-auto my-10 p-5  border-b-2">
        ADD NEW BLOG
      </h1>
      <div className="md:w-[80%] w-[95%] mx-auto bg-[#F3F3F3] py-8 space-y-2">
        <div className="w-[90%] mx-auto font-semibold">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Blog Title"
                className="input input-bordered"
                name="title"
                required
              />
            </div>
            <div className="lg:flex gap-5 justify-between">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select
                  name="category"
                  id=""
                  className="p-3 border-2 rounded-lg"
                >
                  <option value="others">Others</option>
                  <option value="UI/UX DESIGN">UI/UX DESIGN</option>
                  <option value="SOFTWARE ENGINEERING">
                    SOFTWARE ENGINEERING
                  </option>
                  <option value="FRONT-END DEVELOPER">
                    FRONT-END DEVELOPER
                  </option>
                  <option value="FULL STACK WEB DEVELOPER">
                    FULL STACK WEB DEVELOPER
                  </option>
                  <option value="DATA ANALYSIS">DATA ANALYSIS</option>
                </select>
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">SubTitle</span>
                </label>
                <input
                  type="text"
                  name="subtitle"
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
                name="article"
                className="input input-bordered h-28"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Banner</span>
              </label>
              <input type="file" name="bannerImage" id="" placeholder="" />
            </div>

            <div className="text-left mt-6">
              <button
                disabled={user ? false : true}
                className="btn bg-[#B68C5A] text-white hover:border hover:border-[#B68C5A] hover:bg-white hover:text-black"
              >
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
