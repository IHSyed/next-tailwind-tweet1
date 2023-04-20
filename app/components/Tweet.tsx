import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { IoMdStats } from "react-icons/io";

const Tweet = () => {
  return (
    <div className="max-w-xl my-24 mx-auto p-3 border bg-white flex">
      <img
        className="h-12 w-12 rounded-full mr-3"
        src="./image.jpg"
        alt="IH Syed Profile"
      />

      <div>
        <div className="text-gray-500 mr-1 mb-4">
          <div className="flex">
            <div className="flex">
              <strong className="text-gray-5-600">Iqbal Hussain Syed</strong>
              <span className="text-gray-400 ml-1 mr-1">@IqbalHussainSy3</span>
              <span className="text-gray-400 mr-1">&middot;</span>
              <span className="text-gray-400 mr-1">Aug 11</span>
            </div>
            <div className="ml-32">
              <GoKebabHorizontal />
            </div>
          </div>
        </div>

        <div className="text-justify mb-3">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            excepturi non repellat officia saepe recusandae, nam perspiciatis
            minus nulla mollitia.
          </span>
        </div>

        <div className="mt-2 flex justify-between">
          <div className="flex items-center">
            <FaRegComment className="mr-2 text-gray-600" />
            <span className="text-gray-600">20</span>
          </div>

          <div className="flex items-center">
            <FaRetweet className="mr-2 text-gray-600" />
            <span className="text-gray-600">17</span>
          </div>

          <div className="flex items-center">
            <FaRegHeart className="mr-2 text-gray-600" />
            <span className="text-gray-600">215</span>
          </div>

          <FiUpload />
          <IoMdStats />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
