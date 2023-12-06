import { MdLocationPin, MdOutlineEmail, MdAddIcCall } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
const ContactSection = () => {
  return (
    <div className="space-y-16 py-20 bg-[#FAFAFA]">
      <div className="flex space-y-4 flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Contact With Us</h1>
        <p className="w-[50%] text-center text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
      </div>
      <div className="flex">
        <div className=" flex-1">
          <div className="grid grid-cols-2 bg-white w-[80%] mx-auto shadow-lg rounded-[13px]">
            <div className="flex flex-col items-center justify-center text-center p-10 border-2 border-[#B68C5A] border-t-0 border-l-0">
              <MdLocationPin className="text-3xl text-[#B68C5A]"></MdLocationPin>
              <h1 className=" text-xl font-semibold">Location</h1>
              <p className="text-gray-400 text-sm">
                Datiara West <br /> Brahmanbaria, Bangladesh
              </p>
            </div>
            <div className="border-2 border-[#B68C5A] border-t-0 p-10 border-r-0 border-l-0 flex flex-col items-center justify-center text-center">
              <MdAddIcCall className="text-3xl text-[#B68C5A]"></MdAddIcCall>
              <h1 className=" text-xl  font-semibold">Call Us</h1>
              <p className="text-gray-400 text-sm">+8801423659</p>
              <p className="text-gray-400 text-sm">+8801425454</p>
            </div>
            <div className="border-2 border-[#B68C5A] border-t-0 p-10 border-l-0 border-b-0 flex flex-col items-center justify-center text-center">
              <MdOutlineEmail className="text-3xl  text-[#B68C5A]"></MdOutlineEmail>
              <h1 className=" text-xl font-semibold ">Email Us</h1>
              <p className="text-gray-400 text-sm">info@gmail.com</p>
              <p className="text-gray-400 text-sm">info@gmail.com</p>
            </div>
            <div className="flex flex-col items-center justify-center p-10 text-center">
              <IoMdTime className="text-3xl text-[#B68C5A]"></IoMdTime>
              <h1 className="text-xl font-semibold">Working Hours</h1>
              <p className="text-gray-400 text-sm">Mon-fri 9am to 5pm</p>
              <p className="text-gray-400 text-sm">Sunday 9pm to 1pm</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form className="w-[60%] mx-auto">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-[#B68C5A] font-semibold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered border-gray-300 focus:border-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#B68C5A] font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input border-gray-300 focus:border-none input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#B68C5A] font-semibold">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Write your message"
                className="input h-20 border-gray-300 focus:border-none input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#B68C5A]  text-white hover:bg-white hover:border hover:border-[#B68C5A] hover:text-black">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
