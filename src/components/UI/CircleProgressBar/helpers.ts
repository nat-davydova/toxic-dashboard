interface IGetProgressSVGParams {
  strokeWidth: number;
  progressPercents: number;
  centerCoord: number;
}

export function getProgressSVGParams({
  strokeWidth,
  progressPercents,
  centerCoord,
}: IGetProgressSVGParams) {
  const radius = centerCoord - strokeWidth;
  const circleLength = 2 * Math.PI * radius;
  const progressBarLength = (circleLength * progressPercents) / 100;
  const offset = circleLength - progressBarLength;

  return { radius, circleLength, progressBarLength, offset };
}
