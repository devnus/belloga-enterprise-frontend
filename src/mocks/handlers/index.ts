import { labelingResultHandler } from "./labelingResult";
import { projectInfoHandler } from "./projectInfo";
import { getUserDataHandler } from "./userData";

export const handlers = [
  ...Object.values(getUserDataHandler),
  ...Object.values(labelingResultHandler),
  ...Object.values(projectInfoHandler),
];
