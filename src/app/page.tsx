import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Hook } from "@/components/Hook";
import { VisualProof } from "@/components/VisualProof";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Hook />
      <VisualProof />
      <Features />
      <UseCases />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
