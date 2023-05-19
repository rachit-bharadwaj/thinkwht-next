// import icons
import { HiOutlineClock } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";

const Apply = (props) => {
  return (
    <div
      className="bg-white  shadow-xl w-[92%] flex flex-col sm:w-[840px] sm:flex sm:flex-row justify-center items-center space-y-2 sm:space-x-10 sm:space-y-0 mx-auto p-5
       rounded-xl  -mt-10 lg:py-7"
    >
      <div className="flex gap-5">
        <div className="flex items-center space-x-2 font-bold">
          <HiOutlineClock className="bg-primary p-1 rounded text-5xl" />
          <p>
            Course Duration <br /> {props.duration}
          </p>
        </div>
        <div className="flex items-center space-x-2 font-bold">
          <BiRupee className="bg-primary p-1 rounded text-5xl" />
          <p>
            Program Fee <br /> &#8377;{props.fee}/month
          </p>
        </div>
        <div></div>
      </div>
      <div>
        <button className="font-bold rounded-full bg-secondary px-5 text-white py-2 text-lg mt-5 lg:m-0">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Apply;
