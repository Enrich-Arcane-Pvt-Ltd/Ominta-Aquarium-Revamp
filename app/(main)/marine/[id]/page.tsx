"use client";

import { useParams, useRouter } from 'next/navigation';

export default function SaltWaterFishDetailsPage() {
    const { id } = useParams();

    return (
        <div>
            <h1>Detail View {id}</h1>
        </div>
    )
}