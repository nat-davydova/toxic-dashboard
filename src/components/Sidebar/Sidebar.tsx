import { Avatar } from "../Avatar/Avatar.tsx";
import { AvatarSize } from "../Avatar/types.ts";
import { Logo } from "../Logo/Logo.tsx";

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
      <div className={styles.userName}>User Name</div>
      <div className={styles.userLvl}>Next User Lvl</div>
      <nav>Navigation</nav>
    </aside>
  );
}
