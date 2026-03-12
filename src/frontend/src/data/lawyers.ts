export interface Lawyer {
  name: string;
  specialization: string;
  phone: string;
  email: string;
  city: string;
  experience?: string;
}

export const lawyers: Lawyer[] = [
  // Delhi
  {
    name: "Adv. Rajan Sharma",
    specialization: "Criminal Law",
    phone: "+91-98101-23456",
    email: "rajan.sharma@legaldelhi.in",
    city: "Delhi",
    experience: "18 years",
  },
  {
    name: "Adv. Priya Mehta",
    specialization: "Family Law",
    phone: "+91-98102-34567",
    email: "priya.mehta@legaldelhi.in",
    city: "Delhi",
    experience: "12 years",
  },
  {
    name: "Adv. Suresh Kumar",
    specialization: "Civil Law",
    phone: "+91-98103-45678",
    email: "suresh.kumar@legaldelhi.in",
    city: "Delhi",
    experience: "22 years",
  },
  {
    name: "Adv. Anjali Singh",
    specialization: "Women's Rights",
    phone: "+91-98104-56789",
    email: "anjali.singh@legaldelhi.in",
    city: "Delhi",
    experience: "9 years",
  },
  // Mumbai
  {
    name: "Adv. Vikram Joshi",
    specialization: "Criminal Law",
    phone: "+91-98200-11111",
    email: "vikram.joshi@legalmumbai.in",
    city: "Mumbai",
    experience: "20 years",
  },
  {
    name: "Adv. Sunita Rao",
    specialization: "Family Law",
    phone: "+91-98200-22222",
    email: "sunita.rao@legalmumbai.in",
    city: "Mumbai",
    experience: "15 years",
  },
  {
    name: "Adv. Rahul Patil",
    specialization: "Property Law",
    phone: "+91-98200-33333",
    email: "rahul.patil@legalmumbai.in",
    city: "Mumbai",
    experience: "11 years",
  },
  {
    name: "Adv. Meera Nair",
    specialization: "Cyber Law",
    phone: "+91-98200-44444",
    email: "meera.nair@legalmumbai.in",
    city: "Mumbai",
    experience: "7 years",
  },
  // Bangalore
  {
    name: "Adv. Kiran Kumar",
    specialization: "Criminal Law",
    phone: "+91-98440-11111",
    email: "kiran.kumar@legalblr.in",
    city: "Bangalore",
    experience: "14 years",
  },
  {
    name: "Adv. Deepa Reddy",
    specialization: "Family Law",
    phone: "+91-98440-22222",
    email: "deepa.reddy@legalblr.in",
    city: "Bangalore",
    experience: "10 years",
  },
  {
    name: "Adv. Arjun Gowda",
    specialization: "Labour Law",
    phone: "+91-98440-33333",
    email: "arjun.gowda@legalblr.in",
    city: "Bangalore",
    experience: "16 years",
  },
  // Chennai
  {
    name: "Adv. Senthil Nathan",
    specialization: "Criminal Law",
    phone: "+91-98410-11111",
    email: "senthil.nathan@legalchennai.in",
    city: "Chennai",
    experience: "19 years",
  },
  {
    name: "Adv. Kavitha Rajan",
    specialization: "Family Law",
    phone: "+91-98410-22222",
    email: "kavitha.rajan@legalchennai.in",
    city: "Chennai",
    experience: "13 years",
  },
  {
    name: "Adv. Murugan Pillai",
    specialization: "Civil Law",
    phone: "+91-98410-33333",
    email: "murugan.pillai@legalchennai.in",
    city: "Chennai",
    experience: "25 years",
  },
  // Kolkata
  {
    name: "Adv. Sourav Banerjee",
    specialization: "Criminal Law",
    phone: "+91-98300-11111",
    email: "sourav.banerjee@legalkolkata.in",
    city: "Kolkata",
    experience: "17 years",
  },
  {
    name: "Adv. Ritu Ghosh",
    specialization: "Women's Rights",
    phone: "+91-98300-22222",
    email: "ritu.ghosh@legalkolkata.in",
    city: "Kolkata",
    experience: "8 years",
  },
  {
    name: "Adv. Amar Das",
    specialization: "Property Law",
    phone: "+91-98300-33333",
    email: "amar.das@legalkolkata.in",
    city: "Kolkata",
    experience: "21 years",
  },
  // Hyderabad
  {
    name: "Adv. Venkat Rao",
    specialization: "Criminal Law",
    phone: "+91-98490-11111",
    email: "venkat.rao@legalhyd.in",
    city: "Hyderabad",
    experience: "15 years",
  },
  {
    name: "Adv. Lakshmi Devi",
    specialization: "Family Law",
    phone: "+91-98490-22222",
    email: "lakshmi.devi@legalhyd.in",
    city: "Hyderabad",
    experience: "11 years",
  },
  {
    name: "Adv. Prasad Reddy",
    specialization: "Corporate Law",
    phone: "+91-98490-33333",
    email: "prasad.reddy@legalhyd.in",
    city: "Hyderabad",
    experience: "14 years",
  },
];

export const availableCities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
];

export function findLawyersByCity(city: string): Lawyer[] {
  const normalized = city.trim().toLowerCase();
  return lawyers.filter((l) => l.city.toLowerCase() === normalized);
}
