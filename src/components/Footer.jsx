import styles from '../styles/Footer.module.css';

export default function Footer({ totalCount }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.stats}>
        动作总计: <span>{totalCount}</span>
      </div>

      <div className={styles.contactLinks}>
        <a href="Elysee01" title="WeChat">💬</a>
        <a href="https://github.com/eledane" title="GitHub">🐙</a>
        <a href="https://space.bilibili.com/3493282912930141" title="Bilibil">📺</a>
        <a href="mailto:guangzhiwoxin@gmail.com" title="Email">✉️</a>
      </div>

      <p className={styles.copyright}>© 2026 Byteshine| kawaii dance!</p>
    </footer>
  );
}
