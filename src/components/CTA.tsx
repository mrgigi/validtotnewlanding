import Link from "next/link";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section className="w-full py-24 px-6 bg-primary text-white border-b-2 border-black">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl md:text-7xl font-black leading-tight">
          STOP GUESSING.<br/>START VALIDATING.
        </h2>
        <p className="text-xl md:text-2xl font-bold">
          Join thousands of people getting real answers in seconds.
        </p>
        <div className="pt-4">
          <Link
            href="#"
            className={cn(
              "inline-block bg-secondary text-black text-xl font-black py-5 px-10 rounded-none",
              "border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            )}
          >
            CREATE A POLL (IT’S FREE)
          </Link>
        </div>
      </div>
    </section>
  );
}
