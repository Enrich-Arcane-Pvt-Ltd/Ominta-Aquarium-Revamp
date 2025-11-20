"use client";

import { useState } from "react";
import { Search, Grid3x3, LayoutGrid, Leaf, Droplets, Sparkles } from "lucide-react";
import Image from "next/image";

export default function PlantsPage() {
    const data = [
        { id: 1, image: "/Images/Plants/CryptocoryneParva.JPG", name: "Cryptocoryne Parva" },
        { id: 2, image: "/Images/Plants/Ech.JPG", name: "Ech. bleheri - Pots" },
        { id: 3, image: "/Images/Plants/Echinodorus.JPG", name: "Echinodorus (Marble queen)" },
        { id: 4, image: "/Images/Plants/Egeria.jpg", name: "Egeria densa - bunch" },
        { id: 5, image: "/Images/Plants/EriocaulonCinerum.jpg", name: "Eriocaulon cinerum" },
        { id: 6, image: "/Images/Plants/EriocaulonSpecies.jpg", name: "Eriocaulon species" },
        { id: 7, image: "/Images/Plants/Hygrophila.jpg", name: "Hygrophila difformis" },
        { id: 8, image: "/Images/Plants/Limnophila.jpg", name: "Limnophila aromaticoides (Purple hybrid)" },
        { id: 9, image: "/Images/Plants/LimnophilaIndica.jpg", name: "Limnophila indica" },
        { id: 10, image: "/Images/Plants/LimnophilaTwo.jpg", name: "Limnophila aromaticoides" },
        { id: 11, image: "/Images/Plants/Ludwegia.jpg", name: "Ludwegia repens (Variegated)" },
        { id: 12, image: "/Images/Plants/Nomaphila.jpg", name: "Nomaphila species (Long leaf)" },
        { id: 13, image: "/Images/Plants/Rotala.jpg", name: "Rotala species (Green)" },
        { id: 14, image: "/Images/Plants/Tonina.jpg", name: "Tonina" },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [gridView, setGridView] = useState("small");
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getGridClass = () => {
        switch (gridView) {
        case "small":
            return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";
        case "medium":
            return "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
        case "large":
        default:
            return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950 relative overflow-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
                </div>
            </div>

            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary-300 rounded-full opacity-30"
                    style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
                    animationDelay: `${Math.random() * 5}s`,
                    }}
                />
                ))}
            </div>

            <style jsx>{`
                @keyframes float {
                0%,
                100% {
                    transform: translateY(0px) translateX(0px);
                }
                50% {
                    transform: translateY(-20px) translateX(10px);
                }
                }
            `}</style>

            <div className="relative z-10 pt-16 pb-10 px-4 md:px-8 text-center">
                <div className="inline-flex items-center gap-4 mb-4">
                    <Droplets className="w-12 h-12 text-primary-300 animate-bounce" />
                    <h1 className="text-5xl md:text-7xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-primary-300 to-teal-300">
                        Aquarium Plants
                        </span>
                    </h1>
                    <Leaf className="w-12 h-12 text-emerald-300 animate-bounce delay-500" />
                </div>
                <p className="text-emerald-200 text-lg md:text-xl font-light tracking-wide">
                    Discover Nature&apos;s Underwater Garden
                </p>
            </div>

            <div className="relative z-10 px-4 md:px-8 mb-10">
                <div className="max-w-7xl mx-auto bg-gradient-to-r from-accent-900/40 via-teal-900/40 to-accent-900/40 backdrop-blur-2xl rounded-3xl border border-primary-600/20 p-8 shadow-2xl">
                    <div className="gap-6 w-full">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-emerald-400 w-6 h-6" />
                            <input
                                type="text"
                                placeholder="Search plants..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 bg-accent-900/60 border-2 border-emerald-800/40 rounded-2xl text-light-100 text-lg placeholder-emerald-600 focus:outline-none focus:border-primary-400 focus:bg-accent-900/80 transition-all duration-300"
                            />
                        </div>            
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-2 text-emerald-200">
                        <Sparkles className="w-4 h-4 text-primary-400" />
                        <span className="text-sm">
                            Showing <span className="text-primary-300 font-bold text-lg">{filteredData.length}</span> of{" "}
                        <span className="font-semibold">{data.length}</span> species
                        </span>
                        <Sparkles className="w-4 h-4 text-primary-400" />
                    </div>
                </div>
            </div>

            <div className="relative z-10 px-4 md:px-8 pb-20">
                <div className={`max-w-7xl mx-auto grid ${getGridClass()} gap-8`}>
                    {filteredData.map((item, index) => (
                        <div
                            key={item.id}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 via-emerald-400 to-teal-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700" />

                            <div
                                className={`relative bg-gradient-to-br cursor-pointer from-accent-800/50 to-teal-900/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-emerald-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3`}
                            >
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        key={item.image}
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        priority={index < 6}
                                        loading={index < 6 ? "eager" : "lazy"}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 will-change-transform"
                                    />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-all duration-1000 ${
                                            hoveredId === item.id ? "translate-x-full" : "-translate-x-full"
                                        }`}
                                    />
                                </div>

                                <div className="relative z-20 p-4 bg-gradient-to-t from-accent-900/90 to-transparent">
                                    <h3
                                        className={`text-base font-bold text-white drop-shadow-lg group-hover:text-primary-300 transition-all duration-300 line-clamp-1 group-hover:line-clamp-none`}
                                    >
                                        {item.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredData.length === 0 && (
                    <div className="text-center py-24">
                        <div className="inline-block p-8 bg-accent-900/40 backdrop-blur-xl rounded-3xl border border-emerald-700/30">
                            <Leaf className="w-20 h-20 text-emerald-700/50 mx-auto mb-4" />
                            <p className="text-emerald-300 text-2xl font-medium">No plants found</p>
                            <p className="text-emerald-500 mt-2">Try searching with different keywords</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
