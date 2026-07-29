import first1 from '@/assets/images/about-page/ourhistory/yearofestablish.png';
import second2 from '@/assets/images/about-page/ourhistory/shutterstock_1437121289.jpg';
import third3 from '@/assets/images/about-page/ourhistory/sajir-electrification-1981-1983.png';
import fourth4 from '@/assets/images/about-page/ourhistory/qurayat-plant-1990-1993.png';
import fifth5 from '@/assets/images/about-page/ourhistory/dsc03425-first-gas-insulated-substation-project-1994.png';
import sixth6 from '@/assets/images/about-page/ourhistory/wadi-jaleel.png';
import seventh7 from "@/assets/images/about-page/ourhistory/njeddah-substation2-jeddah-north-380-2003.png";
import eigth8 from '@/assets/images/about-page/ourhistory/dsc03641-ohtl-2004-2005.png';
import ninth9 from '@/assets/images/about-page/ourhistory/princess-nourah-2009-2012.png';
import ten10 from '@/assets/images/about-page/ourhistory/mte_4185-hail-power-plat-2010-2011.png';

export interface TimelineItem {
    year: number;
    title: string;
    description: string;
    dateRange?: string; // Bhai date range ko optional block me alag kar diya hai render filter ke liye
    image: any; // Next.js StaticImageData compatibility ke liye
}


export const timelineData = [
    {
        year: 1976,
        title: "Year of Establishment",
        description: "Our story started in 1976 as 'Alfanar Construction' in Riyadh, Saudi Arabia.",
        image: first1,
    },
    {
        year: 1979,
        title: "First Electrification Project",
        description: "Farasan Island Electrification Project, Saudi Arabia.",
        dateRange: "(1979 - 1981)",
        image: second2,
    },
    {
        year: 1981,
        title: "Sajir Electrification Project",
        description: "Sajir Electrification Project in Riyadh, Saudi Arabia.",
        dateRange: "(1981 - 1983)",
        image: third3,
    },
    {
        year: 1990,
        title: "First Power Plant Project",
        description: "40 MW Power Plant in Qurayyat, Saudi Arabia.",
        dateRange: "(1990 - 1993)",
        image: fourth4,
    },
    {
        year: 1994,
        title: "First Gas Insulated Substation Project",
        description: "132 kV / 13.8 kV Substation Project for the general housing program in Saudi Arabia.",
        image: fifth5,
    },
    {
        year: 1997,
        title: "First Outdoor Substation",
        description: "Wadi Jaleel 380 / 110 kV Outdoor Substation Project in Makkah, Saudi Arabia.",
        dateRange: "(1997 - 1999)",
        image: sixth6,
    },
    {
        year: 2003,
        title: "First 380 kV Indoor Substation",
        description: "Construction of Jeddah North 380 / 110 / 13.8 kV Substation [Switchgears, Power Transformers, Civil Works].",
        dateRange: "(2003 - 2005)",
        image: seventh7,
    },
    {
        year: 2004,
        title: "First 115 kV OHTL Project",
        description: "First 115 kV Overhead Transmission Lines project in Eastern Province, Saudi Arabia.",
        dateRange: "(2004 - 2005)",
        image: eigth8,
    },
    {
        year: 2009,
        title: "First Underground Cabling Project",
        description: "380 kV UGC, Princess Nourah bint Abdulrahman University in Riyadh, Saudi Arabia.",
        dateRange: "(2009 - 2012)",
        image: ninth9,
    },
    {
        year: 2010,
        title: "Hail Power Plant Extension - Expansion 2",
        description: "300 MW Power Plant in Hail, Saudi Arabia.",
        dateRange: "(2010 - 2011)",
        image: ten10,
    },
    // ─── DUPLICATED/EXTENDED SEAMLESS CONTEXT TO 20 ITEMS ───
    {
        year: 2012,
        title: "Smart Grid Integration Phase 1",
        description: "Implementation of grid automation and control network systems across central sectors.",
        dateRange: "(2012 - 2014)",
        image: second2,
    },
    {
        year: 2014,
        title: "Riyadh Metro Power Supply Project",
        description: "Substation infrastructure deployment tailored for global mass transit networks.",
        image: third3,
    },
    {
        year: 2015,
        title: "High-Voltage Cable Factory Expansion",
        description: "Enhancing the industrial production capability for domestic distribution markets.",
        dateRange: "(2015 - 2016)",
        image: fourth4,
    },
    {
        year: 2017,
        title: "Renewable Energy Division Launch",
        description: "Strategic expansion into wind energy assets and utility-scale solar arrays.",
        image: fifth5,
    },
    {
        year: 2018,
        title: "Yanbu Industrial Substation Phase II",
        description: "Execution of heavy industrial distribution hubs on the western coast infrastructure track.",
        dateRange: "(2018 - 2020)",
        image: sixth6,
    },
    {
        year: 2020,
        title: "Digital Substations Modernization",
        description: "Converting legacy transmission sectors into IEC 61850 compliant grid structures.",
        image: seventh7,
    },
    {
        year: 2021,
        title: "Neom Infrastructure Power Grid",
        description: "Initial construction phase contract for reliable high-voltage overhead connections.",
        dateRange: "(2021 - 2023)",
        image: eigth8,
    },
    {
        year: 2023,
        title: "Green Hydrogen Substation Integration",
        description: "Dedicated distribution station architecture for clean energy production centers.",
        image: ninth9,
    },
    {
        year: 2024,
        title: "Regional Control Centers Expansion",
        description: "Centralized SCADA control rooms handling state-wide distributed power management.",
        dateRange: "(2024 - 2025)",
        image: ten10,
    },
    {
        year: 2026,
        title: "50 Years Celebration & Global Core Grid",
        description: "Expanding the engineering construction services footprints deeper into international sectors.",
        image: first1,
    }
];