import { cn } from "@/lib/utils";

const cases = [
  {
    category: "JOURNALISM",
    title: "Pulse Checks",
    quote: "We used ValidToT to gauge local reaction to the new stadium policy. The geo-fencing meant we knew the votes came from actual residents, not internet trolls.",
    author: "Sarah Jenkins",
    role: "Editor, City Chronicle",
    color: "bg-yellow-400 text-black",
  },
  {
    category: "PRODUCT",
    title: "Feature Testing",
    quote: "Before building our new UI, we A/B tested concepts on ValidToT. The duplicate-detection saved us from making decisions based on skewed data from a single enthusiastic user.",
    author: "Mark D.",
    role: "CPO, TechFlow",
    color: "bg-blue-400 text-black",
  },
  {
    category: "COMMUNITY",
    title: "Alumni Elections",
    quote: "Amahoro Coalition needed a secure way to handle our 2026 presidential vote. The private campaign keys meant only verified alumni could participate, giving us 100% confidence in the results.",
    author: "Cindy O.",
    role: "Cohort 1",
    color: "bg-green-400 text-black",
  },
];

export function UseCases() {
  return (
    <section className="w-full py-24 px-6 bg-black text-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="text-4xl md:text-6xl font-black text-center tracking-tight uppercase">
          BUILT FOR MODERN VALIDATION
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div 
              key={index}
              className="bg-[#111827] border border-gray-800 p-8 rounded-2xl flex flex-col gap-6 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className={cn(
                  "px-3 py-1 text-sm font-black uppercase rounded-sm tracking-wider",
                  item.color
                )}>
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                "{item.quote}"
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                <div className="w-12 h-12 rounded-full bg-gray-700" />
                <div>
                  <div className="font-bold">{item.author}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
