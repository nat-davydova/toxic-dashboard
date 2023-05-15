import { AvatarWithProgress } from "../AvatarWithProgress/AvatarWithProgress.tsx";
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
        <AvatarWithProgress src={avatar} progressPercents={65} />
      </div>
      <div className={styles.userName}>User Name</div>
      <div className={styles.userLvl}>Next User Lvl</div>
      <nav>Navigation</nav>
    </aside>
  );
}
