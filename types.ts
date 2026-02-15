
export interface PlayerStats {
  kills: number;
  deaths: number;
  wins: number;
  matches: number;
  headshots: number;
  accuracy: number;
}

export interface Weapon {
  name: string;
  skin: string;
  image: string;
  stats: {
    damage: number;
    range: number;
    fireRate: number;
  };
}

export interface Character {
  name: string;
  ability: string;
  image: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  icon: string;
  date: string;
}

export interface Teammate {
  id: string;
  name: string;
  role: string;
  image: string;
  level: number;
  uid: string;
  experience: string;
  strategy: string;
  whatsapp: string;
}
