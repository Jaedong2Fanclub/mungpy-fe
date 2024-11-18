"use client";

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const nextPageHandler = () => {
        router.push("/test/result");
    };

    return (
        <div>
            <p>성향 선택 페이지입니다.</p>
            <button onClick={nextPageHandler}>결과 페이지로 이동</button>
        </div>
    );
}
