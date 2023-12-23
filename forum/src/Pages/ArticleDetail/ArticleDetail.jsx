import { Link, useLoaderData } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import userImg from "../../assets/user.png"
import defaultBanner from "../../assets/emptyimg.jpg"
const ArticleDetail = () => {

  const blog = useLoaderData()
  // console.log(blog)
  const articleLength = blog.article.length;
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto my-20 lg:flex gap-9 ">
      <div className="lg:w-[30%] ">
        <div className=" flex flex-col gap-5">
          <div className="bg-[#B68C5A] text-5xl font-semibold text-white p-7 rounded-md">
            <h1>Categories</h1>
          </div>
          <ul className="bg-[#F3F3F3] flex flex-col gap-5 p-7 rounded-md">
            <li className="bg-white font-semibold p-3 rounded-md">
              <Link to='/'>UI/UX DESIGN</Link>
            </li>
            <li className="bg-white font-semibold p-3 rounded-md">
              <Link to='/'>SOFTWARE ENGINEERING</Link>
            </li>
            <li className="bg-white font-semibold p-3 rounded-md">
              <Link to='/'>FRONT-END DEVELOPER</Link>
            </li>
            <li className="bg-white font-semibold p-3 rounded-md">
              <Link to='/'>FULL STACK WEB DEVELOPER</Link>
            </li>
            <li className="bg-white font-semibold p-3 rounded-md">
              <Link to='/'>DATA ANALYSIS</Link>
            </li>
          </ul>
        </div>
        <div className=" mt-5 py-5 space-y-1">
          <Link className="flex items-center gap-2 font-semibold p-3 pl-10 bg-[#F3F3F3]">
            <FaFacebookF className="bg-white rounded-full p-1 text-2xl text-blue-700 "></FaFacebookF>
            Facebook
          </Link>
          <Link className="flex items-center gap-2 font-semibold p-3 pl-10 bg-[#F3F3F3]">
            <FaLinkedinIn className="bg-white rounded-full p-1 text-2xl text-blue-900 "></FaLinkedinIn>
            LinkedIn
          </Link>
          <Link className="flex items-center gap-2 font-semibold p-3 pl-10 bg-[#F3F3F3]">
            <FaInstagram className="bg-white text-red-600 rounded-full p-1 text-2xl"></FaInstagram>
            Instagram
          </Link>
        </div>
      </div>
      <div className="w-full">
        <img src={blog?.bannerImage || defaultBanner} alt="" className="w-full h-96" />
        <div className="bg-[#F3F3F3] md:px-16 px-8 py-8 space-y-8 rounded-b-lg">
          <div className="md:flex space-y-5 md:space-y-0 justify-between">
            <div className="flex gap-5 items-center">
              <img
                src={blog?.author[0].image || userImg}
                alt="Profle"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h1 className="font-bold">{blog?.author[0].name}</h1>
                <p>{blog?.postDate}</p>
              </div>
            </div>
            <p className="flex items-center gap-1">
              05 min read <CiBookmark></CiBookmark>
            </p>
          </div>
          <div className="space-y-3">
            <h1 className="font-bold text-4xl">{blog?.title}</h1>
            <h1 className="font-semibold text-2xl text-gray-500">
              {blog?.subtitle}
            </h1>
          </div>
          <p className="text-gray-400">
            {blog?.article.slice(0, articleLength / 2)}
          </p>
          {blog?.image && <img src={blog?.image} alt="" className="h-60" />}
          <p className="text-gray-400">
            {blog?.article.slice(articleLength / 2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
