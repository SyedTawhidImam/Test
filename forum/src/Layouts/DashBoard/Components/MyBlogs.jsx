import { Link } from "react-router-dom";

const MyBlogs = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold w-[50%] mx-auto my-10 p-5  border-b-2">
        ADD NEW BLOG
      </h1>

      <div className="overflow-x-auto w-[90%] mx-auto mb-10 lg:mb-0 font-semibold bg-[#F3F3F3]">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-[#B68C5A] text-white ">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Action1</th>
              <th>Action2</th>
              <th>Action3</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>The Art of User Interface Design</td>
              <td>UI/UX DESIGN</td>
              <td>
                <button className="btn btn-ghost btn-xs">Details..</button>
              </td>
              <td>
                <Link to="/dashboard/updateblog">
                  <button className="btn btn-ghost btn-xs text-green-600">
                    Update
                  </button>
                </Link>
              </td>
              <td>
                <button className="btn btn-ghost btn-xs text-red-600">
                  Delete
                </button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>UX Research Unveiled</td>
              <td>UI/UX DESIGN</td>
              <td>
                <button className="btn btn-ghost btn-xs">Details..</button>
              </td>
              <td>
                <Link to="/dashboard/updateblog">
                  <button className="btn btn-ghost btn-xs text-green-600">
                    Update
                  </button>
                </Link>
              </td>
              <td>
                <button className="btn btn-ghost btn-xs text-red-600">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBlogs;
