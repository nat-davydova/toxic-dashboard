import styles from "./CircleProgressBar.module.css";

const PROGRESS_STROKE_WIDTH_DEFAULT_PX = 3;
const CIRCLE_CENTER_COORD = 50;

interface ICircleProgressBarProps {
  progressPercents: number;
  strokeWidth?: number;
}

export function CircleProgressBar({
  strokeWidth = PROGRESS_STROKE_WIDTH_DEFAULT_PX,
  progressPercents,
}: ICircleProgressBarProps) {
  const radius = CIRCLE_CENTER_COORD - strokeWidth;
  const circleLength = 2 * Math.PI * radius;
  const progressBarLength = (circleLength * progressPercents) / 100;
  const offset = circleLength - progressBarLength;

  return (
    <div className={styles.progress}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="-0.1" x2="1.1" y1="0.3" y2="0.7">
            <stop className={styles.gradientLight} offset="0%" />
            <stop className={styles.gradientDark} offset="30%" />
            <stop className={styles.gradientDark} offset="70%" />
            <stop className={styles.gradientLight} offset="100%" />
          </linearGradient>
        </defs>
        <circle
          cx={CIRCLE_CENTER_COORD}
          cy={CIRCLE_CENTER_COORD}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={PROGRESS_STROKE_WIDTH_DEFAULT_PX}
          strokeDasharray={circleLength}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
