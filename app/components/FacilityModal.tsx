"use client";

import { Plus, X } from "lucide-react";
import { FacilityFormData } from "@/app/types/Dashboard";

interface FacilityModalProps {
    isOpen: boolean;
    editId: string | null;
    formData: FacilityFormData;
    isSubmitting: boolean;
    onClose: () => void;
    onChange: (data: FacilityFormData) => void;
    onSubmit: () => void;
}

export default function FacilityModal({
    isOpen,
    editId,
    formData,
    isSubmitting,
    onClose,
    onChange,
    onSubmit,
}: FacilityModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-gradient-to-br from-primary-100 to-primary-700 rounded-2xl shadow-2xl w-full max-w-lg transform animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-6 border-b border-light-400">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                            <Plus className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-accent-900">
                            {editId ? "Edit Facility" : "Add New Facility"}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-light-300 rounded-lg transition-colors duration-200"
                    >
                        <X className="w-6 h-6 text-primary-800" />
                    </button>
                </div>

                <div className="p-6 space-y-5">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-accent-800 mb-2"
                        >
                            Name <span className="text-error-500">*</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => onChange({ ...formData, name: e.target.value })}
                            placeholder="Enter content name"
                            className="w-full px-4 py-3 bg-white border-2 border-light-400 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-accent-900"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-semibold text-accent-800 mb-2"
                        >
                            Description (Optional)
                        </label>
                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) =>
                                onChange({ ...formData, description: e.target.value })
                            }
                            placeholder="Enter description (optional)"
                            rows={4}
                            className="w-full px-4 py-3 bg-white border-2 border-light-400 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-accent-900 resize-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-accent-800 mb-2">
                            Type <span className="text-error-500">*</span>
                        </label>

                        <select
                            value={formData.type}
                            onChange={(e) =>
                            onChange({ ...formData, type: e.target.value as "image" | "video", file: null })
                            }
                            className="w-full px-4 py-3 bg-white border-2 border-light-400 rounded-xl 
                                    focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                                    transition-all duration-200 text-accent-900"
                        >
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-accent-800 mb-2">
                            Facility <span className="text-error-500">*</span>
                        </label>

                        <select
                            value={formData.facility}
                            onChange={(e) =>
                            onChange({ ...formData, facility: e.target.value as "fresh" | "marine" | "other", file: null })
                            }
                            className="w-full px-4 py-3 bg-white border-2 border-light-400 rounded-xl 
                                    focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                                    transition-all duration-200 text-accent-900"
                        >
                            <option value="fresh">Fresh Water Facility</option>
                            <option value="marine">Marine Facility</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-accent-800 mb-2">
                            {formData.type === "image" ? "Upload Image" : "Upload Video"} <span className="text-error-500">*</span>
                        </label>

                        <input
                            type="file"
                            accept={formData.type === "image" ? "image/*" : "video/*"}
                            onChange={(e) =>
                            onChange({ ...formData, file: e.target.files?.[0] || null })
                            }
                            className="w-full px-4 py-3 bg-white border-2 border-light-400 rounded-xl 
                                    focus:outline-none focus:border-primary-500 focus:ring-2 
                                    focus:ring-primary-200 transition-all duration-200 text-accent-900"
                        />
                    </div>

                </div>

                <div className="flex items-center justify-end gap-3 p-6 border-t border-light-400">
                    <button
                        onClick={onClose}
                        className="px-6 py-3 bg-light-300 hover:bg-light-400 text-accent-800 font-semibold rounded-xl transition-all duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSubmit}
                        disabled={isSubmitting}
                        className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 disabled:transform-none"
                    >
                        {isSubmitting
                        ? editId
                            ? "Updating..."
                            : "Creating..."
                        : editId
                        ? "Update"
                        : "Create"}
                    </button>
                </div>
            </div>
        </div>
    );
}
