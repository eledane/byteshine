import { useState, useEffect, useCallback } from 'react';

import { useDanceData } from './hooks/useDanceData';

import Header  from './components/Header';
import Gallery from './components/Gallery';
import Modal   from './components/Modal';
import Footer  from './components/Footer';

const ITEMS_PER_PAGE = 12;

export default function App() {
  const { data: allData, loading, error } = useDanceData();

  const [searchTerm,   setSearchTerm]   = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [modalItem,    setModalItem]    = useState(null);

  // Reset pagination whenever search changes
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
    // Stop all card audio before opening modal
    document.querySelectorAll('audio').forEach((a) => {
      a.pause();
      a.currentTime = 0;
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
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <Gallery
        data={filteredData}
        loading={loading}
        error={error}
        visibleCount={visibleCount}
        onLoadMore={handleLoadMore}
        onOpen={handleOpenModal}
      />

      <Footer totalCount={allData.length} />

      {modalItem && (
        <Modal item={modalItem} onClose={handleCloseModal} />
      )}
    </>
  );
}
