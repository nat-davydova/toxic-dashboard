import styles from "./CircleProgressBar.module.css";

const PROGRESS_STROKE_WIDTH_DEFAULT_PX = 3;
const CIRCLE_CENTER_COORD = 50;

export function CircleProgressBar() {
  return (
    <div className={styles.progress}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx={CIRCLE_CENTER_COORD}
          cy={CIRCLE_CENTER_COORD}
          r={CIRCLE_CENTER_COORD - PROGRESS_STROKE_WIDTH_DEFAULT_PX}
          strokeWidth={PROGRESS_STROKE_WIDTH_DEFAULT_PX}
        />
      </svg>
    </div>
  );
}
