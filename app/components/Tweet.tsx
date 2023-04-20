import React from "react";
import { GoKebabHorizontal } from "react-icons/go";

const Tweet = () => {
  return (
    <div className="max-w-xl my-24 mx-auto p-3 border bg-white flex">
      <img
        className="h-12 w-12 rounded-full mr-3"
        src="./image.jpg"
        alt="IH Syed Profile"
      />

      <div>
        <div className="text-gray-500 mr-1">
          <div className="flex">
            <div className="flex">
              <strong className="text-gray-5-600">Iqbal Hussain Syed</strong>
              <span className="text-gray-400 ml-1 mr-1">@IqbalHussainSy3</span>
              <span className="text-gray-400 mr-1">&middot;</span>
              <span className="text-gray-400 mr-1">Aug 11</span>
            </div>
            <div className="">
              <GoKebabHorizontal />
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Tweet;
