"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { UploadButton } from "./Button";
import "../styles/ImageUpload.scss";

export default function ImageUpload() {
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
        <div className="container">
            <h1>사용자님의 이미지를 첨부해주세요.</h1>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }} // 파일 선택 input 숨기기
                id="image-upload"
            />
            <div className="input-container">
                <label htmlFor="image-upload">
                    <div
                        className={`upload-box ${
                            image ? "image-selected" : ""
                        }`}
                    >
                        {image ? (
                            <Image
                                src={image}
                                alt="미리보기"
                                layout="fill"
                                objectFit="cover"
                            />
                        ) : (
                            <span>이미지 선택</span>
                        )}
                    </div>
                </label>
            </div>

            <div className="button-container">
                <UploadButton
                    image={image}
                    handleImageUpload={handleImageUpload}
                />
            </div>
        </div>
    );
}
