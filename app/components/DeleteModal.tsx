"use client";

import React from "react";
import { Trash2, X } from "lucide-react";

interface DeleteModalProps {
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
    isDeleting?: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
    isOpen,
    onCancel,
    onConfirm,
    isDeleting = false,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-gradient-to-br from-primary-100 to-error-200 rounded-2xl shadow-2xl w-full max-w-md transform animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-6 border-b border-error-400">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-error-400 to-error-600 rounded-lg flex items-center justify-center">
                            <Trash2 className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-accent-900">
                            Confirm Delete
                        </h2>
                    </div>
                    <button
                        onClick={onCancel}
                        className="p-2 hover:bg-light-300 rounded-lg transition-colors duration-200"
                    >
                        <X className="w-6 h-6 text-error-600" />
                    </button>
                </div>

                <div className="p-6 text-accent-800">
                    <p className="text-lg font-medium text-justify">
                        Are you sure you want to delete this? This action cannot be
                        undone.
                    </p>
                </div>

                <div className="flex items-center justify-end gap-3 p-6 border-t border-error-400">
                    <button
                        onClick={onCancel}
                        className="px-6 py-3 bg-light-300 hover:bg-light-400 text-accent-800 font-semibold rounded-xl transition-all duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={isDeleting}
                        className="px-6 py-3 bg-gradient-to-r from-error-600 to-error-500 hover:from-error-700 hover:to-error-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-error-500/30 hover:shadow-xl hover:shadow-error-500/40 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
