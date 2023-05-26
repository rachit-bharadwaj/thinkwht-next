"use client";

import { Circles } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="h-[50vh] text-5xl flex items-center justify-center">
      <Circles
        height="100"
        width="100"
        color="#275473"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
};

export default loading;