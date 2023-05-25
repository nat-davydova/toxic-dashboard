import React from "react";

import { Avatar } from "../UI/Avatar/Avatar.tsx";
import { AvatarSize } from "../UI/Avatar/types.ts";
import { CircleProgressBar } from "../UI/CircleProgressBar/CircleProgressBar.tsx";

import styles from "./AvatarWithProgress.module.css";

interface IAvatarWithProgressProps {
  src: string;
  progressPercents: number;
}

const PROGRESS_STROKE_WIDTH = 3;

export function AvatarWithProgress({
  src,
  progressPercents,
}: IAvatarWithProgressProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.avatarContainer}
        style={
          {
            "--stroke-width": `${PROGRESS_STROKE_WIDTH}px`,
          } as React.CSSProperties
        }
      >
        <Avatar size={AvatarSize.STRETCH} imgSrc={src} />
      </div>
      <CircleProgressBar
        progressPercents={progressPercents}
        strokeWidth={PROGRESS_STROKE_WIDTH}
      />
    </div>
  );
}
