const photos: { src: string; alt: string; tall: boolean }[] = [
    { src: "/gallery/photo-1.jpg", alt: "Michael Chiedu Ndika", tall: true },
    { src: "/gallery/photo-2.jpg", alt: "Michael Chiedu Ndika", tall: false },
    { src: "/gallery/photo-3.jpg", alt: "Michael Chiedu Ndika", tall: false },
    { src: "/gallery/photo-4.jpg", alt: "Michael Chiedu Ndika", tall: true },
    { src: "/gallery/photo-5.jpg", alt: "Michael Chiedu Ndika", tall: false },
    { src: "/gallery/photo-6.jpg", alt: "Michael Chiedu Ndika", tall: false },
    { src: "/gallery/photo-7.jpg", alt: "Michael Chiedu Ndika", tall: true },
    { src: "/gallery/photo-8.jpg", alt: "Michael Chiedu Ndika", tall: false },
    { src: "/gallery/photo-9.jpg", alt: "Michael Chiedu Ndika", tall: false },
    { src: "/gallery/photo-10.jpg", alt: "Michael Chiedu Ndika", tall: true },
];

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

export default function Gallery() {
    return (
        <div className="pt-4 pb-6">
            <div className="px-4">
                <h2 className="text-primary italic text-lg font-semibold mb-4">
                    A selection of photographs from across his life.
                </h2>
            </div>

            <div className="columns-2 gap-3 px-4 border-y border-[#E8DAB5] py-6">
                {photos.map((photo, i) => (
                    <div key={i} className="break-inside-avoid mb-2">
                        <PhotoPlaceholder tall={photo.tall} />
                    </div>
                ))}
            </div>

            <p className="text-primary italic text-center text-base font-bold mt-6">
                REST IN ETERNAL PEACE
            </p>
        </div>
    );
}
