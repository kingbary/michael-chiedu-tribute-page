import type { Tribute } from "@/app/page";

export default function HomePage({ tributes }: { tributes: Tribute[] }) {
    return (
        <main id="tributes">
            <div className="p-4 border-b border-[#E8DAB5]">
                <h3 className="text-primary text-lg italic font-medium">
                    {tributes.length} {tributes.length === 1 ? "Tribute" : "Tributes"}
                </h3>
            </div>
            {tributes.length === 0 ? (
                <div className="p-4 text-center text-secondary font-jost text-sm italic mt-8">
                    No tributes yet. Be the first to share a memory.
                </div>
            ) : (
                tributes.map((t) => (
                    <div key={t.id} className="flex flex-col gap-5 p-4 border-b border-[#E8DAB5]">
                        <p className="text-lg italic font-medium leading-[100%]">{t.tribute}</p>
                        <div>
                            <div className="w-6 h-px bg-primary mb-3" />
                            <div className="flex flex-col">
                                <h4 className="text-[#1A1714] text-lg italic font-medium">{t.full_name}</h4>
                                <span className="text-primary font-jost">{t.relationship}</span>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </main>
    );
}
