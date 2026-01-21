import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About ValidToT - Our Mission",
  description: "Learn about ValidToT's mission to provide instant, verified, and anonymous feedback from real people.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl font-black mb-8">About ValidToT</h1>
        
        <div className="space-y-6 text-lg leading-relaxed text-gray-800">
          <p className="text-2xl font-bold">
            We believe the truth shouldn't be hard to find.
          </p>
          
          <p>
            In a world of bots, fake reviews, and echo chambers, getting an honest opinion is rarer than ever. 
            Asking friends gives you biased answers. Market research takes weeks and costs a fortune. 
            Social media is flooded with noise.
          </p>
          
          <p>
            <span className="bg-primary text-white px-1 font-bold">ValidToT</span> was built to solve this. 
            We created a platform where anyone can ask a question and get instant answers from verified real humans. 
            No bots. No spam. Just raw, unfiltered truth.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-4">Our Mission</h2>
          <p>
            To democratize access to truth. Whether you're a startup founder testing an idea, a creator choosing a thumbnail, 
            or just someone settling a debate, you deserve to know what people really think.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-4">How We Verify</h2>
          <p>
            We use advanced browser fingerprinting and IP analysis to ensure every vote comes from a unique, real human. 
            We don't ask for intrusive personal data — we just verify you're human. This keeps ValidToT anonymous yet authentic.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
