"use client";

import ImageUpload from "@/components/ImageUpload";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return (
        <div>
            <ImageUpload />
            <button onClick={() => router.push("/test/step")}>이동</button>
        </div>
    );
}
