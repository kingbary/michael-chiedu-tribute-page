"use client";

import Image from "next/image";
import React from "react";

function PhotoPlaceholder({ tall }: { tall: boolean }) {
    return (
        <div
            className={`w-full rounded-[20px] bg-[#D4CEC7] flex items-center justify-center ${tall ? "aspect-3/4" : "aspect-square"}`}
        >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="7" width="36" height="26" rx="4" stroke="#A09890" strokeWidth="2" />
                <circle cx="13" cy="17" r="3.5" stroke="#A09890" strokeWidth="2" />
                <path d="M2 28L12 20L18 25L26 17L38 28" stroke="#A09890" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

function Lightbox({ photos, index, onClose, onPrev, onNext }: {
    photos: string[];
    index: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) {
    React.useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose, onPrev, onNext]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={onClose}
        >
            <button
                className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
                onClick={onClose}
                aria-label="Close"
            >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                </svg>
            </button>

            {photos.length > 1 && (
                <button
                    className="absolute left-3 text-white/80 hover:text-white p-2"
                    onClick={(e) => { e.stopPropagation(); onPrev(); }}
                    aria-label="Previous photo"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
            )}

            <div
                className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={photos[index]}
                    alt={`Tribute photo ${index + 1}`}
                    fill
                    sizes="90vw"
                    className="object-contain"
                    priority
                />
            </div>

            {photos.length > 1 && (
                <button
                    className="absolute right-3 text-white/80 hover:text-white p-2"
                    onClick={(e) => { e.stopPropagation(); onNext(); }}
                    aria-label="Next photo"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            )}

            <p className="absolute bottom-4 text-white/60 text-sm">
                {index + 1} / {photos.length}
            </p>
        </div>
    );
}

export default function Gallery({ photos }: { photos: string[] }) {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const handlePrev = React.useCallback(() => {
        setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
    }, [photos.length]);

    const handleNext = React.useCallback(() => {
        setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));
    }, [photos.length]);

    return (
        <div className="pt-4 pb-6">
            <div className="px-4">
                <h2 className="text-primary italic text-lg font-semibold mb-4">
                    A selection of photographs from across his life.
                </h2>
            </div>

            <div className="columns-2 gap-3 px-4 border-y border-[#E8DAB5] py-6">
                {photos.length === 0
                    ? Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="break-inside-avoid mb-2">
                            <PhotoPlaceholder tall={i % 3 === 0} />
                        </div>
                    ))
                    : photos.map((url, i) => (
                        <div key={i} className="break-inside-avoid mb-2">
                            <div
                                className={`relative w-full rounded-[20px] overflow-hidden cursor-pointer ${i % 3 === 0 ? "aspect-3/4" : "aspect-square"}`}
                                onClick={() => setActiveIndex(i)}
                            >
                                <Image
                                    src={url}
                                    alt="Tribute photo"
                                    fill
                                    sizes="50vw"
                                    className="object-cover transition-transform duration-200 hover:scale-105"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>

            <p className="text-primary italic text-center text-base font-bold mt-6">
                REST IN ETERNAL PEACE
            </p>

            {activeIndex !== null && (
                <Lightbox
                    photos={photos}
                    index={activeIndex}
                    onClose={() => setActiveIndex(null)}
                    onPrev={handlePrev}
                    onNext={handleNext}
                />
            )}
        </div>
    );
}
