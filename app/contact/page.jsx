import Image from "next/image";

const page = () => {
  return (
    <div class=" flex flex-col-reverse items-center px-10 w-full md:px-[100px] py-14 sm:flex-row">
      <div class="w-full  sm:space-y-3 ">
        <h1 class="color-primary font-bold text-2xl md:text-3xl">Contact Us</h1>
        <div>
          <p class="color-primary text-xl md:text-2xl">Visit Us</p>
          <p class="md:text-xl text-sm">Gurgaon, Haryana 122004</p>
        </div>
        <div>
          <h1 class="color-primary text-xl md:text-2xl">Contact Us</h1>
          <p class="md:text-xl text-sm">
            thinkwht@gmail.com <br />
            +916387889987
          </p>
        </div>
      </div>

      <div class="w-full flex justify-end  items-center">
        <Image
          src="/images/contact.jfif"
          alt="avatar"
          width={500}
          height={500}
          className="h-64 w-fit mx-auto sm:h-64 md:h-72"
        />
      </div>
    </div>
  );
};

export default page;
