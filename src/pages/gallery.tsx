// src/pages/gallery.tsx
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const YEARS = ["2022", "2021", "2019", "2018", "2017"];

// Replace these with your real image URLs per year
const IMAGES_BY_YEAR: Record<string, string[]> = {
    "2022": [
        "http://www.ecantn.org/assets/images/gallery/2022/image1.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image2.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image3.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image4.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image5.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image6.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image7.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image8.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image9.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image10.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image11.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image12.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image13.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image14.jpg",
        "http://www.ecantn.org/assets/images/gallery/2022/image15.jpg",

        // ...
    ],
    "2021": [
        "http://www.ecantn.org/assets/images/gallery/2021/image1.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image2.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image3.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image4.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image5.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image6.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image7.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image8.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image9.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image10.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image11.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image12.jpg",

        "http://www.ecantn.org/assets/images/gallery/2021/image13.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image14.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image15.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image16.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image17.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image18.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image19.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image20.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image21.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image22.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image23.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image24.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image25.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image26.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image27.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image28.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image29.jpg",
        "http://www.ecantn.org/assets/images/gallery/2021/image30.jpg",
    ],
    "2019": [
        "http://www.ecantn.org/assets/images/gallery/2019/image1.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image2.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image3.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image4.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image5.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image6.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image7.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image8.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image9.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image10.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image11.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image12.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image13.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image14.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image15.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image16.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image17.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image18.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image19.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image20.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image21.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image22.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image23.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image24.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image25.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image26.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image27.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image28.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image29.jpg",
        "http://www.ecantn.org/assets/images/gallery/2019/image30.jpg",
    ],


    "2018": [
        "http://www.ecantn.org/assets/images/gallery/2018/image1.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image2.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image3.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image4.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image5.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image6.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image7.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image8.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image9.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image10.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image11.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image12.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image13.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image14.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image15.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image16.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image17.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image18.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image19.jpg",
        "http://www.ecantn.org/assets/images/gallery/2018/image20.jpg",
    ],
    "2017": [
        "http://www.ecantn.org/assets/images/gallery/2017/image1.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image2.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image3.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image4.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image5.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image6.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image7.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image8.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image9.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image10.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image11.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image12.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image13.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image14.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image15.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image16.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image17.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image18.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image19.jpg",
        "http://www.ecantn.org/assets/images/gallery/2017/image20.jpg",
    ],
};

const Gallery: NextPage = () => {
  const [year, setYear] = useState<string>("2022");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = IMAGES_BY_YEAR[year] || [];

  // Preload neighbors
  useEffect(() => {
    if (!modalIsOpen || images.length === 0) return;
    const next = (currentIdx + 1) % images.length;
    const prev = (currentIdx - 1 + images.length) % images.length;
    [images[next], images[prev]].forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [modalIsOpen, currentIdx, images]);

  const openModal = (idx: number) => {
    setCurrentIdx(idx);
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);
  const prevImage = () =>
    setCurrentIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () =>
    setCurrentIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* Year Tabs */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-center flex-wrap gap-4">
          {YEARS.map((y) => {
            const isActive = y === year;
            return (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`
                  px-6 py-2
                  rounded-full
                  text-lg
                  font-semibold
                  tracking-wide
                  transition
                  ${isActive
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-green-50"}
                `}
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>

      {/* Masonry Grid */}
      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((src, idx) => (
              <div
                key={src}
                className="break-inside mb-4 cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => openModal(idx)}
              >
                <Image
                  src={src}
                  alt={`Gallery ${year} #${idx + 1}`}
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

     {/* Lightbox Modal */}
<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Image Lightbox"
  overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50"
  className="fixed inset-0 flex items-center justify-center p-6 outline-none"
>
  <div className="relative flex items-center justify-center w-full h-full">
    {/* Close */}
    <button
      onClick={closeModal}
      aria-label="Close"
      className="
        absolute top-6 right-6
        bg-white bg-opacity-80 hover:bg-opacity-100
        rounded-full p-2 text-black text-2xl z-50
        transition
      "
    >
      &times;
    </button>

    {/* Prev */}
    <button
      onClick={prevImage}
      aria-label="Previous"
      className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4 z-50"
    >
      ‹
    </button>

    {/* The Image */}
    <Image
      src={images[currentIdx]}
      alt={`Gallery ${year} #${currentIdx + 1}`}
      width={1200}
      height={800}
      priority
      style={{
        maxWidth: 'calc(100vw - 120px)',
        maxHeight: 'calc(100vh - 120px)',
        width: 'auto',
        height: 'auto',
      }}
    />

    {/* Next */}
    <button
      onClick={nextImage}
      aria-label="Next"
      className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4 z-50"
    >
      ›
    </button>
  </div>
</Modal>


      <Footer />
    </div>
  );
};

export default Gallery;