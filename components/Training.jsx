import Card from "@/props/Card";

const Training = () => {
  return (
    <div className="py-14 lg:mx-10" id="training">
      <p className="text-center font-bold text-secondary text-4xl my-10 lg:text-5xl lg:my-16">
        Training
      </p>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
        <Card
          imgSrc="/images/ui-ux.png"
          altText="ui image"
          text="UI/UX"
          pageURL="/course/uiux"
        />
        <Card
          imgSrc="/images/frontendDev.png"
          altText="frontend image"
          text="Frontend Development"
          pageURL="/course/frontend"
        />
        <Card
          imgSrc="/images/backendDev.png"
          altText="backend image"
          text="Backend Development"
          pageURL="/course/backend"
        />
        <Card
          imgSrc="/images/flutterDev.png"
          altText="flutter image"
          text="Flutter Development"
          pageURL="/course/flutter"
        />
        <Card
          imgSrc="/images/angularJS.png"
          altText="Angular image"
          text="Angular JS"
          pageURL="/course/angular"
        />
        <Card
          imgSrc="/images/reactJS.png"
          altText="flutter image"
          text="React JS"
          pageURL="/course/react"
        />
        <Card
          imgSrc="/images/googleCloud.png"
          altText="google cloud image"
          text="Google Cloud"
          pageURL="/course/googlecloud"
        />
        <Card
          imgSrc="/images/dsa.png"
          altText="Data Structures & Algorithms image"
          text="Data Structures & Algorithms"
          pageURL="/course/dsa"
        />
      </div>
    </div>
  );
};

export default Training;
