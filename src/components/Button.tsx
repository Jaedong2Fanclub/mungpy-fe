"use client";

interface UploadButtonProps {
    image: string | null;
    handleImageUpload: () => void;
}

// 이미지 업로드 버튼
export default function UploadButton({
    image,
    handleImageUpload,
}: UploadButtonProps) {
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
