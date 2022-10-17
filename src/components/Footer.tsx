import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0  text-gray-400">
          <p className="text-base ">Belloga</p>
          <p className="text-base ">devnus.official@gmail.com</p>
        </div>
        <div className="flex justify-center space-x-6 md:order-2">
          <p className="text-center text-base text-gray-400">
            &copy; 2022 devnus Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
