import axios from "axios";
import api from "../apis/tokenInterceptor";

export interface IFileTypes {
  id: number;
  object: File;
}

/**
 * 라벨링 프로젝트를 생성하는 api다.
 * @param dataType OCR 등 업로드하려ㄷ는 데이터타입을 가져옴
 * @param projectTitle project title을 가져온다.
 * @param projectDescription 프로젝스 상세 설명을 가져온다.
 * @returns
 */

export async function createLabeling(
  dataType: string | undefined,
  projectTitle: string,
  projectDescription: string,
  files: IFileTypes[]
) {
  const projectInfo = {
    name: projectTitle,
    dataType: dataType,
    description: projectDescription,
  };

  try {
    const { data } = await api.post(`/api/project/v1/project`, projectInfo);

    const urlResponse = await api.get(
      `/api/project/v1/project/${data.response.projectId}/url`
    );

    const uploadUrl = urlResponse.data.response.url.split("://");
    uploadUrl[0] = "http";

    await api.put(`${uploadUrl.join("://")}`, files[0]);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export async function getUploadUrlInfo(
  projectId: string,
  setUploadUrl: React.Dispatch<React.SetStateAction<string>>
) {
  try {
    const { data } = await api.get(`/api/project/v1/project/${projectId}/url`);
    setUploadUrl(() => data.response.url);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
