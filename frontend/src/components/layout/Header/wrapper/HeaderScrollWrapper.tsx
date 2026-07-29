"use client";

import React, { useEffect, useState } from "react";

export default function HeaderScrollWrapper({ children }: { children: React.ReactNode }) {
    const [isSticky, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isSticky 
                    ? "py-2 bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-md" 
                    : "py-4 bg-transparent"
            }`}
        >
            {children}
        </div>
    );
}