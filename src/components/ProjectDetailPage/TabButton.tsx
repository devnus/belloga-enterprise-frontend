import React from "react";

type tabButtonProps = {
  openTab: number;
  setOpenTab: React.Dispatch<React.SetStateAction<number>>;
  targetNumber: number;
  tabName: string;
};
const TabButton = ({
  openTab,
  setOpenTab,
  targetNumber,
  tabName,
}: tabButtonProps) => {
  return (
    <button
      id="tabs-1-tab-1"
      className={`
    ${
      openTab === targetNumber
        ? "text-mainBlue font-bold"
        : "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100"
    }  px-3 py-1.5 border border-transparent text-sm font-medium rounded-md`}
      aria-controls="tabs-1-panel-1"
      role="tab"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        setOpenTab(() => targetNumber);
      }}
    >
      {tabName}
    </button>
  );
};

export default TabButton;
