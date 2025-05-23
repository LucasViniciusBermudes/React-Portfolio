import Lottie from "lottie-react";
import devAnimation from "../assets/developer.json";

const DevAnimation = () => {
  return (
    <div className="w-full max-w-md p-4">
      <Lottie animationData={devAnimation} loop={true} />
    </div>
  );
};

export default DevAnimation;
