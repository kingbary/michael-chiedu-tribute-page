export default function HomePage() {
    return (
        <main id="tributes">
            <div className="p-4 border-b border-[#E8DAB5]">
                <h3 className="text-primary text-lg italic font-medium">300 Tributes</h3>
            </div>
            {
                Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex flex-col gap-5 p-4 border-b border-[#E8DAB5]">
                        <div>
                            <p className="text-lg italic font-medium leading-[100%]">In thirty years of medicine I have met few clinicians who combined intellectual rigour with such genuine compassion. Michael taught me that the most important instrument a doctor carries is his attention. I shall miss his counsel more than I can say.</p>
                        </div>
                        <div>
                            <div className="w-6 h-px bg-primary mb-3"></div>
                            <div className="flex flex-col">
                                <h4 className="text-[#1A1714] text-lg italic font-medium">Dr. Kofi Acheampong</h4>
                                <span className="text-primary font-jost">Colleague</span>
                            </div>
                        </div>
                    </div>
                )
                )}
        </main>
    )
}
