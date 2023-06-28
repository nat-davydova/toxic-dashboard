import { useEffect, useState } from "react";

import { getUser, User } from "../../api/user.ts";
import { AvatarWithProgress } from "../AvatarWithProgress/AvatarWithProgress.tsx";
import { Logo } from "../Logo/Logo.tsx";

import styles from "./Sidebar.module.css";
import avatar from "./assets/avatar.svg";

// Plan:
// 0.1 Get data from api and map it
// 1. Render Name, Last Name
// 1.1 refactor

// 1.2 add notification if no user id
// 1.3 add preloader

// 2. Add avatar into API
// 3. render avatar from API

export function Sidebar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser()
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }, []);

  if (!user) {
    return <></>;
  }

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
          {user.name} {user.lastName}
        </p>
      </div>
      <div className={styles.userLvl}>Next User Lvl</div>
      <nav>Navigation</nav>
    </aside>
  );
}
