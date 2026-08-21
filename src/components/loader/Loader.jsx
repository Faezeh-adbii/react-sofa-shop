import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <RotatingLines
      visible={true}
      height="35"
      width="35"
      color="#BE185D"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      wrapperClass=""
    />
  );
}

export default Loader;
