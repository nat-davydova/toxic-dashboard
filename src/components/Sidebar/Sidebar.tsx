import { useEffect } from "react";

import { AvatarWithProgress } from "../AvatarWithProgress/AvatarWithProgress.tsx";
import { Logo } from "../Logo/Logo.tsx";

import styles from "./Sidebar.module.css";
import avatar from "./assets/avatar.svg";

export function Sidebar() {
  useEffect(() => {
    async function getUser() {
      const user = await fetch(
        "https://649c561b048075719237fb4b.mockapi.io/user"
      );
      user.json().then((res) => console.log(res));
    }

    getUser();
  }, []);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.avatar}>
        <AvatarWithProgress src={avatar} progressPercents={65} />
      </div>
      <div className={styles.userName}>
        <p>Darrok Baratheon</p>
      </div>
      <div className={styles.userLvl}>Next User Lvl</div>
      <nav>Navigation</nav>
    </aside>
  );
}
