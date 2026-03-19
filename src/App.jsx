import { useState, useEffect, useCallback } from 'react';

import { useDanceData } from './hooks/useDanceData';

import Header            from './components/Header';
import Gallery           from './components/Gallery';
import Modal             from './components/Modal';
import Footer            from './components/Footer';
import FloatingParticles from './components/FloatingParticles';

const ITEMS_PER_PAGE = 12;

export default function App() {
  const { data: allData, loading, error } = useDanceData();

  const [searchTerm,   setSearchTerm]   = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [modalItem,    setModalItem]    = useState(null);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm]);

  const filteredData = searchTerm.trim() === ''
    ? allData
    : allData.filter((item) =>
        item.name.en_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.cn_name.includes(searchTerm)
      );

  const handleOpenModal = useCallback((item) => {
    document.querySelectorAll('audio, video').forEach((m) => {
      m.pause();
      m.currentTime = 0;
    });
    setModalItem(item);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalItem(null);
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  }, []);

  return (
    <>
      <FloatingParticles />

      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    <main>
      <Gallery
        data={filteredData}
        loading={loading}
        error={error}
        visibleCount={visibleCount}
        onLoadMore={handleLoadMore}
        onOpen={handleOpenModal}
      />
    </main>
      <Footer totalCount={allData.length} />

      {modalItem && (
        <Modal item={modalItem} onClose={handleCloseModal} />
      )}
    </>
  );
}
