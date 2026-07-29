import CompanySlider from "@/features/home/components/CompanySlider";
import Hero from "@/features/home/components/Hero";
import WhatWeDoSection from "@/features/home/components/WhatWeDoSection";
import WhoWeAreSection from "@/features/home/components/WhoWeAreSection";
import HowWeWorkSection from "@/features/home/components/HowWeWorkSection";
import WhyChooseUsSection from "@/features/home/components/WhyChooseUsSection";
import TechStackSection from "@/features/home/components/TechStackSection";
import TestimonialsSection from "@/features/home/components/Testimonials";
import InsightsSection from "@/features/home/components/InsightsSection";
import FaqSection from "@/features/home/components/FaqSection";
import GetInTouchSection from "@/features/home/components/GetInTouchSection";
import ProjectDeliverSection from "@/features/home/components/ProjectDeliverSection";

export default function Home() {
    return (
        <>
            <Hero />
            <CompanySlider />
            <WhatWeDoSection />
            <WhoWeAreSection />
            <HowWeWorkSection />
            <WhyChooseUsSection />
            <TechStackSection />
            <TestimonialsSection />
            <ProjectDeliverSection />
            <InsightsSection />
            <FaqSection />
            <GetInTouchSection />
        </>
    );
}