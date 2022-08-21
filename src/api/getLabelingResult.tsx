import axios from "axios";

export const getLabelingResult = (type: string) => {
  return axios.get(
    `https://api.belloga.com/api/labeled-result/v1/verification/results/${type}`
  );
};
