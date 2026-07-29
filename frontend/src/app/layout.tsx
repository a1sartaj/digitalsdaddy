import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { Roboto, Special_Gothic } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-roboto'
})

const century = Special_Gothic({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-century'
})


export const metadata: Metadata = {
    title: {
        default: "Digitalsdaddy | AI, Web Engineering & Digital Growth Agency",
        template: "%s | digitalsdaddy.in",
    },
    description:
        "digitalsdaddy.in is an enterprise tech agency specializing in AI integration, modern full-stack web development, mobile apps, and performance marketing solutions.",
    keywords: [
        "digitalsdaddy",
        "digitalsdaddy.in",
        "AI Integration",
        "Web Engineering",
        "Next.js Development",
        "Mobile App Development",
        "Performance Marketing",
        "Hire Developers",
    ],
    authors: [{ name: "digitalsdaddy" }],
    creator: "digitalsdaddy",
    metadataBase: new URL("https://digitalsdaddy.in"),
    openGraph: {
        title: "digitalsdaddy.in | AI & Digital Engineering Solutions",
        description:
            "Transforming business capabilities through cutting-edge generative AI, full-stack web applications, and data-driven marketing strategy.",
        url: "https://digitalsdaddy.in",
        siteName: "digitalsdaddy.in",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "digitalsdaddy.in | AI & Digital Engineering Solutions",
        description:
            "Full-stack web applications, custom AI integrations, and digital growth systems.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (

        <html
            lang="en"
            suppressHydrationWarning
            className={`${roboto.variable} ${century.variable}h-full antialiased`}
        >
            <body className={`min-h-screen flex flex-col  antialiased relative `}>

                {/* Global Application Header */}
                <Header />


                {/* Main Content Render Area */}
                <main className="flex-grow pt-16">
                    {children}
                </main>

                {/* Global Application Footer */}
                <Footer />

            </body>
        </html>
    );
}