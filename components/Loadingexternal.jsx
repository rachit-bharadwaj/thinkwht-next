"use client";

import { Circles } from "react-loader-spinner";
const Loadingexternal = ({ show }) => {
  return (
    show && (
      <div className="h-screen text-5xl flex items-center justify-center absolute text-center w-full">
        <Circles
          height="100"
          width="100"
          color="#275473"
          ariaLabel="circles-loading"
          visible={true}
        />
      </div>
    )
  );
};
export default Loadingexternal;
