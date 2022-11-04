export type BoundingBoxInfo = {
  imageUrl: string;
  reliability: number;
  textLabel: string;
  totalLabelerNum: number;
  x: number[];
  y: number[];
};

export const drawOnCanvas = (
  canvasCtxRef: React.MutableRefObject<CanvasRenderingContext2D | null>,
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
  boundingBoxInfo: BoundingBoxInfo,
  labelingResult: BoundingBoxInfo[]
) => {
  canvasCtxRef.current = canvasRef.current?.getContext(
    "2d"
  ) as CanvasRenderingContext2D | null;
  const ctx = canvasCtxRef.current;
  const image = new Image();
  image.src = boundingBoxInfo.imageUrl;

  image.onload = function () {
    const canvasEle: any = canvasRef.current;

    canvasEle.width = image.width;
    canvasEle.height = image.height;

    const scale = Math.min(
      canvasEle.width / image.width,
      canvasEle.height / image.height
    );

    // get the top left position of the image
    const x = canvasEle.width / 2 - (image.width / 2) * scale;
    const y = canvasEle.height / 2 - (image.height / 2) * scale;
    ctx?.drawImage(image, x, y, image.width * scale, image.height * scale);

    const nameList = labelingResult.map((boundingBoxInfo, index) =>
      drawBoundingBox(boundingBoxInfo, canvasCtxRef, canvasRef)
    );
  };
};

export const drawBoundingBox = (
  boundingBoxInfo: BoundingBoxInfo,
  canvasCtxRef: React.MutableRefObject<CanvasRenderingContext2D | null>,
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>
) => {
  const xArray = boundingBoxInfo.x;
  const yArray = boundingBoxInfo.y;

  //boundingboxId, 왼쪽 위, 윈쪽아래, 오른쪽위, 오른쪽아래
  const topPosition = Math.min(yArray[0], yArray[1]);
  const bottomPosition = Math.max(yArray[2], yArray[3]);
  const leftPosition = Math.min(xArray[0], xArray[3]);
  const rightPosition = Math.max(xArray[2], xArray[1]);

  const r2Info = {
    x: leftPosition,
    y: topPosition,
    w: rightPosition - leftPosition,
    h: bottomPosition - topPosition,
  };

  const props = {
    info: r2Info,
    style: {},
    canvasCtxRef: canvasCtxRef,
    canvasRef: canvasRef,
  };
  drawRect({ ...props });
};

type drawRectProps = {
  info: any;
  style: any;
  canvasCtxRef: React.MutableRefObject<CanvasRenderingContext2D | null>;
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
};
// draw rectangle
export const drawRect = ({
  info,
  style,
  canvasCtxRef,
  canvasRef,
}: drawRectProps) => {
  const { x, y, w, h } = info;
  const { borderColor = "red", borderWidth = 2 } = style;

  if (canvasRef.current) {
    canvasCtxRef.current = canvasRef.current.getContext("2d");
    const ctx: any = canvasCtxRef.current;

    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.rect(x, y, w, h);
    ctx.stroke();
  }
};
