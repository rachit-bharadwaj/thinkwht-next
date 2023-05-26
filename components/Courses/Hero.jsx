import Image from "next/image";
const Hero = (props) => {
  return (
    <div id="heroCourse" className="bg-primary flex flex-col-reverse items-center px-5 w-full md:px-16 py-14 sm:flex-row">
      <div className="w-full  sm:space-y-3">
        <p className="text-secondary text-2xl md:text-5xl font-extrabold">
          Start Your Learning as
        </p>
        <p className="text-yellow -mt-1 text-2xl md:text-5xl font-extrabold">
          {props.title}
        </p>
        <p className="color-primary mt-2 md:text-lg text-sm"></p>
      </div>

      <div className="w-full flex justify-end items-center">
        <Image
          src={props.imgURL}
          alt="avatar"
          width={500}
          height={500}
          className="md:h-80"
        />
      </div>
    </div>
  );
};

export default Hero;
