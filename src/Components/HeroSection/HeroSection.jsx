import rect from "../../../assets/rect.png";
import copyrighting from "../../../assets/copyrighting.png";
import scope from "../../../assets/scope.png";
import brand from "../../../assets/brand.png";
import Schedule from "../Schedule/Schedule";
import { FaArrowRightLong } from "react-icons/fa6";


const HeroSection = () => {
  return (
    <div>
      <div className="text-center mt-20 font-sans w-[1440px]">
        <h1 className="text-[60px]">
          Our user-friendly interface allows for <br /> easy management of tasks
        </h1>
        <p className="text-gray-600">
          The Simple Solution to Task Management: Our Interface Offers an Easy{" "}
          <br /> and Efficient Way to Manage Your Tasks
        </p>
      </div>
      <div className="flex justify-center mt-16 w-[1400px]">
        <div className="w-[389px] h-[407px] border-2 p-3 mx-auto rounded">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">Top Clients</h3>
            <button className="btn bg-gradient-to-r from-blue-500 to-green-400 w-[68px] h-[37px] rounded-3xl">
              Active
            </button>
          </div>
          <div className="flex justify-start mt-4">
            <img src={rect} alt="" />
            <div className="ml-4 mt-2">
              {" "}
              <h3 className="text-md">Jonatan Cristy</h3>
              <p className="text-gray-400">New Work</p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold">
              Manage customer relationships
            </h3>
            <h3 className="text-lg mt-3 text-gray-400">
              Improve Customer Satisfaction with Effective Relationship
              Managemen
            </h3>
          </div>
        </div>
        <div className="w-[389px] h-[407px] border-2 p-3 mx-auto rounded">
          <div className="flex justify-start mt-4">
            <img src={rect} alt="" />
            <div className="ml-4 mt-2">
              {" "}
              <h3 className="text-md">Jonatan Cristy</h3>
              <p className="text-gray-400">New Work</p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold">
              Get insights from feedback to improve
            </h3>
            <h3 className="text-lg mt-3 text-gray-400">
              Utilizing Feedback Insights to Enhance Your Performance and
              Achieve Your Goals
            </h3>
          </div>
        </div>
        <div className="w-[389px] h-[407px] border-2 p-3 mx-auto rounded">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">Task Progress</h3>
          </div>
          <div>
            <img className="mt-2" src={copyrighting} alt="" />
          </div>
          <div className="flex justify-start mt-4"></div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold">
              Review your hard works outcome
            </h3>
            <h3 className="text-lg mt-3 text-gray-400">
              Analyzing Your Hard Works Outcome: The Key to Continued Growth and
              Success
            </h3>
          </div>
        </div>
      </div>
      <div className="flex font-sans justify-center gap-12 w-[1300px] h-[796px] mt-[150px]">
        <div className="w-[571px] h-[422px]">
          <h1 className="text-[56px] font-sans">
            Master the art of managing your work hours effectively
          </h1>
          <h6 className="text-lg mt-4 mb-4 font-bold ">Time management is essential for ensuring that you have enough time to complete your tasks.</h6>
          <p>Time is a crucial element in our lives, helping us to structure and organize our daily activities into good habits. By understanding the value of time, we can gain valuable experience and develop ourselves.</p>

          <button className="flex items-center gap-5 mt-12 font-semibold">Discover More <FaArrowRightLong size={20} className="mt-1" /> </button>
        </div>
        <div>
            <img className="w-[507px] h-[556]" src={scope} alt="" />
        </div>
      </div>
      <div className="w-[1000px] mx-auto">
        <h2 className="-mt-30 text-[35px] font-bold">Our services/products are trusted by industry leaders</h2>
        <img className="ml-20 mt-10" src={brand} alt="" />
      </div>
      <Schedule />
    </div>
  );
};

export default HeroSection;
