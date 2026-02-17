// src/app/garlicData.js
export const lastUpdated = "Today, 10:00 AM";

export const contactInfo = {
  phone: ["+91 63814 09564", "+91 78711 10149", "+91 73052 39564"],
  whatsapp: "916381409564",
  email: "rktrader.spices@gmail.com",
  address: "Vadugapatti, Theni, Tamil Nadu, India",
  mapLink: "https://maps.app.goo.gl/zMf9ek8DSM9VHwHy6"
};

export const garlicVarieties = [
  {
    id: "desi-garlic",
    name: "Desi Garlic (Native)",
    origin: "Madhya Pradesh / Rajasthan",
    description: "Strongest flavor, pungent aroma. Best for daily Indian cooking and pastes.",
    imageSrc: "/rk-traders/images/desi.png",
    grades: [
      { name: "AAAA (Super Bold)", size: "45mm+", price: "₹140/kg", status: "Available" },
      { name: "AAA (Bold)", size: "35-40mm", price: "₹110/kg", status: "Available" },
      { name: "5A (Extra Bold)", size: "50mm+", price: "₹160/kg", status: "Limited" },
      { name: "Star (Medium)", size: "25-30mm", price: "₹85/kg", status: "Available" }
    ]
  },
  {
    id: "ooty-garlic",
    name: "Ooty Garlic (Ooty 1 & 2)",
    origin: "Nilgiris, Tamil Nadu",
    description: "Cultivated variety known for large, white bulbs. Resistant to tip drying with excellent storage life.",
    imageSrc: "/rk-traders/images/ooty.png",
    grades: [
      { name: "Premium Export", size: "50mm+", price: "₹210/kg", status: "Available" },
      { name: "A Grade", size: "40-50mm", price: "₹180/kg", status: "Available" }
    ]
  },
  {
    id: "kodaikanal-garlic",
    name: "Kodaikanal Hill Garlic (Malai Poondu)",
    origin: "Kodaikanal Hills",
    description: "Premium medicinal variety. Small to medium bulbs with white/pale purplish skin. Very strong aroma and pungency.",
    imageSrc: "/rk-traders/images/kodaikanal.png",
    grades: [
      { name: "Hill Premium", size: "Mixed", price: "₹280/kg", status: "Available" },
      { name: "Standard", size: "Mixed", price: "₹240/kg", status: "Available" }
    ]
  },
  {
    id: "mettupalayam-garlic",
    name: "Mettupalayam Garlic",
    origin: "Mettupalayam",
    description: "Reliable, high-yielding local variety. Known for consistent quality and good availability.",
    imageSrc: "/rk-traders/images/mettupalayam.png",
    grades: [
      { name: "Market Standard", size: "40mm+", price: "₹130/kg", status: "Available" },
      { name: "Medium", size: "30-40mm", price: "₹100/kg", status: "Available" }
    ]
  },
  {
    id: "single-clove-garlic",
    name: "Single Clove Garlic (Otha Poondu)",
    origin: "Himalayan / Hill Regions",
    description: "Specialty variety with only one large round clove. Extremely high medicinal and antioxidant properties.",
    imageSrc: "/rk-traders/images/single_clove.png",
    grades: [
      { name: "Premium Pearl", size: "20-30mm", price: "₹350/kg", status: "Limited Stock" },
      { name: "Regular", size: "15-20mm", price: "₹300/kg", status: "Available" }
    ]
  }
];