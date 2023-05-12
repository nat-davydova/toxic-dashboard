import * as classNames from "classnames";

import styles from "./Avatar.module.css";
import { AvatarSize } from "./types.ts";

interface IAvatarProps {
  size?: AvatarSize;
}

export function Avatar({ size = AvatarSize.SM }: IAvatarProps) {
  const avatarClassnames = classNames({
    [`${styles.avatar}`]: true,
    [`${styles.sizeLg}`]: size === AvatarSize.LG,
  });

  return <div className={avatarClassnames}></div>;
}
