import Navbar from "./Navbar";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-40 select-none">
            {/* 1. Top Fixed Navbar */}
            <Navbar />

            {/* 2. Scroll-Sensitive Breadcrumb Navigation Below Navbar */}
            <Breadcrumbs />
        </header>
    );
}