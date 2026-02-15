import {
  Calendar,
  Check,
  ChevronRight,
  Copy,
  Crosshair,
  ExternalLink,
  Flame,
  Gamepad2,
  Layers,
  Mail,
  Menu,
  MessageCircle,
  Send,
  Share2,
  Shield,
  Swords,
  Target,
  Trophy,
  User,
  X,
  Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { AIAnalyst } from "./components/AIAnalyst";
import { StatsCard } from "./components/StatsCard";
import {
  ACHIEVEMENTS,
  CHARACTERS,
  INITIAL_STATS,
  PLAYER_DATA,
  TEAMMATES,
  WEAPONS,
} from "./constants";
import { Teammate } from "./types";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedMate, setSelectedMate] = useState<Teammate | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyId = () => {
    navigator.clipboard.writeText(PLAYER_DATA.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const chartData = [
    { name: "Wins", value: INITIAL_STATS.wins },
    { name: "Losses", value: INITIAL_STATS.matches - INITIAL_STATS.wins },
  ];
  const COLORS = ["#ff4c29", "#1a1a1a"];

  const barData = [
    { name: "M1", kills: 45 },
    { name: "M2", kills: 38 },
    { name: "M3", kills: 52 },
    { name: "M4", kills: 61 },
    { name: "M5", kills: 48 },
  ];

  const SectionTitle = ({
    children,
    subtitle,
  }: {
    children: React.ReactNode;
    subtitle?: string;
  }) => (
    <div className="mb-12">
      <h2 className="text-5xl font-teko font-bold uppercase text-white tracking-tighter">
        {children} <span className="text-[#ff4c29]">_</span>
      </h2>
      {subtitle && (
        <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-bold mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ff4c29] selection:text-white">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801945457270"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-8 h-8 text-white fill-current" />
        <span className="absolute right-20 bg-black/80 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border-r-2 border-[#25D366]">
          Contact on WhatsApp
        </span>
      </a>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-md py-4 border-b border-neutral-900" : "bg-transparent py-8"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className="flex items-center space-x-2 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 bg-[#ff4c29] flex items-center justify-center transform rotate-45 group-hover:scale-110 group-hover:bg-white transition-all">
              <Flame className="text-white transform -rotate-45 w-6 h-6 group-hover:text-[#ff4c29]" />
            </div>
            <span className="text-2xl font-teko font-bold tracking-tighter uppercase ml-2 group-hover:tracking-widest transition-all">
              Booyah<span className="text-[#ff4c29]">Pro</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {["Stats", "Armory", "Squad", "Characters", "Coach", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm uppercase font-bold tracking-widest hover:text-[#ff4c29] relative group overflow-hidden"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff4c29] translate-x-[-101%] group-hover:translate-x-0 transition-transform"></span>
                </button>
              ),
            )}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#ff4c29] px-6 py-2 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all clip-path-slant"
            >
              Connect
            </button>
          </div>

          <button
            className="md:hidden p-2 bg-neutral-900 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center space-y-8 p-10 animate-fadeIn md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 p-3 bg-neutral-900 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>
          {["Stats", "Armory", "Squad", "Characters", "Coach", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-5xl font-teko font-bold uppercase tracking-tighter hover:text-[#ff4c29]"
              >
                {item}
              </button>
            ),
          )}
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full bg-[#ff4c29] py-5 font-bold uppercase tracking-widest text-xl clip-path-slant"
          >
            Connect Now
          </button>
        </div>
      )}

      {/* Hero / Identity Section */}
      <section className="relative min-h-screen pt-24 overflow-hidden flex flex-col">
        {/* Banner */}
        <div className="absolute top-0 left-0 w-full h-[50vh] z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
          <img
            src={PLAYER_DATA.banner}
            className="w-full h-full object-cover opacity-60 scale-105 hover:scale-110 transition-transform duration-[10s]"
            alt="Banner"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-24 mb-12 mt-20">
            {/* Real Player Photo Card */}
            <div className="relative group">
              <div className="profile-frame w-64 h-80 lg:w-72 lg:h-96 shadow-[0_0_50px_rgba(255,76,41,0.2)]">
                <div className="scanline"></div>
                <div
                  className="w-full h-full bg-neutral-950 flex items-center justify-center overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                  }}
                >
                  <img
                    src={PLAYER_DATA.avatar}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    alt="Player"
                  />
                </div>
              </div>

              {/* Game Profile Screenshot Overlay */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 w-48 h-32 lg:w-56 lg:h-36 bg-neutral-900 border-2 border-neutral-800 p-1 group-hover:border-[#ff4c29] transition-all transform hover:rotate-2 shadow-xl z-30">
                <div className="relative w-full h-full bg-black overflow-hidden">
                  <img
                    src={PLAYER_DATA.gameProfile}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                    alt="Game Profile"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/80 px-2 py-1 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-tighter uppercase text-[#ff4c29]">
                      Verified Profile
                    </span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Text */}
            <div className="flex-grow text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <span className="bg-[#ff4c29] text-[10px] px-3 py-1 font-black uppercase tracking-widest rounded-full">
                  Season 35 Pro
                </span>
                <span className="text-neutral-500 font-bold uppercase tracking-widest text-xs">
                  Tier: {PLAYER_DATA.rank}
                </span>
              </div>

              <h1 className="text-8xl md:text-9xl font-teko font-black uppercase leading-[0.8] tracking-tighter text-white mb-6">
                {PLAYER_DATA.name}
              </h1>

              <p className="text-xl text-neutral-400 font-medium max-w-lg mb-8 italic">
                "{PLAYER_DATA.tagline}"
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="bg-neutral-900/80 backdrop-blur px-6 py-3 border border-neutral-800 flex items-center space-x-4">
                  <div className="text-left">
                    <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">
                      Player UID
                    </p>
                    <p className="font-teko text-2xl text-white">
                      {PLAYER_DATA.id}
                    </p>
                  </div>
                  <button
                    onClick={handleCopyId}
                    className="p-3 bg-neutral-800 hover:bg-[#ff4c29] transition-all rounded-md"
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <button
                  onClick={() => scrollToSection("stats")}
                  className="bg-[#ff4c29] px-8 py-4 font-bold uppercase tracking-widest flex items-center space-x-3 cursor-pointer hover:bg-white hover:text-black transition-all"
                >
                  <span>Battle Log</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decals */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        className="py-32 relative bg-[#080808] border-y border-neutral-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Professional Performance">
            Battle Statistics
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              label="Kills"
              value={INITIAL_STATS.kills}
              icon={<Swords />}
              color="border-orange-600"
            />
            <StatsCard
              label="Headshot %"
              value={`${INITIAL_STATS.headshots}%`}
              icon={<Target />}
              color="border-red-600"
            />
            <StatsCard
              label="Win Rate"
              value={`${((INITIAL_STATS.wins / INITIAL_STATS.matches) * 100).toFixed(1)}%`}
              icon={<Trophy />}
              color="border-yellow-600"
            />
            <StatsCard
              label="Accuracy"
              value={`${INITIAL_STATS.accuracy}%`}
              icon={<Crosshair />}
              color="border-blue-600"
            />
          </div>
        </div>
      </section>

      {/* Squad Section */}
      <section id="squad" className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Elite Brotherhood">
            The Brotherhood Squad
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAMMATES.map((mate) => (
              <div
                key={mate.id}
                onClick={() => setSelectedMate(mate)}
                className="group relative h-96 cursor-pointer overflow-hidden border border-neutral-800 hover:border-[#ff4c29] transition-all duration-500"
              >
                <img
                  src={mate.image}
                  alt={mate.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ff4c29] mb-1 block">
                    {mate.role}
                  </span>
                  <h4 className="text-3xl font-teko font-bold uppercase text-white leading-none">
                    {mate.name}
                  </h4>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    <span>View Profile</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teammate Detail Modal */}
      {selectedMate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-black/80 animate-fadeIn"
          onClick={() => setSelectedMate(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-900 border border-[#ff4c29] shadow-[0_0_50px_rgba(255,76,41,0.3)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMate(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-[#ff4c29] transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  src={selectedMate.image}
                  className="w-full h-full object-cover"
                  alt={selectedMate.name}
                />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <span className="bg-[#ff4c29] text-[10px] px-3 py-1 font-black uppercase tracking-widest inline-block mb-4 self-start">
                  Active Team Mate
                </span>
                <h3 className="text-5xl font-teko font-bold uppercase text-white mb-6 leading-none">
                  {selectedMate.name}
                </h3>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-1">
                    <div className="flex items-center text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                      <Zap className="w-3 h-3 mr-1 text-[#ff4c29]" />
                      Level
                    </div>
                    <p className="font-teko text-2xl">{selectedMate.level}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                      <Calendar className="w-3 h-3 mr-1 text-[#ff4c29]" />
                      Experience
                    </div>
                    <p className="font-teko text-2xl">
                      {selectedMate.experience}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                      <Target className="w-3 h-3 mr-1 text-[#ff4c29]" />
                      UID
                    </div>
                    <p className="font-teko text-2xl">{selectedMate.uid}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                      <Layers className="w-3 h-3 mr-1 text-[#ff4c29]" />
                      Role
                    </div>
                    <p className="font-teko text-2xl">{selectedMate.role}</p>
                  </div>
                </div>

                <div className="border-t border-neutral-800 pt-6 mb-8">
                  <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest mb-2 flex items-center">
                    <Shield className="w-3 h-3 mr-1 text-[#ff4c29]" />
                    Strategic Doctrine
                  </p>
                  <p className="text-neutral-300 text-sm italic leading-relaxed">
                    "{selectedMate.strategy}"
                  </p>
                </div>

                <a
                  href={selectedMate.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-white hover:text-black transition-all clip-path-slant shadow-[0_10px_20px_rgba(37,211,102,0.2)]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Contact on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Armory Section */}
      <section
        id="armory"
        className="py-32 bg-neutral-950 overflow-hidden border-t border-neutral-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Lethal Equipment">
            Evolution Vault
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WEAPONS.map((weapon, idx) => (
              <div
                key={idx}
                className="group relative bg-neutral-900/30 border border-neutral-800 p-1 hover:border-[#ff4c29] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4c29] opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-all"></div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={weapon.image}
                    alt={weapon.name}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff4c29] text-[10px] px-3 py-1 font-black uppercase tracking-widest shadow-lg">
                      {weapon.skin}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-teko font-bold uppercase tracking-wider mb-6 group-hover:text-[#ff4c29] transition-colors">
                    {weapon.name}
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(weapon.stats).map(([stat, val]) => (
                      <div key={stat}>
                        <div className="flex justify-between text-[10px] uppercase font-bold mb-1.5 text-neutral-500 group-hover:text-neutral-300 transition-colors">
                          <span>{stat}</span>
                          <span>{val}%</span>
                        </div>
                        <div className="w-full bg-neutral-800/50 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-[#ff4c29] h-full transition-all duration-1000 delay-300 group-hover:w-full"
                            style={{ width: `${val}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Tactical Abilities">
            Active Combatants
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {CHARACTERS.map((char, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 bg-neutral-900 border border-neutral-800 group hover:border-[#ff4c29] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-all">
                  <User className="w-32 h-32 text-white" />
                </div>
                <div className="w-64 h-80 overflow-hidden flex-shrink-0 border-4 border-neutral-800 group-hover:border-[#ff4c29] transition-all relative">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6 relative z-10 text-center md:text-left">
                  <h3 className="text-5xl font-teko font-bold uppercase mb-2 group-hover:text-[#ff4c29] transition-colors">
                    {char.name}
                  </h3>
                  <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#ff4c29]/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#ff4c29]" />
                    </div>
                    <span className="text-[#ff4c29] text-xs font-bold uppercase tracking-widest">
                      {char.ability}
                    </span>
                  </div>
                  <p className="text-neutral-400 leading-relaxed text-sm italic mb-8 max-w-sm">
                    "{char.description}"
                  </p>
                  <button className="w-full md:w-auto px-10 py-3 bg-neutral-800 text-[10px] font-bold uppercase tracking-widest hover:bg-[#ff4c29] transition-all">
                    Upgrade Level 6
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Battle Coach Section */}
      <section
        id="coach"
        className="py-32 bg-[#080808] relative border-y border-neutral-900"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTitle subtitle="Neural Strategic Analysis">
              Gemini AI Analyst
            </SectionTitle>
          </div>
          <AIAnalyst />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black relative overflow-hidden">
        {/* Abstract BG elements */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ff4c29]/5 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle subtitle="Direct Communications">
            Mission Command
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Mail Card */}
            <div className="bg-neutral-900 border border-neutral-800 p-12 group hover:border-[#ff4c29] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all">
                <Mail className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#ff4c29]/10 flex items-center justify-center rounded-lg mb-8 group-hover:bg-[#ff4c29] transition-all">
                  <Mail className="w-8 h-8 text-[#ff4c29] group-hover:text-white" />
                </div>
                <h3 className="text-4xl font-teko font-bold uppercase mb-4 tracking-wider text-white">
                  Direct Briefing
                </h3>
                <p className="text-neutral-400 mb-8 leading-relaxed max-w-sm">
                  For business inquiries, tournament invites, or sponsorship
                  opportunities, send a secure mission briefing.
                </p>
                {/* Fixed Mail Button: Using proper anchor tag with mailto */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rahmanleanur@gmail.com&su=Portfolio%20Inquiry"
                  className="inline-flex items-center justify-center space-x-3 bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#ff4c29] hover:text-white transition-all clip-path-slant min-w-[200px]"
                >
                  <span>Send Mail</span>
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-neutral-900 border border-neutral-800 p-12 group hover:border-[#25D366] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all">
                <MessageCircle className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-[#25D366]/10 flex items-center justify-center rounded-lg group-hover:bg-[#25D366] transition-all">
                    <MessageCircle className="w-8 h-8 text-[#25D366] group-hover:text-white fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">
                      Instant Comms
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
                      <span className="text-[#25D366] text-xs font-bold uppercase tracking-widest">
                        Online Now
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-4xl font-teko font-bold uppercase mb-4 tracking-wider text-white">
                  WhatsApp Hub
                </h3>
                <p className="text-neutral-400 mb-8 leading-relaxed max-w-sm">
                  Need a quick response or want to discuss strategies live?
                  Connect via WhatsApp for immediate coordination.
                </p>
                <a
                  href="https://wa.me/8801945457270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 bg-[#25D366] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all clip-path-slant shadow-[0_10px_30px_rgba(37,211,102,0.2)] min-w-[200px]"
                >
                  <span>Chat Now</span>
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Career Highlights">Hall of Fame</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.id}
                className="bg-neutral-900 border border-neutral-800 p-8 flex flex-col items-center text-center group hover:bg-[#ff4c29] hover:-translate-y-2 transition-all duration-300 cursor-help"
              >
                <span className="text-6xl mb-6 group-hover:rotate-12 transition-transform duration-500">
                  {ach.icon}
                </span>
                <h4 className="text-xl font-bold uppercase tracking-widest mb-2 group-hover:text-white">
                  {ach.title}
                </h4>
                <p className="text-neutral-500 text-sm font-bold group-hover:text-white/70">
                  {ach.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-8 mb-12">
            {[Gamepad2, Share2, User, Mail, MessageCircle].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-4 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-[#ff4c29] hover:scale-110 transition-all"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div
            className="flex items-center justify-center space-x-2 mb-8 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 bg-[#ff4c29] flex items-center justify-center transform rotate-45">
              <Flame className="text-white transform -rotate-45 w-4 h-4" />
            </div>
            <span className="text-xl font-teko font-bold tracking-tighter uppercase">
              Booyah<span className="text-[#ff4c29]">Pro</span>
            </span>
          </div>

          <p className="text-neutral-600 text-xs uppercase tracking-[0.4em] font-bold">
            &copy; 2026 LEANUR_69 PRO GAMING. NOT AFFILIATED WITH GARENA.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
