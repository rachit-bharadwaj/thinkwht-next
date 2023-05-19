const LearningPath = () => {
  return (
    <div className="my-20 space-y-14">
      <p className="color-primary text-4xl font-extrabold text-center mb-10">
        Learning Path
      </p>
      <div className="flex items-center justify-center flex-col md:flex-row gap-10 md:gap-0">
        <div className="md:space-y-2 flex flex-col items-center">
          <div className=" border-secondary border-[6px] rounded-3xl h-20 w-20 1.2px [transform:_rotate(41.36deg)] flex justify-center items-center">
            <div className="bg-secondary p-3 h-12 w-12 rounded-2xl flex justify-center items-center">
              <p className="text-xl font-extrabold text-white [transform:_rotate(-41.36deg)]">
                1
              </p>
            </div>
          </div>
          <p className="mt-2 ">Beginner</p>
        </div>

        <p className="-mt-12 hidden md:flex">
          ....................................................
        </p>
        <p className="leading-[0.3] -mt-10 sm:hidden">
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
        </p>

        <div className="space-y-3 flex flex-col items-center -mt-5">
          <div className="bg-whitesmoke border-secondary border-[6px] rounded-3xl h-20 w-20 1.2px [transform:_rotate(41.36deg)] flex justify-center items-center">
            <div className="bg-secondary p-3 h-12 w-12 rounded-2xl flex justify-center items-center">
              <p className="text-xl font-extrabold text-white [transform:_rotate(-41.36deg)]">
                2
              </p>
            </div>
          </div>
          <p>Intermediate</p>
        </div>
        <p className="-mt-12 hidden md:flex">
          ....................................................
        </p>
        <p className="leading-[0.3] -mt-10 sm:hidden">
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
          .
          <br />
        </p>

        <div className="space-y-3 flex flex-col items-center -mt-5">
          <div className="bg-whitesmoke border-secondary border-[6px] rounded-3xl h-20 w-20 1.2px [transform:_rotate(41.36deg)] flex justify-center items-center">
            <div className="bg-secondary p-3 h-12 w-12 rounded-2xl flex justify-center items-center">
              <p className="text-xl font-extrabold text-white [transform:_rotate(-41.36deg)]">
                3
              </p>
            </div>
          </div>
          <p>Advanced</p>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
