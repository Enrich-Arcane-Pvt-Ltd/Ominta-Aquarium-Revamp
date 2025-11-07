"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    { id: 1, src: "/images/747435.jpg", alt: "Fish Close-up" },
    { id: 2, src: "/images/Aquarium-Water.jpg", alt: "Wall Aquarium" },
    { id: 3, src: "/images/beautiful-tropical-fish.jpg", alt: "Living Room Aquarium" },
    { id: 4, src: "/images/fish2.png", alt: "Planted Aquarium" },
    { id: 5, src: "/images/fish.jpg", alt: "Goldfish Tank" },
    { id: 6, src: "/images/OIP.jpg", alt: "Discus Fish" },
  ];

  const openLightbox = (item: GalleryItem) => setSelectedImage(item);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % galleryItems.length
        : (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[newIndex]);
  };

  return (
    <section
      className="relative w-full min-h-screen py-20 sm:py-28 overflow-hidden"
      id="gallery"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/Back.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/85 via-primary-500/85 to-primary-600/85"></div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-white" />
            <span className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm font-medium text-white">
              Our Portfolio
            </span>
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {galleryItems.slice(0, 2).map((item, index) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-primary-300/50"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => openLightbox(item)}
              >
                <div className="relative aspect-[16/10] bg-accent-800">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border-2 border-white/40">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white text-2xl font-bold text-center mb-2">
                      {item.alt}
                    </p>
                    <div className="w-12 h-0.5 bg-primary-300 mx-auto"></div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary-300/40 to-transparent rounded-bl-[100px]"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div
              className="md:col-span-2 relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-primary-300/50"
              onClick={() => openLightbox(galleryItems[2])}
            >
              <div className="relative aspect-[16/9] md:aspect-[16/10] bg-accent-800">
                <Image
                  src={galleryItems[2].src}
                  alt={galleryItems[2].alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {galleryItems.slice(3, 5).map((item) => (
                <div
                  key={item.id}
                  className="relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-primary-300/50"
                  onClick={() => openLightbox(item)}
                >
                  <div className="relative aspect-[16/10] bg-accent-800">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:shadow-primary-300/50"
            onClick={() => openLightbox(galleryItems[5])}
          >
            <div className="relative aspect-[21/9] bg-accent-800">
              <Image
                src={galleryItems[5].src}
                alt={galleryItems[5].alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
              />
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10 group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 sm:left-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 sm:right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full max-h-[80vh] flex flex-col items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-6 text-white text-xl sm:text-2xl font-bold text-center">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
