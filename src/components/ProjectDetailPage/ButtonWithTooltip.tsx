import React from "react";

const BUTTONSTYLE =
  "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-mainBlue hover:bg-mainLightBlue";

type buttonWithTooltip = {
  onClickFunction: () => void;
  children: React.ReactNode;
  tooltipDescription: string;
};

const ButtonWithTooltip = ({
  onClickFunction,
  children,
  tooltipDescription,
}: buttonWithTooltip) => {
  return (
    <div className="group cursor-pointer relative inline-block text-center">
      <button type="button" onClick={onClickFunction} className={BUTTONSTYLE}>
        {children}
        <div className="w-full opacity-0 bg-black text-white text-center text-mds rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full px-3 pointer-events-none">
          {tooltipDescription}
          <svg
            className="absolute text-black h-2 w-full left-0 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ButtonWithTooltip;
