import React from "react";
import FormLogin from "../loginPage/FormLogin";

import animateSrc from "./Animation - 1702027438814.json";
import Lottie from "lottie-react";
export default function LoginPage() {
  return (
    <div className="flex container items-center ">
      <FormLogin />
      <div className="w-1/2">
        <Lottie animationData={animateSrc} loop={true} />
      </div>
    </div>
  );
}
