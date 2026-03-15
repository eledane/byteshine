import { useRef } from 'react';
import styles from '../styles/DanceCard.module.css';

function getStaticPath(item) {
  const folder = item.location.gif.substring(0, item.location.gif.lastIndexOf('/'));
  return `${folder}/${item.machine_name}.png`;
}

export default function DanceCard({ item, onOpen }) {
  const imgRef   = useRef(null);
  const audioRef = useRef(null);

  const staticPath = getStaticPath(item);

  const handleMouseEnter = () => {
    if (imgRef.current)   imgRef.current.src = item.location.gif;
    if (audioRef.current) audioRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (imgRef.current)   imgRef.current.src = staticPath;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onOpen(item);
  };

  return (
    <div
      className={styles.card}
      data-internal-id={item.id}
      data-machine-name={item.machine_name}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={styles.idBadge}>#{item.id}</div>

      <div className={styles.gifFrame}>
        <img ref={imgRef} src={staticPath} alt={item.name.en_name} />
        <audio ref={audioRef} src={item.location.mp3} loop />
      </div>

      <div className={styles.cardInfo}>
        <h2>{item.name.en_name}</h2>
        <span className={styles.cnName}>{item.name.cn_name}</span>
      </div>
    </div>
  );
}
