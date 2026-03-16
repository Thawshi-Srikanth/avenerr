export interface Partner {
  name: string;
  country: string; // Keeping country as it's used in UI, defaulting to "Global" or "India" for new ones if unknown, or maybe empty string.
  image: string;
  website: string;
  business_category: "Pharmaceuticals" | "Nutraceuticals" | "Medical Devices";
  product_catalog_url?: string;
  featured?: boolean;
  country_manager?: {
    name: string;
    role: string;
    image: string;
    contact_info?: string;
  };
}

export const partners: Partner[] = [
  // Pharmaceuticals
  {
    name: "Triveni",
    country: "India",
    image: "/images/partners/trivenni-india.webp",
    website: "http://www.triveniformulations.com/",
    business_category: "Pharmaceuticals",
  },
  {
    name: "Nibblen",
    country: "India",
    image: "/images/partners/nibblen-india.jpg",
    website: "http://www.nibblenlifesciences.com/",
    business_category: "Pharmaceuticals",
  },
  {
    name: "Akums",
    country: "India",
    image: "/images/partners/akums-india.webp",
    website: "https://www.akums.in/",
    business_category: "Pharmaceuticals",
  },
  {
    name: "Yash",
    country: "India",
    image: "/images/partners/yash-pharma-laboratories-india.webp",
    website: "http://yashpharma.com/",
    business_category: "Pharmaceuticals",
  },
  {
    name: "Amoun",
    country: "Egypt",
    image: "/images/partners/amoun-egypt.webp",
    website: "https://www.amoun.com/",
    business_category: "Pharmaceuticals",
  },
  {
    name: "Un1",
    country: "India",
    image: "/images/partners/uno1-india.webp",
    website: "https://www.unosourcepharma.com/",
    business_category: "Pharmaceuticals",
  },
  {
    name: "Kniss Laboratary",
    country: "India",
    image: "/images/partners/kniss-labs.png",
    website: "#",
    business_category: "Pharmaceuticals",
  },

  // Nutraceuticals
  {
    name: "Connuct",
    country: "UK",
    image: "/images/partners/connuct-united-kingdom.webp",
    website: "https://connuctlife.com/",
    business_category: "Nutraceuticals",
  },
  {
    name: "Nebbulan",
    country: "India",
    image: "/images/partner-placeholder.png",
    website: "#",
    business_category: "Nutraceuticals",
  },

  // Medical Devices
  {
    name: "Miraculous",
    country: "India",
    image: "/images/partners/miraculous-india.webp",
    website: "https://miraclus.com/",
    business_category: "Medical Devices",
  },
  {
    name: "Trivitron",
    country: "India",
    image: "/images/partners/trivitron.png",
    website: "https://www.trivitron.com/",
    business_category: "Medical Devices",
    product_catalog_url:
      "https://drive.google.com/drive/folders/1pSW0RTy2p7puYhv3qKmbb6AH6K-fI00X?usp=sharing",
    featured: true,
    country_manager: {
      name: "K Chandrashekar",
      role: "Country Manager - Trivitron Lanka",
      image: "/images/team/trivitron/K_Chandrashekar.png",
    },
  },
  {
    name: "Plus orthopedics",
    country: "India",
    image: "/images/partners/plus-orthopedics.avif",
    website: "https://www.plusorthoindia.com/",
    business_category: "Medical Devices",
    product_catalog_url:
      "https://drive.google.com/drive/folders/1XOZ69WBeRFBUNT5NjGPrFh4fGfh2BTtb?usp=drive_link",
  },
  {
    name: "Neo Life",
    country: "India",
    image: "/images/partners/neo-life-india.webp",
    website: "https://www.aadharmedicare.com/",
    business_category: "Medical Devices",
  },
  {
    name: "Exactech",
    country: "USA",
    image: "/images/partners/exactech-usa.webp",
    website: "https://www.exac.com/",
    business_category: "Medical Devices",
  },
  {
    name: "OSD",
    country: "France",
    image: "/images/partners/osd-france.webp",
    website: "https://osdevelopment.fr/en/",
    business_category: "Medical Devices",
  },
  {
    name: "Permedica",
    country: "Italy",
    image: "/images/partners/permedica-orthopaedics-italy.webp",
    website: "https://www.permedica.it/en/",
    business_category: "Medical Devices",
  },
  {
    name: "Universal Ortho System",
    country: "India",
    image: "/images/partners/universal-orthosystem-india.jpg",
    website: "https://uniortho.net/",
    business_category: "Medical Devices",
  },
  {
    name: "Uma surgical",
    country: "India",
    image: "/images/partners/uma-surgicals-india.webp",
    website: "http://www.umasurgicals.com/",
    business_category: "Medical Devices",
  },
  {
    name: "Bone tech",
    country: "India",
    image: "/images/partners/bone-tech.png",
    website: "#",
    business_category: "Medical Devices",
  },
  {
    name: "Ortho flex",
    country: "India",
    image: "/images/partner-placeholder.png",
    website: "#",
    business_category: "Medical Devices",
  },
  {
    name: "Bio rad",
    country: "India",
    image: "/images/partners/bio-rad.svg",
    website: "#",
    business_category: "Medical Devices",
  },
  {
    name: "Osteo care",
    country: "India",
    image: "/images/partner-placeholder.png",
    website: "#",
    business_category: "Medical Devices",
  },
  {
    name: "Naviswiss",
    country: "Switzerland",
    image: "/images/partners/navi-swiss.svg",
    website: "https://naviswiss.eu/",
    business_category: "Medical Devices",
    product_catalog_url:
      "https://drive.google.com/drive/folders/1ByTyDMmXtlR0zHoydm59gwWnKFdWnRCV?usp=drive_link",
  },
];
