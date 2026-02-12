import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="scale-75 origin-left">
          <Logo size="lg" className="border-2 border-white" />
        </div>
        <div className="flex gap-8 font-bold text-sm md:text-base">
          <a href="/about" className="hover:text-secondary hover:underline">About</a>
          <a href="/case-studies" className="hover:text-secondary hover:underline">Case Studies</a>
          <a href="/privacy" className="hover:text-secondary hover:underline">Privacy</a>
          <a href="/terms" className="hover:text-secondary hover:underline">Terms</a>
          <a href="/contact" className="hover:text-secondary hover:underline">Contact</a>
        </div>
        <div className="text-sm font-medium text-gray-400">
          © {new Date().getFullYear()} ValidToT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
