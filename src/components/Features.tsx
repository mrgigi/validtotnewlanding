import { cn } from "@/lib/utils";
import { DollarSign, Zap, Shield, Globe } from "lucide-react";

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
    description: "Get opinions from around the world. See exactly where your votes are coming from.",
    color: "bg-purple-300",
  },
];

export function Features() {
  return (
    <section className="w-full py-20 px-6 border-b-2 border-black bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-black text-center">
          WHY VALIDTOT IS DIFFERENT
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}
