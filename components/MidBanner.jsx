import React from "react";

const MidBanner = () => {
  return (
    <div className="text-center bg-primary flex my-44 justify-center items-center flex-col p-10 md:flex-row md:justify-evenly md:px-5">
      <div className="-mt-32">
        <img src="/images/boy.png" alt="boy image" className="h-44 sm:h-52" />
      </div>
      <div className="flex flex-col gap-5 text-secondary">
        <p className="font-extrabold text-xl sm:text-2xl">
          Training your way to success and <br />
          Apply to jobs with confidence
        </p>
        <p className="font-bold text-lg sm:text-xl">
          Learn, Grow and get Hired!
        </p>
      </div>
    </div>
  );
};

export default MidBanner;
