import styles from '../styles/FloatingParticles.module.css';

const PARTICLES = [
  { emoji: '🌸', style: { left: '5%',  animationDuration: '12s', animationDelay: '0s',   fontSize: '1.2rem' } },
  { emoji: '✨', style: { left: '15%', animationDuration: '9s',  animationDelay: '2s',   fontSize: '1rem'   } },
  { emoji: '💕', style: { left: '28%', animationDuration: '14s', animationDelay: '1s',   fontSize: '1.1rem' } },
  { emoji: '🌸', style: { left: '42%', animationDuration: '10s', animationDelay: '4s',   fontSize: '0.9rem' } },
  { emoji: '⭐', style: { left: '55%', animationDuration: '13s', animationDelay: '0.5s', fontSize: '1rem'   } },
  { emoji: '💖', style: { left: '68%', animationDuration: '11s', animationDelay: '3s',   fontSize: '1.2rem' } },
  { emoji: '✨', style: { left: '78%', animationDuration: '8s',  animationDelay: '1.5s', fontSize: '0.85rem'} },
  { emoji: '🌸', style: { left: '90%', animationDuration: '15s', animationDelay: '2.5s', fontSize: '1rem'   } },
];

export default function FloatingParticles() {
  return (
    <div className={styles.container} aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span key={i} className={styles.particle} style={p.style}>
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
