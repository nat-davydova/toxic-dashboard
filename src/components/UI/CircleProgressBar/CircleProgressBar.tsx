import styles from "./CircleProgressBar.module.css";

export function CircleProgressBar() {
  return (
    <div className={styles.progress}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="50"
          r="42"
          strokeDasharray="53 150"
          strokeDashoffset="4"
        />
      </svg>
    </div>
  );
}
