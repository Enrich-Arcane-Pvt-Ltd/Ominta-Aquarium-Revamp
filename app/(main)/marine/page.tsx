"use client";

import { useState } from 'react';
import { Search, Grid3x3, LayoutGrid, Fish, Waves } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SaltWaterFishPage() {
    const data = [
        {id: 1, image: '/Images/Marine/Anemone.jpg', name: 'Anemone'},
        {id: 2, image: '/Images/Marine/Angels.jpg', name: 'Angels'},
        {id: 3, image: '/Images/Marine/Anthias.jpg', name: 'Anthias'},
        {id: 4, image: '/Images/Marine/Butterfly.jpg', name: 'Butterfly'},
        {id: 5, image: '/Images/Marine/ClownFish.jpg', name: 'ClownFish'},
        {id: 6, image: '/Images/Marine/CrabFish.jpg', name: 'CrabFish'},
        {id: 7, image: '/Images/Marine/Cucumber.jpg', name: 'Cucumber'},
        {id: 8, image: '/Images/Marine/Damsel.jpg', name: 'Damsel'},
        {id: 9, image: '/Images/Marine/Eals.jpg', name: 'Eals'},
        {id: 10, image: '/Images/Marine/Gobies.jpg', name: 'Gobies'},
        {id: 11, image: '/Images/Marine/Grouper-Snapper.jpg', name: 'Grouper-Snapper'},
        {id: 12, image: '/Images/Marine/HawkFish.jpg', name: 'HawkFish'},
        {id: 13, image: '/Images/Marine/Puffers.jpg', name: 'Puffers'},
        {id: 14, image: '/Images/Marine/RockFish.jpg', name: 'RockFish'},
        {id: 15, image: '/Images/Marine/Shark.jpg', name: 'Shark'},
        {id: 16, image: '/Images/Marine/Shrimp.jpg', name: 'Shrimp'},
        {id: 17, image: '/Images/Marine/Slug.jpg', name: 'Slug'},
        {id: 18, image: '/Images/Marine/StarFish.jpg', name: 'StarFish'},
        {id: 19, image: '/Images/Marine/Surgeon.jpg', name: 'Surgeon'},
        {id: 20, image: '/Images/Marine/Triggers.jpg', name: 'Triggers'},
        {id: 21, image: '/Images/Marine/Urchin.jpg', name: 'Urchin'},
        {id: 22, image: '/Images/Marine/Wrasse.jpg', name: 'Wrasse'},
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [gridView, setGridView] = useState('small');
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const router = useRouter();

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getGridClass = () => {
        switch(gridView) {
            case 'small':
                return 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6';
            case 'medium':
                return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
            case 'large':
            default:
                return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
        }
    };

    const handleNavigate = (id: number) => {
        router.push(`/marine/${id}`);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-accent-900 via-primary-900 to-accent-800">
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 pt-12 pb-8 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <Waves className="w-10 h-10 text-primary-400 animate-bounce" />
                        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-cyan-400 to-primary-500">
                            Salt Water Fish Gallery
                        </h1>
                        <Fish className="w-10 h-10 text-cyan-400 animate-bounce delay-300" />
                    </div>
                    <p className="text-center text-light-400 text-lg">Explore the wonders of marine life</p>
                </div>
            </div>

            <div className="relative z-10 px-4 md:px-8 mb-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-accent-800/50 backdrop-blur-xl rounded-2xl border border-primary-800/30 p-6 shadow-2xl">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div className="relative flex-1 w-full md:max-w-md">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search marine species..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-accent-900/50 border border-primary-700/30 rounded-xl text-light-100 placeholder-light-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                                />
                            </div>

                            <div className="flex gap-2 bg-accent-900/50 rounded-xl p-1">
                                <button
                                    onClick={() => setGridView('small')}
                                    className={`p-2 rounded-lg transition-all ${
                                        gridView === 'small'
                                            ? 'bg-primary-600 text-white shadow-lg'
                                            : 'text-light-500 hover:text-primary-400 hover:bg-accent-800'
                                    }`}
                                >
                                    <Grid3x3 className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setGridView('medium')}
                                    className={`p-2 rounded-lg transition-all ${
                                        gridView === 'medium'
                                            ? 'bg-primary-600 text-white shadow-lg'
                                            : 'text-light-500 hover:text-primary-400 hover:bg-accent-800'
                                    }`}
                                >
                                    <LayoutGrid className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setGridView('large')}
                                    className={`p-2 rounded-lg transition-all ${
                                        gridView === 'large'
                                            ? 'bg-primary-600 text-white shadow-lg'
                                            : 'text-light-500 hover:text-primary-400 hover:bg-accent-800'
                                    }`}
                                >
                                    <LayoutGrid className="w-5 h-5 scale-125" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 text-center text-light-500">
                            Showing <span className="text-primary-400 font-semibold">{filteredData.length}</span> of {data.length} species
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 px-4 md:px-8 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className={`grid ${getGridClass()} gap-6`}>
                        {filteredData.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => handleNavigate(item.id)}
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-accent-800/30 backdrop-blur-sm border border-primary-800/20 shadow-xl hover:shadow-2xl hover:shadow-primary-900/50 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary-900/30 to-accent-900/30">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="100vw"
                                        className="transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-accent-900 via-accent-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                    
                                    <div className={`absolute inset-0 border-2 border-primary-400 rounded-2xl transition-all duration-500 ${
                                        hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                    }`}></div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-500">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg group-hover:text-primary-300 transition-colors">
                                            {item.name}
                                        </h3>
                                        <Fish className={`w-6 h-6 text-primary-400 transition-all duration-500 ${
                                            hoveredId === item.id ? 'rotate-12 scale-110' : ''
                                        }`} />
                                    </div>
                                    
                                    <div className={`mt-2 overflow-hidden transition-all duration-500 ${
                                        hoveredId === item.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                        <p className="text-sm text-light-300">
                                            Marine Species #{item.id}
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>

                    {filteredData.length === 0 && (
                        <div className="text-center py-20">
                            <Fish className="w-16 h-16 text-primary-700 mx-auto mb-4 opacity-50" />
                            <p className="text-light-500 text-xl">No marine species found matching "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}