import { useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";
const HomeContent = () => {
  const [data = [], setData] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    axios
      .get(`https://forum-server-six.vercel.app/v1/blogs?category=${category}`)
      .then((res) => setData(res.data));
  }, [category]);

//   console.log(data);

  return (
    <div className="lg:flex  w-[90%] mx-auto my-20 gap-14 max-w-[1200px]">
      {/* Categories section */}
      <div className="lg:w-[30%] flex flex-col gap-5">
        <div className="bg-[#B68C5A] text-5xl font-semibold text-white p-7 rounded-md">
          <h1>Categories</h1>
        </div>
        <ul className="bg-[#F3F3F3] flex flex-col gap-5 p-7 rounded-md">
          <li
            className="bg-white font-semibold p-3 rounded-md cursor-pointer"
            onClick={() => setCategory("")}
          >
            ALL
          </li>
          <li
            className="bg-white font-semibold p-3 rounded-md cursor-pointer"
            onClick={() => setCategory("UI/UX DESIGN")}
          >
            UI/UX DESIGN
          </li>
          <li
            className="bg-white font-semibold p-3 rounded-md cursor-pointer"
            onClick={() => setCategory("SOFTWARE ENGINEERING")}
          >
            SOFTWARE ENGINEERING
          </li>
          <li
            className="bg-white font-semibold p-3 rounded-md cursor-pointer"
            onClick={() => setCategory("FRONT-END DEVELOPER")}
          >
            FRONT-END DEVELOPER
          </li>
          <li
            className="bg-white font-semibold p-3 rounded-md cursor-pointer"
            onClick={() => setCategory("FULL STACK WEB DEVELOPER")}
          >
            FULL STACK WEB DEVELOPER
          </li>
          <li
            className="bg-white font-semibold p-3 rounded-md cursor-pointer"
            onClick={() => setCategory("DATA ANALYSIS")}
          >
            DATA ANALYSIS
          </li>
        </ul>
      </div>

      {/* Blog section */}
      {data.length == 0 ? (
        <div className="flex items-center justify-center w-full text-2xl font-bold lg:my-0 my-20">
          <h1 className="text-center">No Blogs Publish yet of this category</h1>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-5">
          {data.map((d, idx) => (
            <Blog key={idx} content={d}></Blog>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeContent;
