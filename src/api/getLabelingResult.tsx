import axios from "axios";

export const getLabelingResult = (type: string) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/api/labeled-result/v1/verification/results/${type}`
  );
};
