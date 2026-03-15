import styles from '../styles/Header.module.css';

export default function Header({ searchTerm, onSearchChange }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>✨ Byte Shine ✨</h1>

      <div className={styles.banner}>
        🌸 如果你想制作自己的角色及动作，请联系我! 🌸
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
