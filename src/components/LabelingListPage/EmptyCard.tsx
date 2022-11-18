import React from "react";
import { Link } from "react-router-dom";
import emptyImg from "assets/images/empty_icon.png";
import ocrIcon from "assets/icons/ico_ocr.png";

const EmptyCard = ({
  emptyMessage = "",
  linkMessage = "",
  movingLink = "",
}) => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="pt-8 pb-8">
        <div className="flex flex-shrink-0 justify-center">
          <span className="sr-only">Your Company</span>
          <img className="h-12 w-auto" src={ocrIcon} alt="" />
          <p className="mt-2 text-base text-3xl px-5 text-gray-500">
            {emptyMessage}
          </p>
        </div>
        <div className="text-center">
          {movingLink !== "" && (
            <div className="mt-6 mb-6">
              <Link to={movingLink}>
                <div className="text-base font-medium text-mainBlue hover:text-blue-500">
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
