import { Logo } from "../Logo/Logo.tsx";
import { Avatar } from "../UI/Avatar/Avatar.tsx";
import { AvatarSize } from "../UI/Avatar/types.ts";
import { CircleProgressBar } from "../UI/CircleProgressBar/CircleProgressBar.tsx";

import styles from "./Sidebar.module.css";
import avatar from "./assets/avatar.svg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.avatar}>
        <Avatar size={AvatarSize.LG} imgSrc={avatar} />
      </div>
      <CircleProgressBar progressPercents={50} />
      <div className={styles.userName}>User Name</div>
      <div className={styles.userLvl}>Next User Lvl</div>
      <nav>Navigation</nav>
    </aside>
  );
}
