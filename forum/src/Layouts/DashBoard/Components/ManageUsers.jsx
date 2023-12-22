import userimg from "../../../assets/user.png";
const ManageUsers = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold w-[50%] mx-auto my-10 p-5  border-b-2">
        MANAGE ALL USERS
      </h1>
      <div className="w-[80%] mx-auto bg-[#F3F3F3] py-8 space-y-2 lg:mb-0 mb-10">
        <h1 className="text-left w-[90%] mx-auto text-xl font-bold">
          Total Users: 2
        </h1>
        <div className="w-[90%] mx-auto font-semibold">
          <div className="overflow-x-auto ">
            <table className="table">
              {/* head */}
              <thead className="bg-[#B68C5A] text-white">
                <tr>
                  <th>User Profile</th>
                  <th>Role</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={userimg}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Shaon Bishwas</div>
                        <div className="text-sm opacity-50">Bangladesh</div>
                      </div>
                    </div>
                  </td>
                  <td>User</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Promote</button>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={userimg}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Robin Mia</div>
                        <div className="text-sm opacity-50">China</div>
                      </div>
                    </div>
                  </td>
                  <td>Publisher</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Promote</button>
                  </td>
                </tr>
                {/* row 3 */}
              </tbody>
              {/* foot */}
              {/* <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </tfoot> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
