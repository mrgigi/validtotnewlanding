import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Trophy } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";
import { cn } from "@/lib/utils";
import { CTA } from "@/components/CTA";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Header */}
      <section className="w-full py-20 px-6 border-b-2 border-black bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <Link href="/case-studies" className="inline-flex items-center gap-2 font-bold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          
          <div className="space-y-4">
            <span className="bg-secondary text-black text-sm font-black px-3 py-1 border border-black uppercase tracking-wider">
              {study.organization}
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {study.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-600">
              {study.subtitle}
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {study.stats.map((stat, i) => (
              <div key={i} className="border-2 border-black p-4 bg-gray-50 brutal-shadow-sm">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <stat.icon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                </div>
                <div className="text-xl md:text-2xl font-black">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-20 px-6 bg-[#fffcf2]">
        <div className="max-w-3xl mx-auto space-y-16">
          
          {/* Mission & Challenge */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-black mb-4 uppercase tracking-wide border-b-4 border-secondary inline-block">The Mission</h2>
              <p className="text-lg leading-relaxed">{study.content.mission}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-black mb-4 uppercase tracking-wide border-b-4 border-accent inline-block">The Challenge</h2>
              <p className="text-lg leading-relaxed">{study.content.challenge}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white border-2 border-black p-8 brutal-shadow">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-wide border-b-4 border-primary inline-block">The Solution</h2>
            <p className="text-lg leading-relaxed mb-8">{study.content.solution.overview}</p>
            
            <div className="grid gap-6">
              {study.content.solution.features.map((feature, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-black text-white p-1 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-8">
            <h2 className="text-2xl font-black uppercase tracking-wide border-b-4 border-green-400 inline-block">The Results</h2>
            <p className="text-lg leading-relaxed">{study.content.results.overview}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {study.content.results.campaigns.map((campaign, i) => (
                <div key={i} className="border-2 border-black bg-white p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-secondary px-3 py-1 border-l-2 border-b-2 border-black font-bold text-xs">
                    WINNER DECLARED
                  </div>
                  <h3 className="font-black text-xl mb-6 pr-24">{campaign.title}</h3>
                  
                  {/* Winner */}
                  <div className="mb-6 bg-green-50 border-2 border-green-200 p-4 rounded-sm">
                    <div className="flex items-center gap-2 text-green-700 font-bold text-xs uppercase mb-2">
                      <Trophy className="w-4 h-4" /> The Winner
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="font-black text-2xl">{campaign.winner.name}</span>
                      <span className="font-black text-3xl text-green-600">{campaign.winner.percentage}</span>
                    </div>
                    <div className="w-full bg-green-200 h-2 mt-2 border border-green-300">
                      <div className="bg-green-500 h-full" style={{ width: campaign.winner.percentage }}></div>
                    </div>
                  </div>

                  {/* Contestants */}
                  <div className="space-y-3">
                    {campaign.contestants.map((contestant, j) => (
                      <div key={j}>
                        <div className="flex justify-between text-sm font-bold mb-1">
                          <span className="text-gray-600">{contestant.name}</span>
                          <span>{contestant.percentage}</span>
                        </div>
                        <div className="w-full bg-gray-100 h-1">
                          <div className="bg-gray-400 h-full" style={{ width: contestant.percentage }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Us */}
          <div className="bg-black text-white p-8 md:p-12 border-2 border-black brutal-shadow-lg">
            <h2 className="text-3xl font-black mb-8 text-center text-white">Why {study.organization} Chose ValidToT</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {study.content.whyUs.map((reason, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-bold text-secondary text-lg">{reason.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
