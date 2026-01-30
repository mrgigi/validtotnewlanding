import { cn } from "@/lib/utils";

export function TrustedBy() {
  return (
    <section className="w-full py-12 border-b-2 border-black bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
        <h3 className="text-sm md:text-base font-black tracking-widest text-gray-500 uppercase">
          TRUSTED BY FORWARD-THINKING TEAMS
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Text-based logos simulating the image style */}
          <span className="text-2xl md:text-3xl font-bold text-gray-600 font-serif">
            <span className="font-black text-black">NEWS</span>WEEKLY
          </span>
          
          <span className="text-2xl md:text-3xl font-bold text-gray-600 tracking-tight">
            <span className="font-black text-black">THE</span>DAILY
          </span>
          
          <span className="text-2xl md:text-3xl font-light text-gray-600">
            <span className="font-black text-black">VOX</span>POPULI
          </span>
          
          <span className="text-2xl md:text-3xl font-black text-gray-600 tracking-tighter">
            Amahoro <span className="text-black">Coalition</span>
          </span>
        </div>
      </div>
    </section>
  );
}
