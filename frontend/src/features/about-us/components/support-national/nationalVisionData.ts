import egypt from '@/assets/images/about-page/national/cairo-egypt.jpg';
import london from '@/assets/images/about-page/national/london-united-kingdom.jpg';
import india from '@/assets/images/about-page/national/rashtrapati-bhavan.jpg';
import saudi from '@/assets/images/about-page/national/kingdom-of-saudi-arabia.jpg';
import spanish from '@/assets/images/about-page/national/spanish-parliament.jpg';

export interface VisionCountryData {
    id: string;
    name: string;
    subTitle: string;
    paragraphs: string[];
    bgImage: any;
}

export const nationalVisionData: VisionCountryData[] = [
    {
        id: "saudi",
        name: "SAUDI ARABIA",
        subTitle: "Contributing to Saudi Vision 2030",
        paragraphs: [
            "As a Saudi company, we are proud of our heritage and are committed to supporting our homeland in realizing its Vision 2030.",
            "Through the three main pillars of 'A Vibrant Society'; 'A Thriving Economy'; 'An Ambitious Nation', Vision 2030 has outlined strategic objectives for the Kingdom's transformation.",
            "Saudi Arabia has a renewable energy target of 58.7 GW by 2030, and our projects in the renewable energy and infrastructure sectors within the Kingdom contribute towards this ambitious goal. We are also leading the digital transformation in the Kingdom through pioneering projects such as our Smart Meters Project. We are also further enriching local content by producing the first 'Made in Saudi' server in a partnership with HPE.",
            "We have business targets for hiring, developing, and empowering Saudi talent, as well as contributing to local content by purchasing from and working with local suppliers."
        ],
        bgImage: saudi,
    },
    {
        id: "india",
        name: "INDIA",
        subTitle: "Supporting India achieve Mission 500 GW",
        paragraphs: [
            "At COP26 held in Glasgow in 2021, India announced its intent to achieve 500 GW of its capacity through renewable energy.",
            "Our wind energy projects in Gujarat, India, are helping India in its energy transition by 'greening' the energy mix.",
            "We have also acquired Senvion, India, a wind turbine manufacturer, thereby contributing to the 'Make in India' initiative and creating 100s of local jobs."
        ],
        bgImage: india
    },
    {
        id: "uk",
        name: "UNITED KINGDOM",
        subTitle: "Decarbonizing the UK aviation sector to achieve net zero 2050 target",
        paragraphs: [
            "United Kingdom's Jet Zero strategy released by the Department for Transport has outlined the framework to achieve net zero in UK's aviation sector by 2050.",
            "The fuel produced at the Lighthouse Green Fuels project - our sustainable aviation fuel facility in Teesside, UK, will produce 80% lesser greenhouse gases as compared to fossil fuels.",
            "Our SAF project will create 700 jobs during its construction period and 240 jobs once its operational."
        ],
        bgImage: london
    },
    {
        id: "egypt",
        name: "EGYPT",
        subTitle: "Supporting Egypt Vision 2030",
        paragraphs: [
            "Egypt Vision 2030 has a target for reducing greenhouse gas (GHG) emissions from the energy sector by 10%. And we have been contributing to the energy sector's transformation in Egypt through various key projects.",
            "Our 50 MW solar park in Benban is our maiden solar photovoltaic project. And in 2022, we signed an MoU with the General Authority of the Suez Canal Economic Zone, the Sovereign Fund of Egypt, the Egyptian Electricity Transmission Company, and the New and Renewable Energy Authority, aiming to develop a green ammonia facility in Sokhna. Additionally, we also signed a green hydrogen framework agreement with The Sovereign Fund of Egypt during COP27."
        ],
        bgImage: egypt
    },
    {
        id: "spain",
        name : "SPAIN",
        subTitle : "Contributing to Spain's progress towards net zero 2050 target",
        paragraphs : [
            "Spain's National Energy and Climate Plan (NECP) is the national strategic planning tool that integrates energy and climate policy to achieve climate neutraility objectives by 2050 that have been set by the European Union.",
            "Once of the targets set in the NECP is the reduction of the use of fossil fuels and the promotion of renewable energy sources. We are contributing towards this objective through a 120 MW integration of power generation from wind energy, with plans of further growing our portfolio in the coming years."
        ],
        bgImage : spanish
    }

]