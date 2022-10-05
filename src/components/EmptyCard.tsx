import React from "react";
import { Link } from "react-router-dom";
import emptyImg from "../assets/images/empty_icon.png";

const EmptyCard = ({
  emptyMessage = "",
  linkMessage = "",
  movingLink = "",
}) => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-shrink-0 justify-center">
        <span className="sr-only">Your Company</span>
        <img className="h-12 w-auto" src={emptyImg} alt="" />
      </div>
      <div className="pt-8 pb-16">
        <div className="text-center">
          <p className="mt-2 text-base text-3xl text-gray-500">
            {emptyMessage}
          </p>
          {movingLink && (
            <div className="mt-6">
              <Link to={movingLink}>
                <div className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  {linkMessage}
                  <span aria-hidden="true"> &rarr;</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyCard;
