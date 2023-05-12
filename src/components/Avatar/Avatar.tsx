import * as classNames from "classnames";

import styles from "./Avatar.module.css";
import defaultAvatar from "./assets/default-avatar.svg";
import { AvatarSize } from "./types.ts";

interface IAvatarProps {
  size?: AvatarSize;
  imgSrc?: string;
}

export function Avatar({ size = AvatarSize.SM, imgSrc }: IAvatarProps) {
  const avatarClassnames = classNames({
    [`${styles.avatar}`]: true,
    [`${styles.sizeLg}`]: size === AvatarSize.LG,
  });

  return (
    <div className={avatarClassnames}>
      <img src={imgSrc || defaultAvatar} alt="Userpic" />
    </div>
  );
}
