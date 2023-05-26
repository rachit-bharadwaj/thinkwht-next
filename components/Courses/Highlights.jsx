import Image from "next/image";

const Highlights = () => {
  return (
    <div id="highlightsCourse" className="mx-auto py-10 w-full flex flex-col items-center">
      <p className="color-primary text-4xl font-extrabold text-center mb-10 ">
        Courses Highlights
      </p>
      <div className="grid grid-cols-3 grid-rows-3 gap-[15px] sm:gap-12  sm:pl-[95px]  ">
        <div className="flex items-center sm:flex-row flex-col text-center sm:space-x-7 ">
          <Image
            src="/images/stairs.png"
            alt="Beginner Friendly"
            className="h-[50px] w-[50px] bg-primary rounded-xl p-1"
            width={500}
            height={500}
          />
          <p className="sm:text-lg text-sm">Beginner Friendly</p>
        </div>

        <div className="  sm:mr-0 flex sm:flex-row flex-col text-center items-center md:space-x-7  ">
          <Image
            src="/images/certificate.png"
            alt="Mobile Friendly"
            className="h-[50px] w-[50px] bg-primary rounded-xl p-1"
            width={500}
            height={500}
          />
          <p className="sm:text-lg text-sm">Certification of Training</p>
        </div>

        <div className=" mr-5 sm:mr-0 flex sm:flex-row flex-col text-center items-center md:space-x-7 ">
          <Image
            src="/images/lift-to-talk.svg"
            alt="Mobile Friendly"
            className="h-[50px] w-[50px] bg-primary rounded-xl p-1"
            width={500}
            height={500}
          />
          <p className="sm:text-lg text-sm">Mobile Friendly</p>
        </div>

        <div className="flex  sm:flex-row flex-col text-center items-center md:space-x-7">
          <Image
            src="/images/learnOnline.png"
            alt="Learn Online"
            className="h-[50px] w-[50px] bg-primary rounded-xl p-1"
            width={500}
            height={500}
          />
          <p className="sm:text-lg text-sm">Learn Online</p>
        </div>

        <div className="flex sm:flex-row flex-col text-center items-center md:space-x-7">
          <Image
            src="/images/download.svg"
            alt="Downloadable Content"
            className="h-[50px] w-[50px] bg-primary rounded-xl p-1"
            width={500}
            height={500}
          />
          <p className="sm:text-lg text-sm">Downloadable Content</p>
        </div>

        <div className="flex mr-4 sm:mr-0 sm:flex-row flex-col text-center items-center md:space-x-7">
          <Image
            src="/images/assignment-add.svg"
            alt="Assignments"
            className="h-[50px] w-[50px] bg-primary rounded-xl p-1"
            width={500}
            height={500}
          />
          <p className="sm:text-lg text-sm">Assignments</p>
        </div>

        <div className="flex sm:flex-row flex-col text-center items-center md:space-x-7">
          <Image
            src="/images/doubt-removebg-preview.png"
            alt="24 X 7 Doubt clearning"
            className="h-[50px]  w-[50px] bg-primary rounded-xl "
            width={500}
            height={500}
          />
          <p className="sm:text-lg text-sm">Doubt clearning</p>
        </div>

        <div className="flex sm:flex-row flex-col text-center items-center md:space-x-7">
          <Image
            src="/images/bulb.png"
            alt="Hands-On Project Based Learning"
            className="h-[50px] w-[50px] bg-primary rounded-xl p-1"
            width={500}
            height={500}
          />
          <p className="sm:text-lg text-sm">Hands-On Project Based Learning</p>
        </div>

        <div className="flex mr-5 sm:mr-0 sm:flex-row flex-col text-center items-center md:space-x-7">
          <Image
            src="/images/schedule.svg"
            alt="Lifetime Access"
            className="h-[50px] w-[50px] bg-primary rounded-xl p-1"
            width={500}
            height={500}
          />
          <p className="sm:text-lg text-sm">Lifetime Access</p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
