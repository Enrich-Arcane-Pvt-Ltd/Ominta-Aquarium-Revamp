import { Data } from "@/app/types/Dashboard";
import { collection, query, where, orderBy, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

export const fetchFacilitiesByType = async (type: "image" | "video"): Promise<Data[]> => {
    const q = query(
        collection(db, "facility"),
        where("type", "==", type),
        orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    const results: Data[] = snapshot.docs.map((doc) => {
        const data = doc.data();

        return {
            id: doc.id,
            name: data.name || "",
            date: data.date || "",
            description: data.description || "",
            facility: data.facility || "",
            fileUrl: data.fileUrl || "",
            type: data.type || "",
        };
    });

    return results;
};

export const deleteFacility = async (id: string): Promise<void> => {
    try {
        const docRef = doc(db, "facility", id);
        await deleteDoc(docRef);
        toast.info('Facility Deleted Successfully !');
    } catch (error) {
        console.error("Error deleting facility:", error);
        toast.error('Error deleting facility');
    }
};