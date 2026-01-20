import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 px-6 bg-secondary/10 border-b-2 border-black">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
          STOP GUESSING.<br/>
          ASK THE WORLD.<br/>
          <span className="text-primary bg-white px-2 border-2 border-black inline-block transform -rotate-1 brutal-shadow">
            GET REAL ANSWERS.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed text-gray-800">
          Create instant, anonymous polls and get verified votes from real humans.
          <br className="hidden md:block"/>
          No paywalls. No bots. Just honest, unbiased feedback.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            href="https://app.validtot.com/auth"
            className={cn(
              "flex items-center gap-2 bg-primary text-white text-lg font-black py-4 px-8 rounded-none",
              "border-2 border-black brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            )}
          >
            START VALIDATING NOW <ArrowRight className="w-6 h-6" />
          </Link>
          
          <Link
            href="https://app.validtot.com"
            className={cn(
              "flex items-center gap-2 bg-white text-black text-lg font-black py-4 px-8 rounded-none",
              "border-2 border-black brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            )}
          >
            SEE LIVE FEED <Activity className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
