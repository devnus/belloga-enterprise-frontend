import React, { useEffect, useState } from "react";
import { ReactComponent as SpeechBalloon } from "assets/svgs/speechBalloon.svg";

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
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const onClick = () => {
    onClickFunction();
    setIsTooltipVisible(() => true);
  };

  //transision을 줘서 버튼을 누른 다음에 작은 툴팁이 뜨게 만든다, 툴팁은 1초 뒤에 사라진다.
  useEffect(() => {
    if (isTooltipVisible === true) {
      setTimeout(() => {
        setIsTooltipVisible(() => false);
      }, 1000);
    }
  }, [isTooltipVisible]);

  return (
    <div className="group cursor-pointer relative inline-block text-center px-2">
      <button type="button" onClick={onClick} className={BUTTONSTYLE}>
        {children}
      </button>

      <div
        className={
          (isTooltipVisible
            ? "transition-opacity duration-500 ease-out opacity-100 "
            : "opacity-0 ") +
          "absolute w-full bg-black text-white text-center text-mds rounded-lg py-2 z-10 group-focus:opacity-100 bottom-full pointer-events-none"
        }
      >
        {tooltipDescription}
        <SpeechBalloon className="absolute text-black h-2 w-full left-0 top-full" />
      </div>
    </div>
  );
};

export default ButtonWithTooltip;
