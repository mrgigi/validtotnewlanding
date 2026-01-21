import { Palette, ShoppingBag, Rocket, GraduationCap, PartyPopper } from "lucide-react";

const users = [
  {
    icon: Palette,
    title: "Creators",
    text: "Test thumbnails, headlines, or content ideas before publishing.",
  },
  {
    icon: ShoppingBag,
    title: "Shoppers",
    text: "Can’t decide between two items? Let the crowd choose.",
  },
  {
    icon: Rocket,
    title: "Founders",
    text: "Validate your startup idea before you build it.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    text: "Run quick surveys or settle group decisions.",
  },
  {
    icon: PartyPopper,
    title: "For Fun",
    text: "Settle debates like “Pineapple on pizza?” once and for all.",
  },
];

export function PotentialUsers() {
  return (
    <section className="w-full py-20 px-6 border-b-2 border-black bg-pink-50">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-black text-center">
          ONE PLATFORM.<br/>ENDLESS ANSWERS.
        </h2>
        
        <div className="space-y-4">
          {users.map((user, index) => (
            <div 
              key={index}
              className="flex items-center gap-6 bg-white border-2 border-black p-4 brutal-shadow-sm hover:translate-x-1 transition-transform"
            >
              <div className="bg-black text-white p-3 border-2 border-transparent">
                <user.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black uppercase mr-2">{user.title}</span>
                <span className="text-lg font-medium text-gray-800 hidden md:inline">— {user.text}</span>
                <p className="text-lg font-medium text-gray-800 md:hidden mt-1">{user.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
