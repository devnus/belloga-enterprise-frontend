// handlers.js
import { rest } from "msw";

export const getUserDataHandler = rest.get(
  "/api/project/v1/project/my",
  (req, res, ctx) => {
    return res(
      ctx.json({
        id: "e08c90e8-d8d7-427d-b18f-96ce62dc0f8b",
        dateTime: "2022-09-20T02:40:13.974+00:00",
        success: true,
        response: {
          content: [
            {
              projectId: 1,
              name: "test-project-name",
              isAgreed: true,
              zipUUID: "real-final-test-logo-testlogoziptest.zip",
              zipUrl:
                "https://belloga-dev-s3-raw-data-bucket.s3.ap-northeast-2.amazonaws.com/org/real-final-test-logo-testlogoziptest.zip",
              dataType: "OCR",
            },
            {
              projectId: 2,
              name: "test_project",
              isAgreed: false,
              zipUUID: "ef02bdcf-65bc-45a3-9cf1-6ccc31cae028.zip",
              zipUrl:
                "https://belloga-dev-s3-raw-data-bucket.s3.ap-northeast-2.amazonaws.com/org/ef02bdcf-65bc-45a3-9cf1-6ccc31cae028.zip",
              dataType: "OCR",
            },
          ],
          pageable: {
            sort: {
              unsorted: true,
              sorted: false,
              empty: true,
            },
            pageNumber: 0,
            pageSize: 20,
            offset: 0,
            paged: true,
            unpaged: false,
          },
          last: true,
          totalPages: 1,
          totalElements: 2,
          sort: {
            unsorted: true,
            sorted: false,
            empty: true,
          },
          first: true,
          number: 0,
          numberOfElements: 2,
          size: 20,
          empty: false,
        },
        error: null,
      })
    );
  }
);
