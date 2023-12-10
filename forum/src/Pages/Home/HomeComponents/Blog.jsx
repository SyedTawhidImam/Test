import PropTypes from "prop-type";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ content }) => {
    console.log(content)
  return (
    <div className="rounded">
      
      <div className="w-full h-36 bg-no-repeat bg-cover rounded-t" style={{
        backgroundImage: `url(${content.bannerImage})`,
      }}>

      </div>
      <div className="p-5 bg-[#F3F3F3] space-y-4 rounded">
        <div className="flex justify-between">
          <div className="flex gap-5 items-center">
            <img src={content.author[0].image} alt="Profle" className="w-14 h-14 rounded-full" />
            <div>
                <h1 className="font-bold">{content.author[0].name}</h1>
                <p>{content.postDate}</p>
            </div>
          </div>
          <p className="flex items-center gap-1">05 min read <CiBookmark></CiBookmark></p>
        </div>
        <div className="space-y-4">
            <h1 className="font-bold text-2xl">{content.subtitle.slice(0,70)}...</h1>
            {/* <div></div> */}
            <Link to='/articledetails'><button className="flex items-center gap-2 py-2 px-5 border rounded-full mt-4 text-xs hover:text-white hover:bg-[#B68C5A] text-[#B68C5A] border-[#B68C5A]">Read More <FaArrowRight></FaArrowRight></button></Link>
        </div>
      </div>
    </div>
  );
};
Blog.propTypes = {
  content: PropTypes.object,
};
export default Blog;