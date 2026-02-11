import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Case Studies - ValidToT",
  description: "See how organizations use ValidToT to secure their elections and validate decisions.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full py-20 px-6 border-b-2 border-black bg-secondary/10">
        <div className="max-w-6xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            REAL STORIES.<br/>
            REAL IMPACT.
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed text-gray-800">
            See how forward-thinking teams use ValidToT to secure their elections, validate ideas, and engage their communities.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link 
                href={`/case-studies/${study.slug}`} 
                key={study.slug}
                className="group block border-2 border-black brutal-shadow hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 bg-white"
              >
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="bg-primary text-white text-xs font-black px-3 py-1 border border-black uppercase tracking-wider">
                      {study.organization}
                    </span>
                    <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-3xl font-black leading-tight group-hover:underline decoration-4 underline-offset-4">
                      {study.title}
                    </h2>
                    <p className="text-lg text-gray-600 font-medium line-clamp-3">
                      {study.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t-2 border-black/10 flex items-center text-sm font-bold gap-2">
                    READ CASE STUDY <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
