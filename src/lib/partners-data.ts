export interface Partner {
  name: string;
  country: string; // Keeping country as it's used in UI, defaulting to "Global" or "India" for new ones if unknown, or maybe empty string.
  image: string;
  website: string;
  business_category: "Pharmaceuticals" | "Nutraceuticals" | "Medical Devices";
}

export const partners: Partner[] = [
  // Pharmaceuticals
  {
    name: "Triveni",
    country: "India",
    image: "/images/partners/Trivenni-India.webp",
    website: "http://www.triveniformulations.com/",
    business_category: "Pharmaceuticals",
  },
  {
    name: "Nibblen",
    country: "India",
    image: "/images/partners/Nibblen-India.jpg",
    website: "http://www.nibblenlifesciences.com/",
    business_category: "Pharmaceuticals",
  },
  {
    name: "Akums",
    country: "India",
    image: "/images/partners/Akums-India.webp",
    website: "https://www.akums.in/",
    business_category: "Pharmaceuticals",
  },
  {
    name: "Yash",
    country: "India",
    image: "/images/partners/Yash-Pharma-Laboratories-India.webp",
    website: "http://yashpharma.com/",
    business_category: "Pharmaceuticals",
  },
  {
    name: "Amoun",
    country: "Egypt",
    image: "/images/partners/Amoun-Egypt.webp",
    website: "https://www.amoun.com/",
    business_category: "Pharmaceuticals",
  },
  {
    name: "Un1",
    country: "India",
    image: "/images/partners/Uno1-India.webp",
    website: "https://www.unosourcepharma.com/",
    business_category: "Pharmaceuticals",
  },
  {
    name: "Kniss Laboratary",
    country: "India",
    image: "/images/partner-placeholder.png",
    website: "#",
    business_category: "Pharmaceuticals",
  },

  // Nutraceuticals
  {
    name: "Connuct",
    country: "UK",
    image: "/images/partners/Connuct-United-Kingdom.webp",
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
    image: "/images/partners/Miraculous-India.webp",
    website: "https://miraclus.com/",
    business_category: "Medical Devices",
  },
  {
    name: "Trivitron",
    country: "India",
    image: "/images/partner-placeholder.png",
    website: "#",
    business_category: "Medical Devices",
  },
  {
    name: "Plus orthopedics",
    country: "India",
    image: "/images/partners/Plus Orthopedics.avif",
    website: "https://www.plusorthoindia.com/",
    business_category: "Medical Devices",
  },
  {
    name: "Neo Life",
    country: "India",
    image: "/images/partners/Neo life-India.webp",
    website: "https://www.aadharmedicare.com/",
    business_category: "Medical Devices",
  },
  {
    name: "Exactech",
    country: "USA",
    image: "/images/partners/Exactech-USA.webp",
    website: "https://www.exac.com/",
    business_category: "Medical Devices",
  },
  {
    name: "OSD",
    country: "France",
    image: "/images/partners/Osd-France.webp",
    website: "https://osdevelopment.fr/en/",
    business_category: "Medical Devices",
  },
  {
    name: "Permedica",
    country: "Italy",
    image: "/images/partners/Permedica-orthopaedics-Italy.webp",
    website: "https://www.permedica.it/en/",
    business_category: "Medical Devices",
  },
  {
    name: "Universal Ortho System",
    country: "India",
    image: "/images/partners/Universal-Orthosystem-India.jpg",
    website: "https://uniortho.net/",
    business_category: "Medical Devices",
  },
  {
    name: "Uma surgical",
    country: "India",
    image: "/images/partners/Uma surgicals-India.webp",
    website: "http://www.umasurgicals.com/",
    business_category: "Medical Devices",
  },
  {
    name: "Bone tech",
    country: "India",
    image: "/images/partner-placeholder.png",
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
    image: "/images/partner-placeholder.png",
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
];
