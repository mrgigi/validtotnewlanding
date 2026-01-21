import { cn } from "@/lib/utils";
import { DollarSign, Zap, Shield, Globe, BarChart3, Download, UserCheck, Lock, Calendar, PieChart } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "100% Free Forever",
    description: "Unlimited polls, unlimited votes. No hidden fees. No upgrades required.",
    color: "bg-green-300",
  },
  {
    icon: Zap,
    title: "Instant & Anonymous",
    description: "Create a poll in seconds. Voters respond in milliseconds. No sign-up required for voters.",
    color: "bg-yellow-300",
  },
  {
    icon: Shield,
    title: "Bot-Proof Security",
    description: "Smart verification using IP checks and browser fingerprinting. One person, one vote.",
    color: "bg-blue-300",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Get opinions from around the world. Accessible to anyone, anywhere, anytime.",
    color: "bg-purple-300",
  },
  {
    icon: BarChart3,
    title: "Live Analytics",
    description: "Watch votes roll in real-time with dynamic charts. Spot trends as they happen.",
    color: "bg-orange-300",
  },
  {
    icon: Download,
    title: "One-Click Export",
    description: "Download your results (CSV/PDF/PNG) instantly for presentations or deep analysis.",
    color: "bg-pink-300",
  },
  {
    icon: UserCheck,
    title: "Multi-Account Guard",
    description: "Our system detects and blocks attempts to game the vote using multiple accounts. Fair results, always.",
    color: "bg-cyan-300",
  },
  {
    icon: Lock,
    title: "Private Campaigns",
    description: "Secure your polls with a secret key. Perfect for private communities, internal teams, or VIP groups.",
    color: "bg-red-300",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Plan ahead. Schedule polls to go live automatically and set strict countdowns for when voting ends.",
    color: "bg-lime-300",
  },
  {
    icon: PieChart,
    title: "Deep Analytics",
    description: "Track viewer-to-voter conversion, monitor unique views vs voters, analyze voting trends over time, and drill down into detailed demographics.",
    color: "bg-indigo-300",
  },
];

export function Features() {
  return (
    <section className="w-full py-20 px-6 border-b-2 border-black bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-black text-center">
          WHY VALIDTOT IS DIFFERENT
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={cn(
                "border-2 border-black p-6 flex flex-col items-start gap-4 brutal-shadow hover:-translate-y-1 transition-transform",
                feature.color
              )}
            >
              <div className="bg-white border-2 border-black p-3 rounded-full">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black leading-none">{feature.title}</h3>
              <p className="font-medium text-lg leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-3xl font-black italic">
            & MORE...
          </p>
        </div>
      </div>
    </section>
  );
}
