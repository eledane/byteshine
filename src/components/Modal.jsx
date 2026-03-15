import styles from '../styles/Modal.module.css';

function getPosterPath(item) {
  return item.location.webm.replace(/\.webm$/, '.png');
}

export default function Modal({ item, onClose }) {
  if (!item) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.content}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          ×
        </button>

        <video
          key={item.location.webm}
          className={styles.video}
          src={item.location.webm}
          poster={getPosterPath(item)}
          autoPlay
          loop
          muted
          playsInline
        />

        <h2 className={styles.title}>{item.name.en_name}</h2>
        <p className={styles.subtitle}>{item.name.cn_name}</p>

        <audio
          key={item.location.mp3}
          className={styles.audio}
          autoPlay
          loop
          controls
        >
          <source src={item.location.mp3} />
        </audio>
      </div>
    </div>
  );
}
