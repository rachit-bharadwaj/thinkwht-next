import Image from "next/image";

const WhyThinkwht = () => {
  return (
    <div>
      <p className="text-4xl text-center text-secondary font-bold">
        WhyThinkwht
      </p>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="p-5 space-y-5">
          <Image
            src="/images/learnwithus-removebg-preview.png"
            alt="learn-with-us img"
            width={500}
            height={500}
            className="h-56 w-fit mx-auto sm:h-60 md:h-64"
          />
          <div className="flex flex-col gap-1 items-center text-center">
            <p className="font-bold text-lg sm:text-xl md:text-2xl">
              Learn With Us
            </p>
            <p className="sm:text-lg md:text-xl">
              Learn new-age skills on the go with our short-term online
              trainings
            </p>
          </div>
        </div>

        <div className="p-5 space-y-5">
          <Image
            src="/images/growwithus-removebg-preview.png"
            alt="learn-with-us img"
            width={500}
            height={500}
            className="h-56 w-fit mx-auto sm:h-60 md:h-64"
          />
          <div className="flex flex-col gap-1 items-center text-center">
            <p className="font-bold text-lg sm:text-xl md:text-2xl">
              Grow With Us
            </p>
            <p className="sm:text-lg md:text-xl">
              Learn new-age skills on the go with our short-term online
              trainings
            </p>
          </div>
        </div>

        <div className="p-5 space-y-5">
          <Image
            src="/images/internwithus-removebg-preview.png"
            alt="learn-with-us img"
            width={500}
            height={500}
            className="h-56 w-fit mx-auto sm:h-60 md:h-64"
          />
          <div className="flex flex-col gap-1 items-center text-center">
            <p className="font-bold text-lg sm:text-xl md:text-2xl">
              Internship Opportunities
            </p>
            <p className="sm:text-lg md:text-xl">
              Learn new-age skills on the go with our short-term online
              trainings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyThinkwht;
