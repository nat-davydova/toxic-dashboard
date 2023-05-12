import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>Logo</div>
      <div>Avatar</div>
      <div>User Name</div>
      <div>Next User Lvl</div>
      <nav>Navigation</nav>
    </aside>
  );
}
