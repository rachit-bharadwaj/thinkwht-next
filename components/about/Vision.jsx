const Vision = () => {
  return (
    <div className="space-y-5 mt-10 p-5">
      <p className="text-4xl text-center text-secondary font-bold">
        Our Vision
      </p>
      <div className="grid grid-cols-1 gap-5 items-center mx-auto md:grid-cols-2 md:max-w-3xl lg:max-w-7xl">
        <div className="shadow-xl w-72 h-72 rounded-xl mx-auto lg:w-[30rem] lg:h-72"></div>
        <p className="text-justify md:text-lg lg:text-xl">
          We are a technology company on a mission to equip students with
          relevant skills & practical exposure to help them get the best
          possible start to their careers. Imagine a world full of freedom and
          possibilities. A world where you can discover your passion and turn it
          into your career. A world where you graduate fully assured, confident,
          and prepared to stake a claim on your place in the world.
        </p>
      </div>
    </div>
  );
};

export default Vision;
