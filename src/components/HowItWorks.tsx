import { MessageSquarePlus, Share2, BarChart3, ArrowRight } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="w-full py-20 px-6 border-b-2 border-black bg-white">
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black">
          HOW IT WORKS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 items-start relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-4 relative z-10">
            <div className="w-20 h-20 bg-primary border-2 border-black flex items-center justify-center text-white brutal-shadow mb-4">
              <MessageSquarePlus className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black uppercase">1. Create a Poll</h3>
            <p className="font-medium text-lg">Add your question and options. Takes less than 30 seconds.</p>
          </div>

          {/* Arrow 1 (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[28%] right-[66%] h-1 bg-black z-0"></div>
           <ArrowRight className="hidden md:block absolute top-7 left-[32%] w-8 h-8 z-0" />

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-4 relative z-10">
            <div className="w-20 h-20 bg-secondary border-2 border-black flex items-center justify-center text-black brutal-shadow mb-4">
              <Share2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black uppercase">2. Share the Link</h3>
            <p className="font-medium text-lg">Post it anywhere — WhatsApp, Instagram, X, email.</p>
          </div>

          {/* Arrow 2 (Desktop) */}
           <div className="hidden md:block absolute top-10 left-[61%] right-[33%] h-1 bg-black z-0"></div>
           <ArrowRight className="hidden md:block absolute top-7 left-[65%] w-8 h-8 z-0" />


          {/* Step 3 */}
          <div className="flex flex-col items-center gap-4 relative z-10">
            <div className="w-20 h-20 bg-accent border-2 border-black flex items-center justify-center text-white brutal-shadow mb-4">
              <BarChart3 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black uppercase">3. Get Verified Votes</h3>
            <p className="font-medium text-lg">Watch real humans vote in real time. Export results when you’re done.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
