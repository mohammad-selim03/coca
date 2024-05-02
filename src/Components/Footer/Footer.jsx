import c from "../../../assets/c.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="w-[1440px] h-[484px] bg-gradient-to-b from-blue-600 to-green-300 mt-[100px]">
        <div className="flex">
          <img className="mt-20" src={c} alt="" />
          <h2 className="text-center mt-20 text-white font-bold font-sans text-[56px]">
            Are you ready to get started? Begin your free trial today
          </h2>
        </div>
        <div className="ml-[600px] -mt-20">
          <div>
            <p className="mt-5 text-white">
              Experience the Possibilities: Start Your Free Trial and Get
              Started Today
            </p>
          </div>
          <div className="mt-10">
            <input
              type="text"
              placeholder="Enter Email"
              className="input  input-primary w-full max-w-xs border-white rounded-3xl"
            />
            <button className="btn bg-green-400 text-md font-semibold text-[15px] border-green-400 rounded-3xl w-[161px] h-[54px]">
              Request Trial
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black w-[1440px] h-[621px]">
        <div className="flex justify-around p-5">
          <h2 className="text-[64px] w-[869px] h-[148px] text-white">
            Are you prepared to collaborate with us?
          </h2>
          <button className="flex mt-10 justify-center items-center gap-4 bg-green-400 font-semibold w-[232px] h-[56px] rounded-3xl">
            Get Start a Project <HiArrowNarrowRight size={25} />
          </button>
        </div>
        <div className="flex justify-evenly items-center mt-[150px] text-white w-[803px] h-[48px]">
          <div className="flex justify-center items-center ">
            <FaLocationDot size={30} />
            <h3 className="text-md">
              1929, Bancangan, Sambit, <br />
              Suroboyo, Wakanda
            </h3>
          </div>
          <div className="flex text-white justify-center items-center">
            <IoIosMail size={30} />
            <h3 className="text-md">hello@cocapay.co</h3>
          </div>
        </div>
        <hr className="mt-[150px] mb-7"/>

        <div className="flex justify-around text-white">
          <p>© Coca Pay by Sans Brothers</p>
          <div className="flex gap-6">
            <p className="cursor-pointer">Terms & Conditions</p>
            <p className="cursor-pointer">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
