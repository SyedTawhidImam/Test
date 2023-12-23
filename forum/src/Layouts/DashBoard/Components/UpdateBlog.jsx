import axios from "axios";
import { useLoaderData } from "react-router-dom";
const UpdateBlog = () => {
  const content = useLoaderData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const subtitle = form.subtitle.value;
    const category = form.category.value;
    const bannerImage = form.bannerImage.value;
    const article = form.article.value;
    const blog = {
      title,
      subtitle,
      category,
      bannerImage,
      article,
    };
    axios
      .post(
        `https://forum-server-six.vercel.app/v1/updateblog/${content._id}`,
        blog
      )
      .then((res) => console.log(res));
    console.log(blog);
    form.reset();
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold w-[50%] mx-auto my-10 p-5  border-b-2">
        UPDATE BLOG
      </h1>
      <div className="w-[80%] mx-auto bg-[#F3F3F3] py-8 space-y-2">
        <div className="w-[90%] mx-auto font-semibold">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Blog Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex gap-5 justify-between">
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
                name="article"
                placeholder="Write Article"
                className="input input-bordered"
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
              <button className="btn bg-[#B68C5A] text-white hover:border hover:border-[#B68C5A] hover:bg-white hover:text-black">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
