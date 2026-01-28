"use client";

import { Search, Plus, Edit2, Trash2, Sparkles, X, MoveLeft } from "lucide-react";
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
import { ContentItem, FormData } from "@/app/types/Dashboard";
import ContentModal from "@/app/components/ContentModal";
import DeleteModal from "@/app/components/DeleteModal";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ContentPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const [editId, setEditId] = useState<string | null>(null);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [items, setItems] = useState<ContentItem[]>([]);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        description: "",
    });

    const collectionRef = collection(db, "contents");
    const router = useRouter();

    const fetchToken = async () => {
        try {
            const token = await localStorage.getItem('token');
            if (!token) {
                router.push('/login');
            }
        } catch (error) {
            console.log('Error getting token : ', error);
        }
    }

    useEffect(() => {
        fetchToken();
    }, [fetchToken]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                ...(doc.data() as ContentItem),
                id: doc.id,
            }));

            setItems(data.sort((a, b) => (a.date < b.date ? 1 : -1)));
        });

        return () => unsubscribe();
    }, []);

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSubmit = async () => {
        if (!formData.name.trim()) return;

        if (formData.name.length > 100) {
            toast.error('Content Name should be less than 100 characters');
            return;
        }

        if (formData.description && formData?.description.length > 255) {
            toast.error('Description should be less than 255 characters');
            return;
        }

        setIsSubmitting(true);
        try {
            if (editId) {
                const docRef = doc(db, "contents", editId);
                await updateDoc(docRef, {
                    name: formData.name,
                    description: formData.description,
                    date: new Date().toISOString().split("T")[0],
                });
            } else {
                await addDoc(collectionRef, {
                    name: formData.name,
                    description: formData.description,
                    date: new Date().toISOString().split("T")[0],
                    createdAt: serverTimestamp(),
                });
            }
            handleCloseModal();
        } catch (err) {
            console.error("Error adding/updating content:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = (id: string) => {
        setDeleteId(id);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!deleteId) return;
        setIsDeleting(true);
        try {
            await deleteDoc(doc(db, "contents", deleteId));
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

    const handleEdit = (id: string) => {
        const item = items.find((it) => it.id === id);
        if (!item) return;
        setEditId(id);
        setFormData({
            name: item.name,
            description: item.description || "",
        });
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setEditId(null);
        setFormData({ name: "", description: "" });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditId(null);
        setFormData({ name: "", description: "" });
    };

    const toggleExpand = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
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
                <div className="flex flex-row justify-between items-center">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">
                                Content Management
                            </h1>
                        </div>
                        <p className="text-primary-300 text-lg ml-15">
                            Manage your aquarium content seamlessly
                        </p>
                    </div>
                    <div>
                        <button className="flex flex-row cursor-pointer font-semibold" onClick={() => router.back()}>
                            <MoveLeft className="mr-2" />
                            Back
                        </button>
                    </div>
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
                            {filteredItems.length}
                        </span>{" "}
                        of{" "}
                        <span className="font-bold text-primary-300">{items.length}</span>{" "}
                        items
                    </div>
                </div>

                <div className="grid gap-4">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => toggleExpand(item.id)}
                                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 cursor-pointer hover:bg-white/15 hover:border-primary-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">{index + 1}. {item.name}</h3>
                                        <p className="text-primary-300 text-sm">{item.date || "No date"}</p>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${
                                                expandedId === item.id ? "max-h-40 mt-3" : "max-h-0"
                                            }`}
                                        >
                                            <p className="text-primary-100 text-sm leading-relaxed">
                                                {item.description ? item.description : "No description available."}
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center gap-3"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            onClick={() => handleEdit(item.id)}
                                            className="flex items-center gap-2 px-5 py-2.5 bg-primary-500/20 hover:bg-primary-500/30 text-primary-300 hover:text-primary-200 rounded-lg transition-all duration-200 border border-primary-400/30 hover:border-primary-400/50 font-semibold"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="flex items-center gap-2 px-5 py-2.5 bg-error-500/20 hover:bg-error-500/30 text-error-300 hover:text-error-200 rounded-lg transition-all duration-200 border border-error-400/30 hover:border-error-400/50 font-semibold"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-12 text-center border border-white/20">
                            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-primary-400" />
                            </div>
                            <p className="text-white text-lg font-semibold mb-2">
                                No items found
                            </p>
                            <p className="text-primary-300">
                                Try adjusting your search query
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <ContentModal
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
