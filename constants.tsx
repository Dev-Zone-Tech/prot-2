import { Achievement, Character, Teammate, Weapon } from "./types";

export const PLAYER_DATA = {
  name: "LEANUR_69",
  id: "788206154",
  level: 75,
  rank: "Grandmaster",
  region: "South Asia",
  avatar: "./assets/p5.png",
  gameProfile: "./assets/profile.png",
  banner: "./assets/ff.jpg",
  tagline: "One shot, one kill. No exceptions.",
};

export const TEAMMATES: Teammate[] = [
  {
    id: "t1",
    name: "SHADOW_BLADE",
    role: "Rusher",
    image: "./assets/s1.png",
    level: 72,
    uid: "982734120",
    experience: "4 Years",
    strategy: "Aggressive close-range combat and flanking.",
    whatsapp: "https://wa.me/8801234567891",
  },
  {
    id: "t2",
    name: "CYBER_SNIPER",
    role: "Sniper",
    image: "./assets/s2.png",
    level: 68,
    uid: "772635412",
    experience: "3.5 Years",
    strategy: "Long-range precision and area denial.",
    whatsapp: "https://wa.me/8801234567892",
  },
  {
    id: "t3",
    name: "TORNADO_IGL",
    role: "In-Game Leader",
    image: "./assets/s3.png",
    level: 78,
    uid: "112233445",
    experience: "5 Years",
    strategy: "Strategic rotations and zone prediction.",
    whatsapp: "https://wa.me/8801234567893",
  },
  {
    id: "t4",
    name: "IRON_SHIELD",
    role: "Support",
    image: "./assets/s4.png",
    level: 70,
    uid: "889900112",
    experience: "3 Years",
    strategy: "Gloo wall protection and revive assistance.",
    whatsapp: "https://wa.me/8801234567894",
  },
];

export const INITIAL_STATS = {
  kills: 12540,
  deaths: 4200,
  wins: 1450,
  matches: 5200,
  headshots: 45,
  accuracy: 82,
};

export const WEAPONS: Weapon[] = [
  {
    name: "AK47 - Blue Flame Draco",
    skin: "Evolution",
    image: "./assets/ak.png",
    stats: { damage: 95, range: 80, fireRate: 75 },
  },
  {
    name: "MP40 - Predatory Cobra",
    skin: "Evolution",
    image: "./assets/mp.png",
    stats: { damage: 85, range: 40, fireRate: 100 },
  },
  {
    name: "AWM - Lucky Koi",
    skin: "Legendary",
    image: "./assets/awm.png",
    stats: { damage: 100, range: 100, fireRate: 20 },
  },
];

export const CHARACTERS: Character[] = [
  {
    name: "Alok",
    ability: "Drop the Beat",
    image: "./assets/alok.png",
    description:
      "Creates a 5m aura that increases moving and sprinting speed and restores HP.",
  },
  {
    name: "hayato",
    ability: "Time Turner",
    image: "./assets/h.jpg",
    description: "Creates an impenetrable force field that blocks 800 damages.",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "1",
    title: "World Series Finalist 2024",
    icon: "🏆",
    date: "Oct 2024",
  },
  {
    id: "2",
    title: "1000 Headshots in 1 Month",
    icon: "🎯",
    date: "Sept 2024",
  },
  { id: "3", title: "Regional Top Scorer", icon: "🥇", date: "Aug 2024" },
];
