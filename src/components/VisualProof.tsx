import { ShieldCheck, UserCheck } from "lucide-react";

export function VisualProof() {
  return (
    <section className="w-full py-20 px-6 border-b-2 border-black bg-blue-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-black">
            REAL HUMANS.<br/>
            VERIFIED VOTES.
          </h2>
          <p className="text-xl font-bold text-green-700 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" />
            Look for the Green Badge. Every vote is from a verified human.
          </p>
          <p className="text-lg font-medium leading-relaxed">
            That “Verified Human” badge isn’t just decoration. 
            Our system blocks bots, duplicate accounts, and spam — so when you see 54%, it actually means 54% of real people.
          </p>
          <div className="bg-white border-2 border-black p-4 inline-block brutal-shadow-sm font-bold">
            One person. One vote. No fake engagement.
          </div>
        </div>
        
        {/* Visual representation/Mockup */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="bg-white border-2 border-black p-6 w-full max-w-md brutal-shadow rotate-1">
            <div className="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
              <span className="font-bold">Poll #ALUMNI-2026</span>
              <span className="bg-green-400 text-black text-xs font-black px-2 py-1 border border-black flex items-center gap-1">
                <UserCheck className="w-3 h-3" /> VERIFIED HUMAN
              </span>
            </div>
            <div className="space-y-4">
              <div className="font-bold text-xl">2026 Alumni Association President Election</div>
              <div className="space-y-2">
                <div className="relative h-12 border-2 border-black bg-gray-100 flex items-center px-4">
                  <div className="absolute top-0 left-0 h-full bg-purple-200 w-[54%] border-r-2 border-black z-0"></div>
                  <span className="relative z-10 font-bold flex justify-between w-full">
                    <span>ELENA RODRIGUEZ ('08)</span>
                    <span>54%</span>
                  </span>
                </div>
                <div className="relative h-12 border-2 border-black bg-gray-100 flex items-center px-4">
                  <div className="absolute top-0 left-0 h-full bg-yellow-200 w-[46%] border-r-2 border-black z-0"></div>
                  <span className="relative z-10 font-bold flex justify-between w-full">
                    <span>MARCUS WEBB ('12)</span>
                    <span>46%</span>
                  </span>
                </div>
              </div>
              <div className="text-sm font-mono text-gray-500 pt-2">
                214,592 verified votes • Final Results
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
