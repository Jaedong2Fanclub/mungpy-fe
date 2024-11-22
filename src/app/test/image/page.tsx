"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function ImageUploadPage() {
    const [image, setImage] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);

    // 파일 선택 후 미리보기
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // 이미지를 백엔드로 전송
    const handleImageUpload = async () => {
        if (file) {
            const formData = new FormData();
            formData.append("image", file);

            try {
                // 이미지 업로드를 위한 POST 요청
                const response = await axios.post("/image/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                console.log("이미지 업로드 성공:", response.data);
            } catch (error) {
                console.error("이미지 업로드 실패:", error);
            }
        }
    };

    return (
        <div>
            <h1>사용자님의 이미지를 첨부해주세요.</h1>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }} // 파일 선택 input 숨기기
                id="image-upload"
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "100px 0",
                }}
            >
                <label htmlFor="image-upload">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "250px",
                            height: "250px",
                            borderRadius: "50%",
                            backgroundColor: image ? "transparent" : "#D3D3D3",
                            overflow: "hidden",
                            cursor: "pointer",
                            position: "relative",
                        }}
                    >
                        {image ? (
                            <Image
                                src={image}
                                alt="미리보기"
                                layout="fill"
                                objectFit="cover"
                            />
                        ) : (
                            <span
                                style={{
                                    color: "#fff",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                이미지 선택
                            </span>
                        )}
                    </div>
                </label>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* 버튼 활성화 및 색상 변경 */}
                {image && (
                    <button
                        style={{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "15px",
                            cursor: "pointer",
                        }}
                        onClick={handleImageUpload}
                    >
                        다음
                    </button>
                )}

                {/* 이미지가 없을 때 비활성화된 버튼 */}
                {!image && (
                    <button
                        style={{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "#CCCCCC",
                            color: "#888888",
                            border: "none",
                            borderRadius: "15px",
                            cursor: "not-allowed",
                        }}
                        disabled
                    >
                        다음
                    </button>
                )}
            </div>
        </div>
    );
}
