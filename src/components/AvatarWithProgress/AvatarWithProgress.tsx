import { Avatar } from "../UI/Avatar/Avatar.tsx";
import { AvatarSize } from "../UI/Avatar/types.ts";
import { CircleProgressBar } from "../UI/CircleProgressBar/CircleProgressBar.tsx";

import styles from "./AvatarWithProgress.module.css";

interface IAvatarWithProgressProps {
  src: string;
  progressPercents: number;
}

export function AvatarWithProgress({
  src,
  progressPercents,
}: IAvatarWithProgressProps) {
  return (
    <div className={styles.avatarContainer}>
      <Avatar size={AvatarSize.STRETCH} imgSrc={src} />
      <CircleProgressBar progressPercents={progressPercents} />
    </div>
  );
}
