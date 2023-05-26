import Card from "@/props/Card";

const Internship = () => {
  return (
    <div id="internship" className="py-14 lg:mx-10">
      <p className="text-center font-bold text-secondary text-4xl my-10 lg:text-5xl lg:my-16">
        Internship
      </p>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
        <Card
          imgSrc="/images/ui-ux.png"
          altText="ui image"
          text="UI/UX"
          pageURL="/internship/uiux"
        />
        <Card
          imgSrc="/images/frontendDev.png"
          altText="frontend image"
          text="Frontend Development"
          pageURL="/internship/frontend"
        />
        <Card
          imgSrc="/images/backendDev.png"
          altText="backend image"
          text="Backend Development"
          pageURL="/internship/backend"
        />
        <Card
          imgSrc="/images/flutterDev.png"
          altText="flutter image"
          text="Flutter Development"
          pageURL="/internship/flutter"
        />
        <Card
          imgSrc="/images/angularJS.png"
          altText="Angular image"
          text="Angular JS"
          pageURL="/internship/angular"
        />
        <Card
          imgSrc="/images/reactJS.png"
          altText="flutter image"
          text="React JS"
          pageURL="/internship/react"
        />
        <Card
          imgSrc="/images/googleCloud.png"
          altText="google cloud image"
          text="Google Cloud"
          pageURL="/internship/googlecloud"
        />
        <Card
          imgSrc="/images/dsa.png"
          altText="Data Structures & Algorithms image"
          text="Data Structures & Algorithms"
          pageURL="/internship/dsa"
        />
      </div>
    </div>
  );
};

export default Internship;
