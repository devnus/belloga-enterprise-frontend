import { rest } from "msw";

export const projectInfoHandler = [
  rest.get("/api/project/v1/user/project/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(projectInfoJson));
  }),
];

const projectInfoJson = {
  data: {
    id: "4bacd1e8-f457-4460-96d8-3ca1da6ab732",
    dateTime: "2022-11-08T01:07:35.751+00:00",
    success: true,
    response: {
      projectId: 1,
    },
    error: null,
  },
};
