import { useRef } from 'react';
import styles from '../styles/DanceCard.module.css';

function getPosterPath(item) {
  return item.location.webm.replace(/\.webm$/, '.png');
}

export default function DanceCard({ item, index, onOpen }) {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const posterPath = getPosterPath(item);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
    if (audioRef.current) audioRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onOpen(item);
  };

  // stagger each card's entrance by its position (capped at 500ms so late cards aren't too slow)
  const staggerDelay = `${Math.min(index * 60, 500)}ms`;

  return (
    <div
      className={styles.card}
      style={{ animationDelay: staggerDelay }}
      data-internal-id={item.id}
      data-machine-name={item.machine_name}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={styles.idBadge}>#{item.id}</div>

      <div className={styles.videoFrame}>
        <video
          ref={videoRef}
          src={item.location.webm}
          poster={posterPath}
          muted
          loop
          playsInline
          preload="none"
        />
        <audio ref={audioRef} src={item.location.mp3} loop />
      </div>

      <div className={styles.cardInfo}>
        <h2>{item.name.en_name}</h2>
        <span className={styles.cnName}>{item.name.cn_name}</span>
      </div>
    </div>
  );
}
