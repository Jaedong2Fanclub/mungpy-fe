"use client";

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const nextPageHandler = () => {
        router.push("/test/step");
    };

    return (
        <div>
            <p>이미지 업로드 페이지입니다.</p>
            <button onClick={nextPageHandler}>다음 페이지로 이동</button>
        </div>
    );
}
