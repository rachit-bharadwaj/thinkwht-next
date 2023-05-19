import Image from "next/image";

const Hero = () => {
  return (
    <div>
      {/* for smaller screen */}
      <div className="bg-elipse-mobile bg-primary py-10 flex flex-col gap-10 lg:hidden">
        <div className="text-center text-secondary font-bold">
          <p className="text-2xl sm:text-3xl md:text-4xl">
            Give the Best Start to Your Career
          </p>
          <p className="sm:text-lg md:text-xl"> Learn, Grow and get Hired!</p>
        </div>

        <Image
          src="/images/educationamico.svg"
          alt="hero-img"
          height={500}
          width={500}
          className="h-64 mx-auto md:h-72"
        />

        <div className="flex flex-col gap-5 w-fit mx-auto">
          <button className="px-5 py-2 rounded-full bg-secondary text-white font-bold text-xl md:px-10 md:py-3">
            Training
          </button>
          <button className="px-5 py-2 rounded-full bg-white text-secondary font-bold text-xl md:px-10 md:py-3">
            Internship
          </button>
          <button className="px-5 py-2 rounded-full bg-white text-secondary font-bold text-xl md:px-10 md:py-3">
            Jobs
          </button>
        </div>
      </div>

      {/* for larger screen */}

      <div className="hidden bg-primary h-screen justify-between px-10 py-24 bg-elipse lg:flex">
        <div className="flex flex-col justify-center items-center  gap-14 my-20 ">
          <div className="space-y-10 ml-20">
            <p className="text-secondary font-extrabold text-2xl md:text-4xl lg:text-5xl">
              Give the Best Start to Your Career
            </p>
            <p className="text-secondary font-bold text-lg md:text-xl lg:text-2xl">
              Learn, Grow and get Internship!
            </p>
            <div className="flex justify-evenly md:justify-center gap-8 xl:-ml-[390px] ">
              <button className="bg-secondary text-white rounded-full py-2 px-5 text-xl w-fit font-bold shadow hover:shadow-2xl sm:text-2xl sm:px-7 sm:py-3">
                <a href="#training">Training</a>
              </button>
              <a href="#intern">
                <button className="text-secondary bg-white rounded-full py-2 px-5 text-xl w-fit font-bold shadow hover:shadow-2xl sm:text-2xl sm:px-7 sm:py-3">
                  Internship
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mr-12 mt-5 ">
          <img
            src="/images/educationamico.svg"
            alt="hero-image"
            className="h-64 lg:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
