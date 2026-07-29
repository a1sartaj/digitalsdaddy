"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const [isShow, setIsShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  // Split URL path into segments
  const pathSegments = pathname.split("/").filter((item) => item !== "");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide breadcrumb on scroll down past 50px threshold
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsShow(false);
      }
      // Show breadcrumb on scroll up
      else if (currentScrollY < lastScrollY) {
        setIsShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Do not render breadcrumbs on homepage
  if (pathSegments.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`w-full pt-20 sm:pt-24 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-40 ${
        isShow
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      {/* Container: Max-width 1600px with px-4 lg:px-8 */}
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--card-bg)]/80 backdrop-blur-md border border-[#355396]/30 shadow-md text-[var(--foreground)]">
          <ol className="flex items-center flex-wrap gap-2 text-[14px] font-normal">

            {/* Base Homepage Link */}
            <li className="flex items-center">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-[var(--muted-text)] hover:text-[#a67c00] transition-colors tracking-[1px]"
              >
                <Home className="w-4 h-4 text-[#a67c00]" />
                <span className="font-medium">Home</span>
              </Link>
            </li>

            {/* Dynamic Path Segments */}
            {pathSegments.map((segment, index) => {
              const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
              const isLast = index === pathSegments.length - 1;

              const formatText = segment
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase());

              return (
                <li key={href} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#355396] shrink-0" />

                  {isLast ? (
                    <span
                      className="text-[#a67c00] font-semibold tracking-[1.5px]"
                      aria-current="page"
                    >
                      {formatText}
                    </span>
                  ) : (
                    <Link
                      href={href}
                      className="text-[var(--muted-text)] hover:text-[#355396] transition-colors tracking-[1px] font-medium"
                    >
                      {formatText}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
}