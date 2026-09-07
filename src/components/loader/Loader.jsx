import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loader({size , color}) {
  return (
    <RotatingLines
      visible={true}
      height={size}
      width={size}
      color={color}
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
