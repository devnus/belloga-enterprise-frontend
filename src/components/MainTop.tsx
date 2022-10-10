import React from "react";
type ModalProps = {
  children: React.ReactNode;
};

const MainTop = ({ children }: ModalProps) => {
  return (
    <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16 w-full">
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-r from-gradBottom via-gradTop to-gradTop "></div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        {children}
      </div>
    </div>
  );
};

export default MainTop;
