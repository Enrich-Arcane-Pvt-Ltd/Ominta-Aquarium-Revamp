"use client";

import { Search, Plus, Sparkles, ImageIcon, Film, Trash, SquarePen } from "lucide-react";
import { useEffect, useState } from "react";
import {
    collection,
    addDoc, doc, updateDoc,
    serverTimestamp
} from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { FacilityFormData, Data } from "@/app/types/Dashboard";
import { toast } from "react-toastify";
import FacilityModal from "@/app/components/FacilityModal";
import { fetchFacilitiesByType, deleteFacility } from "@/app/firebase/hooks";
import DeleteModal from "@/app/components/DeleteModal";

export default function FacilityPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [images, setImages] = useState<Data[]>([]);
    const [videos, setVideos] = useState<Data[]>([]);
    const [editId, setEditId] = useState<string | null>(null);
    const [formData, setFormData] = useState<FacilityFormData>({
        name: "",
        description: "",
        type: "image",
        file: null,
        facility: "fresh",
        fileUrl: undefined,
    });
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const collectionRef = collection(db, "facility");
    
    const handleFetch = async () => {
        const images = await fetchFacilitiesByType("image");
        setImages(images);
        const videos = await fetchFacilitiesByType("video");
        setVideos(videos);
    }

    useEffect(() => {
        handleFetch();
    }, []);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditId(null);
        setFormData({ name: "", description: "", type: 'image', file: null, facility: "fresh", fileUrl: undefined,});
    };

    const handleSubmit = async () => {
        if (!formData.name.trim()) {
            toast.error("Facility name is required");
            return;
        }

        if (formData.name.length > 100) {
            toast.error("Facility Name should be less than 100 characters");
            return;
        }

        if (formData.description && formData.description.length > 255) {
            toast.error("Description should be less than 255 characters");
            return;
        }

        if (!editId && !formData.file) {
            toast.error(
            `Please select a ${formData.type === "image" ? "image" : "video"}`
            );
            return;
        }

        setIsSubmitting(true);

        try {
            let fileUrl: string | null = formData.fileUrl || null;

            if (formData.file) {
                const formDataObj = new FormData();
                formDataObj.append("file", formData.file);
                formDataObj.append("token", "my-secret-key");

                if (editId && formData.fileUrl) {
                    formDataObj.append("oldUrl", formData.fileUrl);
                }

                const response = await fetch("https://enricharcane.info/upload.php", {
                    method: "POST",
                    body: formDataObj,
                });

                const data = await response.json();                

                if (!data.success) {
                    throw new Error(data.error || "Upload failed");
                }

                fileUrl = data.fileUrl;
            }

            const date = new Date().toISOString().split("T")[0];

            if (editId) {
                const docRef = doc(db, "facility", editId);

                const payload: any = {
                    name: formData.name,
                    description: formData.description || "",
                    type: formData.type,
                    facility: formData.facility,
                    date,
                };

                if (fileUrl) {
                    payload.fileUrl = fileUrl;
                }

                await updateDoc(docRef, payload);
                toast.success("Facility updated successfully");
            } else {
                await addDoc(collectionRef, {
                    name: formData.name,
                    description: formData.description || "",
                    type: formData.type,
                    facility: formData.facility,
                    fileUrl,
                    date,
                    createdAt: serverTimestamp(),
                });
                toast.success("Facility created successfully");
            }

            handleCloseModal();
            handleFetch();
        } catch (err) {
            console.error("Error adding/updating facility:", err);
            toast.error("Failed to save the facility");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleAdd = () => {
        setEditId(null);
        setFormData({ name: "", description: "", type: "image", file: null, facility: "fresh" });
        setIsModalOpen(true);
    };

    const filteredImages = images.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description || "").toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredVideos = videos.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description || "").toLowerCase().includes(searchQuery.toLowerCase())
    );

    const imageCount = filteredImages.length;
    const videoCount = filteredVideos.length;
    const totalCount = images.length + videos.length;

    const handleDelete = (id: string) => {
        setDeleteId(id);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!deleteId) return;
        setIsDeleting(true);
        try {
            await deleteFacility(deleteId);
            await handleFetch();
        } catch (err) {
            console.error("Error deleting item:", err);
        } finally {
            setDeleteId(null);
            setIsDeleting(false);
            setIsDeleteModalOpen(false);
        }
    };

    const handleCancelDelete = () => {
        setIsDeleteModalOpen(false);
        setDeleteId(null);
    };

    const handleEdit = (item: Data) => {
        setEditId(item.id);
        setFormData({
            name: item.name,
            description: item.description || "",
            type: item.type === 'image' ? 'image' : 'video',
            file: null,
            facility: item.facility === 'fresh' ? 'fresh' : item.facility === 'marine' ? 'marine' : 'other',
            fileUrl: item.fileUrl,
        });
        setIsModalOpen(true);
    };


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
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Our Facilities
                        </h1>
                    </div>
                    <p className="text-primary-300 text-lg ml-15">
                        Manage your aquarium facilities seamlessly
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-6 border border-white/20 shadow-2xl">
                    <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400 group-focus-within:text-primary-300 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search your content..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:outline-none focus:bg-white/20 focus:border-primary-400 transition-all duration-200 text-white placeholder-white/50"
                            />
                        </div>

                        <button
                            onClick={handleAdd}
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 transform hover:scale-105 active:scale-95"
                        >
                            <Plus className="w-5 h-5" />
                            Add New
                        </button>
                    </div>

                    <div className="mt-4 text-sm text-primary-200">
                        Showing{" "}
                        <span className="font-bold text-primary-300">
                            {imageCount + videoCount}
                        </span>{" "}
                        of{" "}
                        <span className="font-bold text-primary-300">{totalCount}</span>{" "}
                        items
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center border border-primary-400/30">
                            <ImageIcon className="w-5 h-5 text-primary-300" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">
                            Image Gallery
                        </h2>
                        <div className="ml-auto bg-primary-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-400/30">
                            <span className="text-primary-200 font-semibold">{imageCount} images</span>
                        </div>
                    </div>

                    {filteredImages.length === 0 ? (
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-12 border border-white/20 shadow-2xl text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ImageIcon className="w-10 h-10 text-primary-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">No images found</h3>
                            <p className="text-primary-300">
                                {searchQuery
                                    ? "Try adjusting your search query"
                                    : "Start by adding your first image"}
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredImages.map((item) => (
                                <div
                                    key={item.id}
                                    className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105 hover:border-primary-400/50"
                                >
                                    <div className="relative aspect-video bg-gradient-to-br from-primary-900/50 to-accent-900/50 overflow-hidden">
                                        <img
                                            src={item.fileUrl}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-3 right-3 bg-primary-500/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                                            <ImageIcon className="w-3 h-3 text-white" />
                                            <span className="text-xs font-bold text-white">Image</span>
                                        </div>
                                        <div className="absolute top-3 left-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                                                    item.facility === "fresh"
                                                        ? "bg-blue-500/90"
                                                        : "bg-cyan-500/90"
                                                } backdrop-blur-sm`}
                                            >
                                                {item.facility === "fresh" ? "Fresh Water" : "Marine"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                                            {item.name}
                                        </h3>
                                        {item.description && (
                                            <p className="text-primary-200 text-sm mb-3 line-clamp-2">
                                                {item.description}
                                            </p>
                                        )}
                                        <div className="flex items-center justify-between text-xs text-primary-300">
                                            <span>{item.date}</span>
                                            <div className="flex items-center justify-between">
                                                <div className="bg-error-300 p-2 rounded-lg mx-2 cursor-pointer" onClick={() => handleDelete(item.id)}>
                                                    <Trash className="text-error-800 w-6 h-6" />
                                                </div>
                                                <div className="bg-primary-300 p-2 rounded-lg mx-2 cursor-pointer" onClick={() => handleEdit(item)}>
                                                    <SquarePen className="text-primary-800 w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center border border-primary-400/30">
                            <Film className="w-5 h-5 text-primary-300" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">
                            Video Gallery
                        </h2>
                        <div className="ml-auto bg-primary-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-400/30">
                            <span className="text-primary-200 font-semibold">{videoCount} videos</span>
                        </div>
                    </div>

                    {filteredVideos.length === 0 ? (
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-12 border border-white/20 shadow-2xl text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Film className="w-10 h-10 text-primary-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">No videos found</h3>
                            <p className="text-primary-300">
                                {searchQuery
                                    ? "Try adjusting your search query"
                                    : "Start by adding your first video"}
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredVideos.map((item) => (
                                <div
                                    key={item.id}
                                    className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105 hover:border-primary-400/50"
                                >
                                    <div className="relative aspect-video bg-gradient-to-br from-primary-900/50 to-accent-900/50 overflow-hidden">
                                        <video
                                            src={item.fileUrl}
                                            controls
                                            className="w-full h-full object-cover"
                                            preload="metadata"
                                        />
                                        <div className="absolute top-3 right-3 bg-primary-500/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 pointer-events-none">
                                            <Film className="w-3 h-3 text-white" />
                                            <span className="text-xs font-bold text-white">Video</span>
                                        </div>
                                        <div className="absolute top-3 left-3 pointer-events-none">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                                                    item.facility === "fresh"
                                                        ? "bg-blue-500/90"
                                                        : "bg-cyan-500/90"
                                                } backdrop-blur-sm`}
                                            >
                                                {item.facility === "fresh" ? "Fresh Water" : "Marine"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                                            {item.name}
                                        </h3>
                                        {item.description && (
                                            <p className="text-primary-200 text-sm mb-3 line-clamp-2">
                                                {item.description}
                                            </p>
                                        )}
                                        <div className="flex items-center justify-between text-xs text-primary-300">
                                            <span>{item.date}</span>
                                            <div className="flex items-center justify-between">
                                                <div className="bg-error-300 p-2 rounded-lg mx-2 cursor-pointer"  onClick={() => handleDelete(item.id)}>
                                                    <Trash className="text-error-800 w-6 h-6" />
                                                </div>
                                                <div className="bg-primary-300 p-2 rounded-lg mx-2 cursor-pointer" onClick={() => handleEdit(item)}>
                                                    <SquarePen className="text-primary-800 w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <FacilityModal
                    isOpen={isModalOpen}
                    editId={editId}
                    formData={formData}
                    isSubmitting={isSubmitting}
                    onClose={handleCloseModal}
                    onChange={setFormData}
                    onSubmit={handleSubmit}
                />
            )}

            {isDeleteModalOpen && (
                <DeleteModal
                    isOpen={isDeleteModalOpen}
                    onCancel={handleCancelDelete}
                    onConfirm={handleConfirmDelete}
                    isDeleting={isDeleting}
                />
            )}
        </div>
    );
}