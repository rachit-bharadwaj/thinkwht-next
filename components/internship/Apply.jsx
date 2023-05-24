"use client";

import { useContext, useEffect, useState } from "react";

// import icons
import { HiOutlineClock } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";
// import { ApplyPopup } from ".";

const Apply = (props) => {
  // sending form data to backend
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [courseID, setCourseID] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setCourseID(props.courseId);
    setCourse(props.courseName);

    const sessionEmail = sessionStorage.getItem("emailID");
    setEmail(sessionEmail);
  }, []);

  const handleInput = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "mobile") {
      setMobile(e.target.value);
    } else if (e.target.name == "college") {
      setCollege(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, mobile, email, course, courseID, college };
    console.log(data);
    const result = await fetch("/api/addintern", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const res = await result.json();

    console.log(res.message);
  };

  // const { popup, openPopup } = useContext(ApplyContext);

  const [applyPopup, setApplyPopup] = useState(false);
  const openApplyForm = () => {
    setApplyPopup(true);
  };
  const closeApplyForm = () => {
    setApplyPopup(false);
  };

  return (
    <div
      className="bg-white  shadow-xl w-[92%] flex flex-col sm:w-[840px] sm:flex sm:flex-row justify-center items-center space-y-2 sm:space-x-10 sm:space-y-0 mx-auto p-5
       rounded-xl lg:py-7 md:justify-evenly my-16"
    >
      <div className="flex gap-5">
        <div className="flex items-center space-x-2 font-bold">
          <HiOutlineClock className="bg-primary p-1 rounded text-5xl" />
          <p>
            Duration <br /> {props.duration}
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={openApplyForm}
          className="font-bold rounded-full bg-secondary px-5 text-white py-2 text-lg mt-5 lg:m-0"
        >
          Apply Now
        </button>
      </div>

      {applyPopup && (
        <div className="flex mx-auto">
          <form method="post" className="absolute top-0 left-14">
            <div className=" absolute  w-full lg:w-full top-40 " id="applyMenu">
              <div className="bg-white  py-5  lg:px-12 rounded-lg mx-auto w-[360px] lg:w-fit shadow-lg hover:shadow-2xl space-y-8">
                <p
                  className="text-right mx-5 text-3xl cursor-pointer"
                  id="closeApplyMenu"
                  onClick={closeApplyForm}
                >
                  X
                </p>
                <p className="text-2xl text-center font-extrabold">
                  Application Form for {props.course}
                </p>
                <div className="flex flex-col">
                  <label for="number" className="mx-2">
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="mobile"
                    required
                    className="border-2 border-gray-300 rounded-lg p-2 mx-2"
                    placeholder="John Doe"
                    onChange={handleInput}
                  />
                </div>
                <div className="flex flex-col">
                  <label for="number" className="mx-2">
                    Whatsapp Number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    required
                    className="border-2 border-gray-300 rounded-lg p-2 mx-2"
                    placeholder="+123456789"
                    onChange={handleInput}
                  />
                </div>
                <div className="flex flex-col">
                  <label for="college" className="mx-2">
                    College/University Name
                  </label>
                  <input
                    type="tel"
                    name="college"
                    id="college"
                    required
                    className="border-2 border-gray-300 rounded-lg p-2 mx-2"
                    placeholder="Indian Institute of Technology"
                    onChange={handleInput}
                  />
                </div>
                <input type="hidden" name="email" />
                <input type="hidden" name="course" value="ANGULAR" />
                <input type="hidden" name="courseID" value="TWANGULAR" />
                <button
                  onClick={handleSubmit}
                  className="bg-secondary text-white text-center md:w-full w-[200px] md:mx-0 mx-10 py-3 rounded-full"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Apply;
