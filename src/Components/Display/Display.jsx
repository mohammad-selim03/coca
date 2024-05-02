import incomePhoto from "../../../assets/income.png";
import content from "../../../assets/Content.png";
import exp from "../../../assets/exp.png";
import product from "../../../assets/Product.png";
import customers from "../../../assets/customers.png";
// import icon from "../../../assets/Icon.png";

const Display = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[82px] mt-5 text-white font-sans leading-tight">
          Improve efficiency <br /> through time tracking.
        </h1>
        <p className="text-lg text-white w-[750px] mt-8 mx-auto">
          How to overcome common challenges and pitfalls when trying to adopt
          time tracking and efficient work habits, and build sustainable habits
          that lead to lasting success
        </p>
      </div>
      <div>
        <div className="flex">
          <div>
            <img src={incomePhoto} alt="" />
          </div>
          <div className="mt-[70px]">
            <button className=" text-lg bg-green-500 rounded-3xl w-[183px] h-[54px] font-bold">
              Get Trial Project
            </button>
            <button className=" cursor-pointer ml-10 font-bold text-white text-lg">
                {/* <img src={icon} alt="" /> */}
              Watch Demo
            </button>
          </div>
          <div className="ml-[120px]">
            <img src={content} alt="" />
          </div>
        </div>
        <div className="flex">
          <div>
            <img className="ml-5" src={exp} alt="" />
          </div>
          <div>
            <img className="mt-[-300px] ml-[-35px]" src={product} alt="" />
          </div>
          <div className="w-52">
            <img src={customers} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
