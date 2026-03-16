import styles from '../styles/Header.module.css';

export default function Header({ searchTerm, onSearchChange }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>✨ Byte Shine ✨</h1>

      <div className={styles.banner}>
        🌸 1.本站展示的所有角色及动作均为透明背景的webm格式🌸
        <br />
        🌸 2.如需高清版其他格式如mp4及背景透明mov,gif等,请联系我! 🌸
        <br/>
        🌸 3.如果你想制作自己的角色及动作，请联系我! 🌸
        <br />
        🌸 4. Contact me if you want to make you own character and motions! 🌸
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchBox}
          placeholder="Search dance by name"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </header>
  );
}
