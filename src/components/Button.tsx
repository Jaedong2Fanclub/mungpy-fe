"use client";

interface UploadButtonProps {
    image: string | null;
    handleImageUpload: () => void;
}

interface TraitButtonProps {
    trait: string;
    isSelected: boolean;
    onClick: () => void;
}

interface TraitSubmitButtonProps {
    isEnabled: boolean;
    onClick: () => void;
}

// 이미지 업로드 버튼
export function UploadButton({ image, handleImageUpload }: UploadButtonProps) {
    return (
        <>
            {image ? (
                <button className="active" onClick={handleImageUpload}>
                    다음
                </button>
            ) : (
                <button className="inactive" disabled>
                    다음
                </button>
            )}
        </>
    );
}

// 성향 선택 버튼
export function TraitButton({ trait, isSelected, onClick }: TraitButtonProps) {
    return (
        <button
            onClick={onClick}
            style={{
                width: "100px",
                height: "45px",
                padding: "10px 15px",
                borderRadius: "30px",
                fontSize: "15px",
                border: isSelected ? "none" : "1px solid #ccc",
                backgroundColor: isSelected ? "#4caf50" : "#fff",
                color: isSelected ? "white" : "#555",
                cursor: "pointer",
            }}
        >
            {trait}
        </button>
    );
}

// 선택완료 버튼
export function TraitSubmitButton({
    isEnabled,
    onClick,
}: TraitSubmitButtonProps) {
    return (
        <button
            className={isEnabled ? "active" : "inactive"}
            onClick={onClick}
            disabled={!isEnabled}
        >
            선택완료
        </button>
    );
}
