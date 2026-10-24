import d1 from "./assets/d1.jpg";
import d2 from "./assets/d2.jpg";
import d3 from "./assets/d3.jpg";
import d4 from "./assets/d4.jpg";

export const SPECIALTIES = [
  {
    slug: "cardiology", name: "Cardiology", icon: "pulse",
    short: "Heart care for a healthier future.",
    intro: "Our cardiology team looks after your heart at every stage: from a first check-up when you have palpitations or chest discomfort, to long-term care for conditions such as high blood pressure or heart rhythm problems.",
    treats: ["High blood pressure", "Chest pain and palpitations", "Heart rhythm disorders", "Heart failure follow-up", "High cholesterol", "Pre-surgery heart assessment"],
    services: ["Consultation and physical examination", "Resting ECG", "Echocardiogram (heart ultrasound)", "24-hour blood pressure monitoring", "Exercise stress test"],
    expect: ["We review your history, medication and family risks.", "Basic tests such as an ECG are usually done during the same visit.", "You leave with a clear plan and a written summary for your regular doctor."],
  },
  {
    slug: "dentistry", name: "Dentistry", icon: "tooth",
    short: "Healthy smiles, brighter lives.",
    intro: "From routine check-ups to restorative treatment, our dentists focus on gentle, unhurried care that keeps teeth and gums healthy for the long term.",
    treats: ["Cavities and tooth pain", "Gum disease", "Broken or worn teeth", "Missing teeth", "Tooth sensitivity", "Teeth grinding"],
    services: ["Check-up and X-ray", "Scale and polish", "Fillings and root canal treatment", "Crowns and bridges", "Teeth whitening"],
    expect: ["Your first visit includes a full oral examination and, if needed, X-rays.", "We explain each option and its cost before any treatment begins.", "Regular check-ups are scheduled based on your oral health."],
  },
  {
    slug: "dermatology", name: "Dermatology", icon: "face",
    short: "Healthy skin, confident you.",
    intro: "Our dermatologists diagnose and treat conditions of the skin, hair and nails, and offer routine skin checks for adults and teenagers.",
    treats: ["Acne and scarring", "Eczema and dry skin", "Psoriasis", "Rashes and allergies", "Hair loss", "Moles and skin changes"],
    services: ["Full skin examination", "Mole screening", "Treatment of acne and eczema", "Minor skin procedures", "Prescription skincare plans"],
    expect: ["Your doctor examines the affected area and asks about symptoms and routine.", "Photos may be taken, with your consent, to track progress.", "Treatment plans are reviewed at follow-up visits."],
  },
  {
    slug: "pediatrics", name: "Pediatrics", icon: "child",
    short: "Specialized care for your little ones.",
    intro: "Our pediatricians care for babies, children and teenagers, with a calm approach that helps young patients feel at ease and gives parents clear answers.",
    treats: ["Fever, coughs and infections", "Allergies and asthma", "Growth and development", "Feeding and sleep concerns", "Skin problems in children", "School health certificates"],
    services: ["Well-child check-ups", "Vaccinations", "Growth and development monitoring", "Treatment of common childhood illnesses", "Advice for parents"],
    expect: ["Please bring your child's vaccination record.", "The doctor talks with you and your child, then examines them.", "You receive clear advice on treatment and when to come back."],
  },
];

export const DOCTORS = [
  { id: "youssef-el-amrani", name: "Dr. Youssef El Amrani", role: "Cardiologist", specialty: "cardiology", years: 14, rating: 4.9, img: d1 },
  { id: "nadia-cherkaoui", name: "Dr. Nadia Cherkaoui", role: "Cardiologist", specialty: "cardiology", years: 9, rating: 4.8, img: null },
  { id: "salma-benjelloun", name: "Dr. Salma Benjelloun", role: "Dermatologist", specialty: "dermatology", years: 10, rating: 4.9, img: d2 },
  { id: "omar-bennani", name: "Dr. Omar Bennani", role: "Dermatologist", specialty: "dermatology", years: 7, rating: 4.7, img: null },
  { id: "karim-alaoui", name: "Dr. Karim Alaoui", role: "Dentist", specialty: "dentistry", years: 8, rating: 4.7, img: d3 },
  { id: "hajar-idrissi", name: "Dr. Hajar Idrissi", role: "Dentist", specialty: "dentistry", years: 11, rating: 4.8, img: null },
  { id: "imane-tazi", name: "Dr. Imane Tazi", role: "Pediatrician", specialty: "pediatrics", years: 9, rating: 4.8, img: d4 },
  { id: "mehdi-lahlou", name: "Dr. Mehdi Lahlou", role: "Pediatrician", specialty: "pediatrics", years: 12, rating: 4.9, img: null },
];

export const TIME_SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];