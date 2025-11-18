"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Search, Grid3x3, LayoutGrid, Sparkles, Fish } from "lucide-react";

import { Anamone, Angels, Anthias, Butterfly, ClownFish, CrabFish, Cucumber, Damsel, Eals, Gobies } from "../../data/MarineData";

type GridViewType = "compact" | "comfortable" | "spacious";

export default function SaltWaterFishDetailsPage() {
    const { id } = useParams();
    const numericId = Number(id);
    const [searchQuery, setSearchQuery] = useState("");
    const [gridView, setGridView] = useState<GridViewType>("comfortable");

    const categoryMap: Record<number, { id: number; image: string; name: string }[]> = {
        1: Anamone,
        2: Angels,
        3: Anthias,
        4: Butterfly,
        5: ClownFish,
        6: CrabFish,
        7: Cucumber,
        8: Damsel,
        9: Eals,
        10: Gobies,
    };

    const categoryNames: Record<number, string> = {
        1: "Anemone",
        2: "Angels",
        3: "Anthias",
        4: "Butterfly Fish",
        5: "Clown Fish",
        6: "Crab Fish",
        7: "Cucumber",
        8: "Damsel",
        9: "Eels",
        10: "Gobies",
    };

    const data = categoryMap[numericId];
    const categoryName = categoryNames[numericId];

    const filteredData = data?.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const gridClasses = {
        compact: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3",
        comfortable: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5",
        spacious: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    };

    if (!data) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-primary-800 via-accent-900 to-primary-900 flex items-center justify-center p-10">
                <div className="text-center">
                    <Fish className="w-16 h-16 text-primary-400 mx-auto mb-4 animate-pulse" />
                    <p className="text-error-400 text-2xl font-bold">Invalid Category ID</p>
                    <p className="text-light-600 mt-2">The category you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-900 via-accent-900 to-primary-800">
            <div className="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-600 border-b-4 border-primary-400">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
                
                <div className="relative p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-3">
                        <Sparkles className="w-8 h-8 text-primary-300 animate-pulse" />
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            {categoryName}
                        </h1>
                    </div>
                    <p className="text-primary-200 text-lg max-w-2xl">
                        Explore our stunning collection of {filteredData?.length || 0} marine specimens
                    </p>
                </div>
            </div>

            <div className="sticky top-0 z-10 bg-accent-800/95 backdrop-blur-md border-b border-accent-700 shadow-lg">
                <div className="p-4 md:p-6 max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full sm:max-w-md">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
                            <input
                                type="text"
                                placeholder="Search marine life..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-accent-900 border-2 border-accent-700 rounded-xl text-light-200 placeholder-accent-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all"
                            />
                        </div>

                        <div className="flex gap-2 bg-accent-900 p-1.5 rounded-lg border border-accent-700">
                            <button
                                onClick={() => setGridView("compact")}
                                className={`p-2.5 rounded-md transition-all ${
                                    gridView === "compact"
                                        ? "bg-primary-600 text-white shadow-lg"
                                        : "text-accent-400 hover:text-primary-400 hover:bg-accent-800"
                                }`}
                                title="Compact view"
                            >
                                <Grid3x3 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setGridView("comfortable")}
                                className={`p-2.5 rounded-md transition-all ${
                                    gridView === "comfortable"
                                        ? "bg-primary-600 text-white shadow-lg"
                                        : "text-accent-400 hover:text-primary-400 hover:bg-accent-800"
                                }`}
                                title="Comfortable view"
                            >
                                <LayoutGrid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setGridView("spacious")}
                                className={`p-2.5 rounded-md transition-all ${
                                    gridView === "spacious"
                                        ? "bg-primary-600 text-white shadow-lg"
                                        : "text-accent-400 hover:text-primary-400 hover:bg-accent-800"
                                }`}
                                title="Spacious view"
                            >
                                <LayoutGrid className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-10 max-w-7xl mx-auto">
                {filteredData && filteredData.length > 0 ? (
                    <div className={`grid ${gridClasses[gridView]} animate-in fade-in duration-500`}>
                        {filteredData.map((item, index) => (
                            <div
                                key={item.id}
                                className="group relative bg-accent-800 rounded-2xl overflow-hidden border-2 border-accent-700 hover:border-primary-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="relative aspect-video overflow-hidden bg-accent-900">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        priority={index < 8}
                                        quality={100}
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-accent-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>

                                <div className="p-4 bg-gradient-to-b from-accent-800 to-accent-900">
                                    <div className="flex items-center gap-2">
                                        <Fish className="w-4 h-4 text-primary-400 flex-shrink-0" />
                                        <p className="text-light-200 font-semibold text-sm md:text-base line-clamp-2 group-hover:text-primary-300 transition-colors">
                                            {item.name}
                                        </p>
                                    </div>
                                    
                                    <div className="h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <Fish className="w-16 h-16 text-accent-600 mx-auto mb-4" />
                        <p className="text-light-600 text-xl">No results found for "{searchQuery}"</p>
                        <p className="text-accent-500 mt-2">Try a different search term</p>
                    </div>
                )}
            </div>
        </div>
    );
}