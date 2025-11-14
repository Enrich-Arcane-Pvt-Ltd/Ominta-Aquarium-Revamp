"use client";

import { Sparkles, Images, ChevronsRight, FolderOpenDot } from "lucide-react";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function Dashboard() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleFetchToken = async () => {
        try {
            const token = await localStorage.getItem('token');
            if (!token) {
                setIsLoading(true);
                router.push('/login');
            }
        } catch (error) {
            console.log('Error getting token : ', error);
        }
    }

    useEffect(() => {
        handleFetchToken();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-900 via-primary-900 to-accent-900">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                    <p className="text-white text-lg font-medium animate-pulse">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-accent-900 via-primary-900 to-accent-900 p-4 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white">
                            Admin Dashboard
                        </h1>
                    </div>
                    <p className="text-primary-300 text-lg ml-15">
                        Manage your aquarium content seamlessly
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div 
                        onClick={() => router.push('/login/dashboard/facilities')}
                        className="group relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-2xl h-64 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/30">
                        <div className="absolute inset-0 bg-white/70 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        <div className="relative flex flex-col h-full justify-between">
                            <div className="relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600"></div>
                                <div className="relative flex flex-row justify-center gap-3 items-center py-4 px-4">
                                    <div className="bg-white/20 p-2.5 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        <Images className="w-6 h-6 text-white" />
                                    </div>
                                    <h1 className="text-white font-bold text-lg tracking-wide">
                                        Facility Management
                                    </h1>
                                    <Sparkles className="w-4 h-4 text-primary-200 animate-pulse" />
                                </div>
                                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-primary-700 to-primary-600">
                                    <svg className="w-full h-full" viewBox="0 0 1200 12" preserveAspectRatio="none">
                                        <path d="M0,6 C150,12 350,0 600,6 C850,12 1050,0 1200,6 L1200,12 L0,12 Z" fill="white" fillOpacity="0.15"/>
                                    </svg>
                                </div>
                            </div>

                            <div className="flex-grow px-6 py-5">
                                <p className="text-accent-800 leading-relaxed text-[15px] group-hover:text-accent-900 transition-colors">
                                    Add, View, Edit & Delete Your Images & Videos of your Marine Facility & Fresh Water Facility.
                                </p>
                            </div>

                            <div className="relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 group-hover:from-primary-600 group-hover:to-primary-500 transition-all duration-300"></div>
                                <div className="relative flex flex-row justify-end items-center gap-1 px-4 py-3">
                                    <p className="text-white font-semibold text-sm group-hover:translate-x-[-4px] transition-transform duration-300">
                                        Click Here
                                    </p>
                                    <ChevronsRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-300 to-primary-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary-400/10 rounded-bl-[100%] group-hover:bg-primary-400/20 transition-colors duration-300"></div>
                    </div>

                    <div
                        onClick={() => router.push('/login/dashboard/content')}
                        className="group relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-2xl h-64 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/30">
                        <div className="absolute inset-0 bg-white/70 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        <div className="relative flex flex-col h-full justify-between">
                            <div className="relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600"></div>
                                <div className="relative flex flex-row justify-center gap-3 items-center py-4 px-4">
                                    <div className="bg-white/20 p-2.5 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        <FolderOpenDot className="w-6 h-6 text-white" />
                                    </div>
                                    <h1 className="text-white font-bold text-lg tracking-wide">
                                        Content Management
                                    </h1>
                                    <Sparkles className="w-4 h-4 text-primary-200 animate-pulse" />
                                </div>
                                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-primary-700 to-primary-600">
                                    <svg className="w-full h-full" viewBox="0 0 1200 12" preserveAspectRatio="none">
                                        <path d="M0,6 C150,12 350,0 600,6 C850,12 1050,0 1200,6 L1200,12 L0,12 Z" fill="white" fillOpacity="0.15"/>
                                    </svg>
                                </div>
                            </div>

                            <div className="flex-grow px-6 py-5">
                                <p className="text-accent-800 leading-relaxed text-[15px] group-hover:text-accent-900 transition-colors">
                                    Manage any content related to your Marine Facility & Fresh Water Facility.
                                </p>
                            </div>

                            <div className="relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 group-hover:from-primary-600 group-hover:to-primary-500 transition-all duration-300"></div>
                                <div className="relative flex flex-row justify-end items-center gap-1 px-4 py-3">
                                    <p className="text-white font-semibold text-sm group-hover:translate-x-[-4px] transition-transform duration-300">
                                        Click Here
                                    </p>
                                    <ChevronsRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-300 to-primary-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary-400/10 rounded-bl-[100%] group-hover:bg-primary-400/20 transition-colors duration-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
