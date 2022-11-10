import React from "react";

type tabButtonProps = {
  openTab: number;
  setOpenTab: React.Dispatch<React.SetStateAction<number>>;
  targetNumber: number;
  tabName: string;
};

/**
 * 프로젝트 상세 페이지의 탭 뷰 중 텍스트, JSON, 전체 결과 버튼을 따로 분리한 컴포넌트
 * @openTab : number, 현재 열려있는 탭
 * @setOpenTab : 열려있는 탭을 변경하는 setState
 * @targetNumber : 각 탭이 부여받은 고유 넘버, 이 넘버와 tabNumber가 같으면 창이 열린다.
 * @tabName : 탭 이름
 */
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
