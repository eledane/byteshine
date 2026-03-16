import styles from '../styles/Footer.module.css';

export default function Footer({ totalCount }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.stats}>
        动作总计: <span>{totalCount}</span>
      </div>

      <div className={styles.contactLinks}>
        {/* WeChat — shows QR code on hover */}
        <div className={styles.wechatWrapper}>
          <a href="#" title="WeChat" className={styles.wechatIcon}>💬</a>
          <div className={styles.qrPopup}>
            <img src="/wechat_qr.png" alt="WeChat QR Code" />
            <p>扫码添加微信</p>
          </div>
        </div>

        <a href="https://github.com/eledane" title="GitHub" target="_blank" rel="noreferrer">🐙</a>
        <a href="https://space.bilibili.com/3493282912930141" title="Bilibili" target="_blank" rel="noreferrer">📺</a>
        <a href="mailto:guangzhiwoxin@gmail.com" title="Email">✉️</a>
      </div>

      <p className={styles.copyright}>© 2026 Byteshine | kawaii dance!</p>
    </footer>
  );
}
