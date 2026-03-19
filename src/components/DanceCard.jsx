import { useRef, useEffect, useState } from 'react';
import styles from '../styles/DanceCard.module.css';

function getPosterPath(item) {
  return item.location.webm.replace(/\.webm$/, '.webp');
}

export default function DanceCard({ item, index, onOpen }) {
  const cardRef  = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);  // ← only load when in viewport

  const posterPath = getPosterPath(item);

  // Intersection Observer — load video src only when card scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { rootMargin: '200px' }  // start loading 200px before card enters viewport
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    
    if (audioRef.current) {
      // Set src on first hover only — prevents browser pre-buffering
      if (!audioRef.current.src || audioRef.current.src === window.location.href) {
        audioRef.current.src = item.location.mp3;
      }
      audioRef.current.play().catch(() => {});
    }
    if (videoRef.current) videoRef.current.play().catch(() => {});
    if (audioRef.current) audioRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
  };

  const handleClick = () => {
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
    onOpen(item);
  };

  const staggerDelay = `${Math.min(index * 60, 500)}ms`;

  return (
    <div
      ref={cardRef}
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
        {isVisible ? (
          <>
            <video
              ref={videoRef}
              src={item.location.webm}
              poster={posterPath}
              muted loop playsInline
              preload="none"
            />
            <audio ref={audioRef} loop />
          </>
        ) : (
          // Placeholder shown before card enters viewport — just the poster image
          <img src={posterPath} alt={item.name.en_name} className={styles.posterPlaceholder} />
        )}
      </div>

      <div className={styles.cardInfo}>
        <h2>{item.name.en_name}</h2>
        <span className={styles.cnName}>{item.name.cn_name}</span>
      </div>
    </div>
  );
}