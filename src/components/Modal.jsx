import styles from '../styles/Modal.module.css';

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

        <img
          className={styles.gif}
          src={item.location.gif}
          alt={item.name.en_name}
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
