import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  return (
    <Link href={props.pageURL}>
      <div className="shadow-md rounded-lg w-[60vw] h-96 hover:shadow-2xl mx-auto cursor-pointer px-5 py-14 flex flex-col gap-3 md:w-[40vw] lg:w-[20vw] lg:gap-7">
        <Image
          src={props.imgSrc}
          alt={props.altText}
          height={500}
          width={500}
          className="h-44 w-56 mx-auto bg-primary rounded-lg"
        />
        <p className="text-center font-bold text-lg lg:text-2xl">
          {props.text}
        </p>
      </div>
    </Link>
  );
};

export default Card;
