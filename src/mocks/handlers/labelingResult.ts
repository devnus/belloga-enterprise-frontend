import { rest } from "msw";

export const labelingResultHandler = [
  rest.get(
    "/api/labeled-result/v1/verification/results/OCR/1",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(projectResultJson));
    }
  ),
];

const projectResultJson = {
  id: "4bacd1e8-f457-4460-96d8-3ca1da6ab732",
  dateTime: "2022-11-08T01:07:35.751+00:00",
  success: true,
  response: {
    content: [
      {
        imageUrl:
          "https://belloga-dev-s3-unzip-bucket.s3.ap-northeast-2.amazonaws.com/local/a4f2d5f9-d86d-444c-8dee-79c19f75e871.zip/OCR_multi_test2.png",
        x: [67, 484, 481, 64],
        y: [60, 75, 157, 143],
        textLabel: "가려지다",
        totalLabelerNum: 8,
        reliability: 0.8,
      },
      {
        imageUrl:
          "https://belloga-dev-s3-unzip-bucket.s3.ap-northeast-2.amazonaws.com/local/a4f2d5f9-d86d-444c-8dee-79c19f75e871.zip/OCR_multi_test2.png",
        x: [67, 484, 481, 64],
        y: [60, 75, 157, 143],
        textLabel: "가려지다",
        totalLabelerNum: 8,
        reliability: 0.8,
      },
    ],
    pageable: {
      sort: { sorted: false, unsorted: true, empty: true },
      pageNumber: 0,
      pageSize: 20,
      offset: 0,
      paged: true,
      unpaged: false,
    },
    last: false,
    totalElements: 232,
    totalPages: 12,
    first: true,
    number: 0,
    sort: { sorted: false, unsorted: true, empty: true },
    numberOfElements: 20,
    size: 20,
    empty: false,
  },
  error: null,
};
