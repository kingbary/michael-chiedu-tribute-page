"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "@/components/icons/chevron-left";
import { GalleryAdd } from "@/components/icons/gallery-add";

const MAX_TRIBUTE_LENGTH = 5000;
const MAX_PHOTOS = 3;

export default function Tribute() {
    const router = useRouter();
    const [fullName, setFullName] = useState("");
    const [relationship, setRelationship] = useState("");
    const [tribute, setTribute] = useState("");
    const [photos, setPhotos] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    function handlePhotoAdd(e: React.ChangeEvent<HTMLInputElement>) {
        const files = Array.from(e.target.files ?? []);
        const remaining = MAX_PHOTOS - photos.length;
        const selected = files.slice(0, remaining);
        const urls = selected.map((f) => URL.createObjectURL(f));
        setPhotos((prev) => [...prev, ...urls]);
        e.target.value = "";
    }

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log({
            fullName,
            relationship,
            tribute,
            photos,
        });
    }

    return (
        <div>
            <div className="p-4 border-b border-[#E8DAB5] space-y-4">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="flex items-center justify-center size-10 rounded-full bg-[#DFD6CB]"
                >
                    <ChevronLeft />
                </button>
                <h2 className="text-primary italic text-lg font-bold">
                    Share a memory or word of remembrance.
                </h2>
            </div>


            <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-4">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium uppercase text-[#1A1714]">
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full h-10 px-3.5 rounded-[14px] border-[0.5px] border-[#1A17144D] text-[#1A1714] italic font-medium text-base placeholder:text-[#1A171460] outline-none"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium uppercase text-[#1A1714]">
                        Relationship
                    </label>
                    <input
                        type="text"
                        value={relationship}
                        onChange={(e) => setRelationship(e.target.value)}
                        placeholder="eg Colleague, Friend, Neighbour"
                        className="w-full h-10 px-3.5 rounded-[14px] border-[0.5px] border-[#1A17144D] text-[#1A1714] italic font-medium text-base placeholder:text-[#1A171460] outline-none"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium uppercase text-[#1A1714]">
                        Your Tribute
                    </label>
                    <div className="relative border-[0.5px] border-[#1A17144D] rounded-[14px]">
                        <textarea
                            value={tribute}
                            onChange={(e) => setTribute(e.target.value.slice(0, MAX_TRIBUTE_LENGTH))}
                            placeholder="Share a memory, a word of gratitude, or a reflection..."
                            rows={2}
                            className="w-full px-4 pt-4 pb-8 rounded-[14px] text-[#1A1714] font-medium italic text-base placeholder:text-[#1A171460] outline-none resize-none"
                        />
                        <span className="absolute bottom-3 right-4 text-xs text-[#1A171460]">
                            {tribute.length}/{MAX_TRIBUTE_LENGTH}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium uppercase text-[#1A1714]">
                        Photo <span className="normal-case">(Optional)</span>
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        {Array.from({ length: MAX_PHOTOS }).map((_, i) => {
                            const url = photos[i];
                            return url ? (
                                <div key={i} className="relative aspect-square rounded-[20px] overflow-hidden">
                                    <Image src={url} alt={`photo ${i + 1}`} fill className="object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => setPhotos((prev) => prev.filter((_, idx) => idx !== i))}
                                        className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-black/50 text-white text-xs flex items-center justify-center"
                                    >
                                        ×
                                    </button>
                                </div>
                            ) : (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="aspect-square rounded-[20px] border border-dashed border-[#1A171440] flex flex-col items-center justify-center gap-1.5 text-[#1A171480]"
                                >
                                    <GalleryAdd />
                                    <span className="text-xs text-[#1A1714]">Add photo</span>
                                </button>
                            );
                        })}
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handlePhotoAdd}
                    />
                </div>

                <button
                    type="submit"
                    className="inline-flex justify-center items-center h-10.5 px-7.75 text-[15px] text-primary font-jost font-medium uppercase tracking-[-1.1%] rounded-full border border-primary transition-colors duration-300 hover:bg-primary hover:text-background w-fit mt-8"
                >
                    Submit Tribute
                </button>
            </form>
        </div>
    );
}
