import { BoundingBoxInfo } from "./drawBoundingBox";

/**
 * 클릭했을때 함수를 클립보드에 복사하는 함수
 */
export const onClickCopy = (
  openTab: number,
  currentInfo: BoundingBoxInfo,
  labelingResultJSON: {}
) => {
  if (openTab === 2) {
    navigator.clipboard.writeText(JSON.stringify(currentInfo));
  }
  if (openTab === 3) {
    navigator.clipboard.writeText(JSON.stringify(labelingResultJSON));
  }
};

/**
 * 현재 프로젝트의 라벨링 결과를 json으로 내보내주는 버튼
 */
export const exportJsonData = (labelingResultJSON: {}) => {
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(labelingResultJSON)
  )}`;

  //가상의 element를 하나 생성해서 click하는 방식으로 data를 다운로드 받음
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "projectResult.json";

  link.click();
};
