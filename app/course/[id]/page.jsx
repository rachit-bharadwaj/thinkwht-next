"use client";

import {
  About,
  Apply,
  ApplyPopup,
  Hero,
  Highlights,
  LearningPath,
} from "@/components/Courses";
import { ApplyContext } from "@/context/ApplyContext";
import { useContext } from "react";

const page = ({ params }) => {
  const pageParams = {
    title: [
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Flutter Development",
      "Angular JS",
      "React JS",
      "Google Cloud",
      "Data Structures & Algorithms",
    ],

    img: [
      "/images/ui-ux.png",
      "/images/frontendDev.png",
      "/images/backendDev.png",
      "/images/flutterDev.png",
      "/images/angularJS.png",
      "/images/reactJS.png",
      "/images/googleCloud.png",
      "/images/dsa.png",
    ],

    courseDuration: [
      "2 Months",
      "2 Months",
      "2 Months",
      "2 Months",
      "2 Months",
      "2 Months",
      "2 Months",
      "2 Months",
    ],
    programFee: ["10,000", "10,000", "10,000", "10,000"],

    courseID: [
      "TWUIUX",
      "TWFRONTEND",
      "TWBACKEND",
      "TWFLUTTER",
      "TWANGULAR",
      "TWREACT",
      "TWGOOGLECLOUD",
      "TWDSA",
    ],
  };

  switch (params.id) {
    case "uiux":
      pageParams.title = pageParams.title[0];
      pageParams.img = pageParams.img[0];
      pageParams.courseDuration = pageParams.courseDuration[0];
      pageParams.programFee = pageParams.programFee[0];
      break;
    case "frontend":
      pageParams.title = pageParams.title[1];
      pageParams.img = pageParams.img[1];
      pageParams.courseDuration = pageParams.courseDuration[1];
      pageParams.programFee = pageParams.programFee[1];
      break;
    case "backend":
      pageParams.title = pageParams.title[2];
      pageParams.img = pageParams.img[2];
      pageParams.courseDuration = pageParams.courseDuration[2];
      pageParams.programFee = pageParams.programFee[2];
      break;
    case "flutter":
      pageParams.title = pageParams.title[3];
      pageParams.img = pageParams.img[3];
      pageParams.courseDuration = pageParams.courseDuration[3];
      pageParams.programFee = pageParams.programFee[3];
      break;
    case "angular":
      pageParams.title = pageParams.title[4];
      pageParams.img = pageParams.img[4];
      pageParams.courseDuration = pageParams.courseDuration[4];
      pageParams.programFee = pageParams.programFee[4];
      break;
    case "react":
      pageParams.title = pageParams.title[5];
      pageParams.img = pageParams.img[5];
      pageParams.courseDuration = pageParams.courseDuration[5];
      pageParams.programFee = pageParams.programFee[5];
      break;
    case "googlecloud":
      pageParams.title = pageParams.title[6];
      pageParams.img = pageParams.img[6];
      pageParams.courseDuration = pageParams.courseDuration[6];
      pageParams.programFee = pageParams.programFee[6];
      break;
    case "dsa":
      pageParams.title = pageParams.title[7];
      pageParams.img = pageParams.img[7];
      pageParams.courseDuration = pageParams.courseDuration[7];
      pageParams.programFee = pageParams.programFee[7];
      break;
  }

  const { popup } = useContext(ApplyContext);

  return (
    <div>
      <Hero title={pageParams.title} imgURL={pageParams.img} />
      <Apply duration={pageParams.courseDuration} fee={pageParams.programFee} />
      {popup && <ApplyPopup />}
      <About />
      <Highlights />
      <LearningPath />
    </div>
  );
};

export default page;
