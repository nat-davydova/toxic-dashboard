import { IUser } from "../../api/user.ts";
import { AvatarWithProgress } from "../AvatarWithProgress/AvatarWithProgress.tsx";
import { Logo } from "../Logo/Logo.tsx";

import styles from "./Sidebar.module.css";
import avatar from "./assets/avatar.svg";

interface ISidebarProps {
  user: IUser;
}

export function Sidebar({ user }: ISidebarProps) {
  const { name, lastName } = user;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.avatar}>
        <AvatarWithProgress src={avatar} progressPercents={65} />
      </div>
      <div className={styles.userName}>
        <p>
          {name} {lastName}
        </p>
      </div>
      <div className={styles.userLvl}>Next User Lvl</div>
      <nav>Navigation</nav>
    </aside>
  );
}
