export interface CompanySlide {
  _id?: string;
  slug: string;
  name: string;
  logo: string;
}

export interface SliderData {
  slug: string;
  badge: string;
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  companies: CompanySlide[];
}

export const sliderData: SliderData = {
  slug: "trusted-companies-slider",
  badge: "TRUSTED BY LEADING BRANDS",
  title: {
    prefix: "Powering Growth For",
    highlight: "Top Industry Leaders",
    suffix: "Worldwide",
  },
  companies: [
    { slug: "airbliss", name: "Airbliss", logo: "/logos/airbliss.png" },
    { slug: "body-armour", name: "Body Armour", logo: "/logos/body-armour.png" },
    { slug: "child-ortho-care", name: "Child Ortho Care", logo: "/logos/child-ortho-care.png" },
    { slug: "clean-bac", name: "Clean Bac", logo: "/logos/clean-bac.png" },
    { slug: "coral-institute", name: "Coral Institute", logo: "/logos/coral-institute.png" },
    { slug: "coverfox", name: "Coverfox", logo: "/logos/coverfox.png" },
    { slug: "creative-wave", name: "Creative Wave", logo: "/logos/creative-wave.png" },
    { slug: "dettol", name: "Dettol", logo: "/logos/dettol.png" },
    { slug: "disha-productions", name: "Disha Productions", logo: "/logos/disha-productions.png" },
    { slug: "image-editing", name: "Image Editing", logo: "/logos/image-editing.jpg" },
    { slug: "lazie", name: "Lazie", logo: "/logos/lazie.png" },
    { slug: "organic-india", name: "Organic India", logo: "/logos/Organic-India.png" },
    { slug: "paras", name: "Paras", logo: "/logos/paras.png" },
    { slug: "pepipost", name: "Pepipost", logo: "/logos/pepipost.png" },
    { slug: "pitradev", name: "Pitradev", logo: "/logos/pitradev.png" },
    { slug: "proburst", name: "Proburst", logo: "/logos/proburst.png" },
    { slug: "pro-quest", name: "Pro Quest", logo: "/logos/pro-quest.png" },
    { slug: "protein-x", name: "Protein-X", logo: "/logos/protein-x.png" },
    { slug: "reckitt", name: "Reckitt Benckiser", logo: "/logos/Reckitt.png" },
    { slug: "smart-shine", name: "Smart Shine", logo: "/logos/Smart-shine.png" },
    { slug: "snt", name: "SNT", logo: "/logos/snt.png" },
    { slug: "study-in-germany", name: "Study in Germany", logo: "/logos/study-in-germany.png" },
    { slug: "sun-laboratories", name: "Sun Laboratories", logo: "/logos/sun-laboratories.png" },
    { slug: "the-herbal-blend", name: "The Herbal Blend", logo: "/logos/the-herbal-blend.jpg" },
    { slug: "theme-weavers-designs", name: "Theme Weavers Designs", logo: "/logos/theme-weavers-designs.png" },
    { slug: "the-success-stars-consulting", name: "The Success Stars Consulting", logo: "/logos/The-success-stars-consulting.png" },
    { slug: "tirupati", name: "Tirupati", logo: "/logos/tirupati.png" },
    { slug: "umazeo", name: "Umazeo", logo: "/logos/umazeo.jpg" },
    { slug: "vijaya", name: "Vijaya", logo: "/logos/vijaya.png" },
    { slug: "work-india", name: "WorkIndia", logo: "/logos/work-india.png" },
  ],
};