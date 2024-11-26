"use client";

import TraitSelector from "@/components/TraitSelector";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const nextPageHandler = () => {
        router.push("/test/result");
    };

    return (
        <div>
            <h1>사용자님의 성향을 체크해주세요!</h1>
            <p>메이트를 고르는데 중요해요</p>
            <div>
                <TraitSelector />
            </div>
            <button onClick={nextPageHandler}>결과 페이지로 이동</button>
        </div>
    );
}
