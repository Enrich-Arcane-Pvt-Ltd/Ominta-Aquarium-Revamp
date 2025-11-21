export interface ContentItem {
    id: string;
    name: string;
    date: string;
    description?: string;
}

export interface FormData {
    name: string;
    description?: string;
}

export interface FacilityFormData {
    name: string;
    description?: string;
    type: "image" | "video";
    file: File | null;
    facility: "fresh" | "marine" | "other",
    fileUrl?: string;
}

export interface Data {
    id: string;
    date: string;
    description?: string;
    facility: string;
    fileUrl: string;
    name: string;
    type: string;
}

export interface Contact {
    name: string;
    email: string;
    message: string;
}