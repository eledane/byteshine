import DanceCard from './DanceCard';
import styles from '../styles/Gallery.module.css';

const ITEMS_PER_PAGE = 12;

export default function Gallery({ data, loading, error, visibleCount, onLoadMore, onOpen }) {
  if (loading) {
    return <div className={styles.loading}>✨ Loading dances... ✨</div>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>😢 Could not load dance data.</p>
        <p>{error}</p>
      </div>
    );
  }

  const visibleItems = data.slice(0, visibleCount);
  const hasMore = visibleCount < data.length;

  return (
    <>
      <div className={styles.grid}>
        {visibleItems.map((item, idx) => (
          <DanceCard key={item.id} item={item} index={idx} onOpen={onOpen} />
        ))}
      </div>

      {hasMore && (
        <div className={styles.moreContainer}>
          <button className={styles.btnMore} onClick={onLoadMore}>
            See More ✨
          </button>
        </div>
      )}
    </>
  );
}
