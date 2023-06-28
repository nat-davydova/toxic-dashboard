import { useEffect, useState } from "react";

import { AvatarWithProgress } from "../AvatarWithProgress/AvatarWithProgress.tsx";
import { Logo } from "../Logo/Logo.tsx";

import styles from "./Sidebar.module.css";
import avatar from "./assets/avatar.svg";

// Plan:
// 0.1 Get data from api and map it

// 1. Render Name, Last Name
// 1.1 refactor
// 1.2 add notification if no user id
// 2. Add avatar into API
// 3. render avatar from API

interface User {
  id: string;
  name: string;
  lastName: string;
}

function userDataMapper(users: User[]): User | null {
  const isUserExists = Boolean(users.length);

  if (!isUserExists) {
    return null;
  }

  const { id, lastName, name } = users[0];

  if (!id) {
    throw new Error("User has no id");
  }

  return {
    id,
    name: name ?? "",
    lastName: lastName ?? "",
  };
}

export function Sidebar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      const usersData = await fetch(
        "https://649c561b048075719237fb4b.mockapi.io/user"
      );
      const users = await usersData.json();
      const user = userDataMapper(users);

      console.log(user);
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
