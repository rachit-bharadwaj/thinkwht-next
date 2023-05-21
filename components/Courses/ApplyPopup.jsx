"use client";

import { ApplyContext } from "@/context/ApplyContext";
import { useContext } from "react";

const ApplyPopup = () => {
  const { closePopup } = useContext(ApplyContext);
  return (
    <form method="post">
      <div class=" absolute  w-full lg:w-full top-40 " id="applyMenu">
        <div class="bg-white  py-5  lg:px-12 rounded-lg mx-auto w-[360px] lg:w-fit shadow-lg hover:shadow-2xl space-y-8">
          <p
            class="text-right mx-5 text-3xl cursor-pointer"
            id="closeApplyMenu"
            onClick={closePopup}
          >
            X
          </p>
          <p class="text-2xl text-center font-extrabold">Application Form</p>
          <div class="flex flex-col">
            <label for="number" class="mx-2">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="mobile"
              required
              class="border-2 border-gray-300 rounded-lg p-2 mx-2 md:w-[24rem]"
              placeholder="John Doe"
            />
          </div>
          <div class="flex flex-col">
            <label for="number" class="mx-2">
              Whatsapp Number
            </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              required
              class="border-2 border-gray-300 rounded-lg p-2 mx-2 md:w-[24rem]"
              placeholder="+123456789"
            />
          </div>
          <div class="flex flex-col">
            <label for="college" class="mx-2">
              College/University Name
            </label>
            <input
              type="tel"
              name="college"
              id="college"
              required
              class="border-2 border-gray-300 rounded-lg p-2 mx-2 md:w-[24rem]"
              placeholder="Indian Institute of Technology"
            />
          </div>
          <input type="hidden" name="email" value="<%=usermail%>" />
          <input type="hidden" name="course" value="ANGULAR" />
          <input type="hidden" name="courseID" value="TWANGULAR" />
          <button class=" bg-secondary text-white text-center md:w-full w-[250px] md:mx-0 mx-10 py-3 rounded-full">
            Apply Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default ApplyPopup;
