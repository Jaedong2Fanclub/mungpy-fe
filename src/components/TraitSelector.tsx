import React, { useState } from "react";
import axios from "axios";
import { TraitButton, TraitSubmitButton } from "./Button";
import "../styles/TraitSelector.scss";

const traits = [
    "사교적인",
    "낙관적",
    "예민보스",
    "돈감각체",
    "의존적",
    "알잘딱깔센",
    "독고다이",
    "독립적",
    "에너자이저",
    "도도시크",
    "조용함",
    "집순이",
    "활발함",
    "말수없음",
];

export default function TraitSelector() {
    const [selectedTraits, setSelectedTraits] = useState<string[]>([]);

    // 성향 토글 함수
    const toggleTrait = (trait: string) => {
        setSelectedTraits(
            (prev) =>
                prev.includes(trait)
                    ? prev.filter((t) => t !== trait) // 선택 해제
                    : [...prev, trait] // 선택 추가
        );
    };

    // 성향 제출 함수
    const handleSubmit = async () => {
        try {
            const response = await axios.post("/api/traits", {
                traits: selectedTraits,
            });
            if (response.status === 200) {
                alert("성향 데이터가 성공적으로 전달되었습니다!");
            }
        } catch (error) {
            console.error("데이터 전송 실패:", error);
            alert("성향 데이터를 전송하는데 실패했습니다.");
        }
    };

    return (
        <div className="trait-selector">
            <div className="traits-container">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px",
                    }}
                >
                    {traits.map((trait) => (
                        <TraitButton
                            key={trait}
                            trait={trait}
                            isSelected={selectedTraits.includes(trait)}
                            onClick={() => toggleTrait(trait)}
                        />
                    ))}
                </div>
            </div>

            <TraitSubmitButton
                isEnabled={selectedTraits.length > 0}
                onClick={handleSubmit}
            />
        </div>
    );
}
