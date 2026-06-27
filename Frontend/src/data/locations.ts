export interface Location {
  name: string;
  slug: string;
  description: string;
  deliveryTime: string;
  distance: string;
  nearby: string[];
}

export const locations: Location[] = [
  {
    name: "Deira",
    slug: "deira",
    description: "Our home base — located near National Paints Metro Station, we serve all of Deira and surrounding areas with same-day delivery.",
    deliveryTime: "Same day",
    distance: "0 km",
    nearby: ["Al Rigga", "Al Muraqqabat", "Al Nahda", "Hor Al Anz", "Al Qusais"],
  },
  {
    name: "Dubai Marina & JLT",
    slug: "dubai-marina",
    description: "Fast delivery to Dubai Marina, Jumeirah Lakes Towers, and Barsha Heights.",
    deliveryTime: "1–2 hours",
    distance: "22 km",
    nearby: ["Dubai Marina", "JLT", "Barsha Heights", "The Walk", "Bluewaters"],
  },
  {
    name: "Downtown Dubai",
    slug: "downtown-dubai",
    description: "Serving Downtown, Business Bay, and the surrounding commercial districts.",
    deliveryTime: "1–2 hours",
    distance: "12 km",
    nearby: ["Downtown", "Business Bay", "City Walk", "Al Wasl", "Trade Centre"],
  },
  {
    name: "DIFC & Sheikh Zayed Road",
    slug: "difc",
    description: "Premium delivery to DIFC, SZR offices, and the financial district.",
    deliveryTime: "1 hour",
    distance: "10 km",
    nearby: ["DIFC", "Sheikh Zayed Road", "World Trade Centre", "Emirates Towers"],
  },
  {
    name: "Dubai Silicon Oasis & Academic City",
    slug: "dubai-silicon-oasis",
    description: "Covering tech parks, universities, and educational institutions.",
    deliveryTime: "2–3 hours",
    distance: "25 km",
    nearby: ["DSO", "Academic City", "International City", "Al Warqa"],
  },
  {
    name: "Sharjah & Northern Emirates",
    slug: "sharjah",
    description: "Daily delivery runs to Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.",
    deliveryTime: "Next day",
    distance: "15 km",
    nearby: ["Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"],
  },
  {
    name: "Al Barsha & The Springs",
    slug: "al-barsha",
    description: "Covering Al Barsha, The Springs, The Meadows, and Al Sufouh.",
    deliveryTime: "2–3 hours",
    distance: "24 km",
    nearby: ["Al Barsha", "The Springs", "The Meadows", "Al Sufouh", "Emirates Hills"],
  },
  {
    name: "Jumeirah & Umm Suqeim",
    slug: "jumeirah",
    description: "Serving Jumeirah 1–3, Umm Suqeim, and the beachfront communities.",
    deliveryTime: "1–2 hours",
    distance: "15 km",
    nearby: ["Jumeirah 1", "Jumeirah 2", "Jumeirah 3", "Umm Suqeim", "Al Manara"],
  },
  {
    name: "Al Qusais & Muhaisnah",
    slug: "al-qusais",
    description: "Rapid delivery to Al Qusais industrial area, residential zones, and Muhaisnah.",
    deliveryTime: "1–2 hours",
    distance: "8 km",
    nearby: ["Al Qusais Industrial", "Al Qusais Residential", "Muhaisnah", "Al Twar"],
  },
  {
    name: "Bur Dubai & Al Mankhool",
    slug: "bur-dubai",
    description: "Covering Bur Dubai, Al Mankhool, Al Karama, and Oud Metha.",
    deliveryTime: "1 hour",
    distance: "3 km",
    nearby: ["Al Mankhool", "Al Karama", "Oud Metha", "Al Raffa", "Al Hudaiba"],
  },
  {
    name: "Dubai Hills & Arabian Ranches",
    slug: "dubai-hills",
    description: "Serving Dubai Hills Estate, Arabian Ranches, and Motor City.",
    deliveryTime: "2–3 hours",
    distance: "28 km",
    nearby: ["Dubai Hills Estate", "Arabian Ranches", "Motor City", "Studio City"],
  },
  {
    name: "Deira Waterfront & Al Hamriya",
    slug: "deira-waterfront",
    description: "Covering the Deira Waterfront development, Al Hamriya, and Port Saeed.",
    deliveryTime: "1 hour",
    distance: "2 km",
    nearby: ["Deira Waterfront", "Al Hamriya", "Port Saeed", "Al Shindagha"],
  },
  {
    name: "Dubai South & Expo City",
    slug: "dubai-south",
    description: "Serving Dubai South, Expo City, and Al Maktoum International Airport area.",
    deliveryTime: "3–4 hours",
    distance: "35 km",
    nearby: ["Dubai South", "Expo City", "Al Maktoum Airport", "Dubai World Central"],
  },
  {
    name: "Al Nahda & Al Twar",
    slug: "al-nahda",
    description: "Covering Al Nahda 1 & 2, Al Twar 1–3, and Al Mizhar.",
    deliveryTime: "1–2 hours",
    distance: "7 km",
    nearby: ["Al Nahda 1", "Al Nahda 2", "Al Twar 1", "Al Twar 2", "Al Twar 3"],
  },
  {
    name: "Hatta",
    slug: "hatta",
    description: "Weekly delivery runs to Hatta for businesses and government organizations.",
    deliveryTime: "Weekly run",
    distance: "134 km",
    nearby: ["Hatta Town", "Hatta Dam", "Hatta Mountain Reserve"],
  },
];
