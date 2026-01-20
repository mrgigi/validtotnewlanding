import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

export function Navbar() {
  return (
    <nav className="w-full border-b-2 border-black bg-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="block">
          <Logo size="md" />
        </Link>
        <div className="flex gap-4 items-center">
          <Link 
            href="#" 
            className="hidden md:block font-bold hover:underline"
          >
            Log in
          </Link>
          <Link 
            href="#" 
            className={cn(
              "bg-primary text-white font-bold py-2 px-4 rounded-none",
              "border-2 border-black brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            )}
          >
            CREATE POLL
          </Link>
        </div>
      </div>
    </nav>
  );
}
