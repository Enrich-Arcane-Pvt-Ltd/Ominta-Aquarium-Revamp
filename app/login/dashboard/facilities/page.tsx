"use client";

import { Search, Plus, Edit2, Trash2, Sparkles, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    updateDoc,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { ContentItem, FormData, FacilityFormData } from "@/app/types/Dashboard";
import DeleteModal from "@/app/components/DeleteModal";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import FacilityModal from "@/app/components/FacilityModal";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function FacilityPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [editId, setEditId] = useState<string | null>(null);
    const [formData, setFormData] = useState<FacilityFormData>({
        name: "",
        description: "",
        type: "image",
        file: null,
        facility: "fresh"
    });

    const collectionRef = collection(db, "facility");
    const storage = getStorage();

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditId(null);
        setFormData({ name: "", description: "", type: 'image', file: null, facility: "fresh"});
    };

    const handleSubmit = async () => {
        if (!formData.name.trim()) return;

        if (formData.name.length > 100) {
            toast.error('Facility Name should be less than 100 characters');
            return;
        }

        if (formData.description && formData.description.length > 255) {
            toast.error('Description should be less than 255 characters');
            return;
        }

        if (formData.type === 'image' && !formData.file) {
            toast.error('Please select an image');
            return;
        }

        if (formData.type === 'video' && !formData.file) {
            toast.error('Please select a video');
            return;
        }

        setIsSubmitting(true);
        try {
            let fileUrl = null;

            if (formData.file) {
                const folder = formData.type === "image" ? "images" : "videos";

                const storageRef = ref(
                    storage,
                    `facility/${folder}/${Date.now()}_${formData.file.name}`
                );

                const snapshot = await uploadBytes(storageRef, formData.file);
                fileUrl = await getDownloadURL(snapshot.ref);
            }

            if (editId) {
                const docRef = doc(db, "facility", editId);
                await updateDoc(docRef, {
                    name: formData.name,
                    description: formData.description,
                    date: new Date().toISOString().split("T")[0],
                });
            } else {
                await addDoc(collectionRef, {
                    name: formData.name,
                    description: formData.description,
                    type: formData.type,
                    facility: formData.facility,
                    fileUrl: fileUrl,
                    date: new Date().toISOString().split("T")[0],
                    createdAt: serverTimestamp(),
                });
            }
            handleCloseModal();
        } catch (err) {
            console.error("Error adding/updating content:", err);
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
                            Facility Management
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
                            
                        </span>{" "}
                        of{" "}
                        <span className="font-bold text-primary-300"></span>{" "}
                        items
                    </div>
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
        </div>
    )
}