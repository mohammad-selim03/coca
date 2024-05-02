import timeImage from "../../../assets/time.png";
import down from "../../../assets/down.png";
import discount from "../../../assets/discount.png";
import greenIcon from "../../../assets/greenIcon.png";
import grayIcon from "../../../assets/grayIcon.png";
import rect from "../../../assets/rect.png";

const Schedule = () => {
  return (
    <>
      <div className="flex justify-around items-center mt-[150px] w-[1400px] mx-auto mb-20">
        <div>
          <img className="" src={timeImage} alt="" />
        </div>
        <div className="ml-10 w-[571px] h-[530px]">
          <h1 className="text-[56px] font-sans">
            Simplify scheduling <br /> processes for all tasks
          </h1>
          <p className="text-gray-400">
            Coca is an effortlessly intuitive, lightweight solution for tracking
            hours and projects, designed for easy adoption and daily use, with a
            focus on lightning-fast performance.
          </p>
          <img className="mt-6" src={down} alt="" />
        </div>
      </div>
      <div className="font-sans mt-[150px] w-[1400px] mx-auto mb-20">
        <h1 className="text-[56px] font-sans text-center">
          An ideal match no matter your budget constraints.
        </h1>
        <div className="flex justify-center gap-4 mt-[100px]">
          <h3 className="text-lg font-semibold">Per Month</h3>
          <input
            type="checkbox"
            className="toggle [--tglbg:green] bg-white hover:bg-white border-green-800"
            checked
          />
          <h3 className="text-lg font-semibold">Per Year</h3>
          <img className="-mt-10" src={discount} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-20">
        <div className="card h-[589px] w-[384px] border-2">
          <div className="text-center">
            <h3 className="text-md font-sans mt-3 font-semibold">Basic plan</h3>
            <h1 className="text-[48px] font-sans font-semibold">$10/mth</h1>
            <h4 className="text-sm text-gray-400">Our most popular plan.</h4>
            <button className="btn bg-green-400 mt-3 font-bold w-[320px] h-[48px] rounded-3xl text-xl">
              Get started
            </button>
            <button className="btn mb-9 bg-white mt-3 font-bold w-[320px] h-[48px] rounded-3xl text-xl">
              Chat to sales
            </button>
            <hr />
            <div className="flex ml-4 mt-7 gap-2">
              <img src={greenIcon} alt="" />
              <h4 className="font-sans text-lg">
                Access to all basic features
              </h4>
            </div>
            <div className="flex ml-4 mt-7 gap-2">
              <img src={greenIcon} alt="" />
              <h4 className="font-sans text-lg">
                Basic reporting and analytics
              </h4>
            </div>
            <div className="flex ml-4 mt-7 gap-2">
              <img src={grayIcon} alt="" />
              <h4 className="font-sans text-lg text-gray-400">
                Up to 10 individual users
              </h4>
            </div>
            <div className="flex ml-4 mt-7 gap-2">
              <img src={grayIcon} alt="" />
              <h4 className="font-sans text-lg text-gray-400">
                20GB individual data each user
              </h4>
            </div>
            <div className="flex ml-4 mt-7 gap-2">
              <img src={grayIcon} alt="" />
              <h4 className="font-sans text-lg text-gray-400">
                Basic chat and email support
              </h4>
            </div>
          </div>
        </div>
        <div className="card h-[589px] w-[384px] border-2">
          <div className="text-center">
            <h3 className="text-md font-sans mt-3 font-semibold">Business plan</h3>
            <h1 className="text-[48px] font-sans font-semibold">$20/mth</h1>
            <h4 className="text-sm text-gray-400">Our most popular plan.</h4>
            <button className="btn bg-green-400 mt-3 font-bold w-[320px] h-[48px] rounded-3xl text-xl">
              Get started
            </button>
            <button className="btn mb-9 bg-white mt-3 font-bold w-[320px] h-[48px] rounded-3xl text-xl">
              Chat to sales
            </button>
            <hr />
            <div className="flex ml-4 mt-7 gap-2">
              <img src={greenIcon} alt="" />
              <h4 className="font-sans text-lg">
                Access to all basic features
              </h4>
            </div>
            <div className="flex ml-4 mt-7 gap-2">
              <img src={greenIcon} alt="" />
              <h4 className="font-sans text-lg">
                Basic reporting and analytics
              </h4>
            </div>
            <div className="flex ml-4 mt-7 gap-2">
              <img src={grayIcon} alt="" />
              <h4 className="font-sans text-lg text-gray-400">
                Up to 10 individual users
              </h4>
            </div>
            <div className="flex ml-4 mt-7 gap-2">
              <img src={grayIcon} alt="" />
              <h4 className="font-sans text-lg text-gray-400">
                20GB individual data each user
              </h4>
            </div>
            <div className="flex ml-4 mt-7 gap-2">
              <img src={grayIcon} alt="" />
              <h4 className="font-sans text-lg text-gray-400">
                Basic chat and email support
              </h4>
            </div>
          </div>
        </div>
        <div className="card h-[589px] w-[384px] border-2">
          <div className="text-center">
            <h3 className="text-md font-sans mt-3 font-semibold">Enterprise plan</h3>
            <h1 className="text-[48px] font-sans font-semibold">$40/mth</h1>
            <h4 className="text-sm text-gray-400">Our most popular plan.</h4>
            <button className="btn bg-green-400 mt-3 font-bold w-[320px] h-[48px] rounded-3xl text-xl">
              Get started
            </button>
            <button className="btn mb-9 bg-white mt-3 font-bold w-[320px] h-[48px] rounded-3xl text-xl">
              Chat to sales
            </button>
            <hr />
            <div className="flex ml-4 mt-7 gap-2">
              <img src={greenIcon} alt="" />
              <h4 className="font-sans text-lg">
                Access to all basic features
              </h4>
            </div>
            <div className="flex ml-4 mt-7 gap-2">
              <img src={greenIcon} alt="" />
              <h4 className="font-sans text-lg">
                Basic reporting and analytics
              </h4>
            </div>
            <div className="flex ml-4 mt-7 gap-2">
              <img src={grayIcon} alt="" />
              <h4 className="font-sans text-lg text-gray-400">
                Up to 10 individual users
              </h4>
            </div>
            <div className="flex ml-4 mt-7 gap-2">
              <img src={grayIcon} alt="" />
              <h4 className="font-sans text-lg text-gray-400">
                20GB individual data each user
              </h4>
            </div>
            <div className="flex ml-4 mt-7 gap-2">
              <img src={grayIcon} alt="" />
              <h4 className="font-sans text-lg text-gray-400">
                Basic chat and email support
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl mt-20 font-bold w-[1400px] ml-5 h-[92px] font-sans text-center">“ I really enjoy my work and it makes me more productive, happier and more successful. The cowering place builds confidence and inspires greater performance and greater success for both employees and employers.”</h3>
        <div className="flex gap-10 justify-center items-center mt-5">
            <img className="rounded-full" src={rect} alt="" />
            <div>
                <h3 className="text-md">Karen Lynn</h3>
                <p className="text-gray-400">Founder @ Company</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
