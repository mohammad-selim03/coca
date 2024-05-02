import logo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-evenly items-center text-white cursor-pointer h-[102px]">
        <div className="flex">
          <img className="h-[42px] w-[42px] bg-" src={logo} alt="logo" />
          <h3 className="font-bold text-3xl ml-2 text-white">coca</h3>
        </div>
        <div>
          <ul className="flex gap-5 cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="">
          <ul className="flex gap-5">
            <li className="mt-8 font-semibold">Login</li>
            <li className="bg-green-500 text-lg font-bold text-black h-[56px] w-[162px] m-4 pl-7 p-3 rounded-3xl">
              Sign Up free
            </li>
          </ul>
        </div>{" "}
        <br />
      </div>
        <hr className=" w-[1000px] ml-40 " />
    </>
  );
};

export default Navbar;
