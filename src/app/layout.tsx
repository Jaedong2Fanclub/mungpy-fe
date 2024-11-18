import React from "react";
import style from "./layout.module.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className={style.container}>
                    <header>헤더</header>
                    <main>{children}</main>
                    <footer>제작 @zotwoehd</footer>
                </div>
            </body>
        </html>
    );
}
