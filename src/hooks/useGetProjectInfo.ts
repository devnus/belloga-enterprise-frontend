import { useQuery } from "react-query";
import api from "apis/tokenInterceptor";

export const useGetProjectInfo = (projectId: string) => {
  const { data, isLoading, error } = useQuery(["projectInfo", projectId], () =>
    getProjectInfo(projectId)
  );

  async function getProjectInfo(projectId: string) {
    const { data } = await api.get(`/api/project/v1/user/project/${projectId}`);

    return data;
  }

  return {
    data: data,
    isLoading: isLoading,
  };
};
