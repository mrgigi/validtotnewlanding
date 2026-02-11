import { Globe, Shield, BarChart3, Users } from "lucide-react";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  organization: string;
  date: string;
  stats: {
    label: string;
    value: string;
    icon: any;
  }[];
  content: {
    mission: string;
    challenge: string;
    solution: {
      overview: string;
      features: {
        title: string;
        description: string;
      }[];
    };
    results: {
      overview: string;
      campaigns: {
        title: string;
        winner: { name: string; percentage: string };
        contestants: { name: string; percentage: string }[];
      }[];
    };
    whyUs: {
      title: string;
      description: string;
    }[];
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "amahoro-coalition-global-election",
    title: "5 Continents, 72 Hours, 1 Mandate",
    subtitle: "How Amahoro Coalition Secured the Future of African Leadership",
    organization: "Amahoro Coalition",
    date: "February 2026",
    stats: [
      { label: "Countries", value: "8+", icon: Globe },
      { label: "Voting Window", value: "72 Hrs", icon: Shield },
      { label: "Voter Turnout", value: "Verified", icon: Users },
      { label: "Security", value: "Bot-Proof", icon: BarChart3 },
    ],
    content: {
      mission: "The Amahoro Coalition is a pioneering, African-led initiative—the first of its kind to convene private sector leaders to drive economic inclusion for displaced persons. To lead this prestigious community, the Coalition needed to elect an Alumni Leadership Committee with absolute transparency and zero margin for error.",
      challenge: "With a fellowship that spans the globe, the election needed to be accessible to leaders residing in Nigeria, Kenya, Ethiopia, South Africa, Uganda, Ghana, France, and Australia. The Coalition faced a massive logistical hurdle: finding a platform that could handle international traffic, verify identities securely across borders, and remain inclusive for users on diverse devices and networks.",
      solution: {
        overview: "ValiDToT served as the high-performance digital infrastructure for this landmark event. From January 30th at 00:00 to February 1st at 11:59 PM, the system managed two high-stakes campaigns.",
        features: [
          {
            title: "Bot-Proof Security",
            description: "IP checks and browser fingerprinting enforced a strict one person, one vote policy, protecting the credibility of the process."
          },
          {
            title: "Smart Scheduling",
            description: "A tightly controlled 72-hour voting window with automated start and end times removed room for error or manipulation."
          },
          {
            title: "Seamless Onboarding",
            description: "Voters registered and verified quickly, allowing strong security without creating technical barriers to participation."
          }
        ]
      },
      results: {
        overview: "The data speaks for itself. Through the Deep Analytics dashboard, the Coalition monitored real-time engagement and geographic participation from West Africa to the Australian coast.",
        campaigns: [
          {
            title: "Alumni President",
            winner: { name: "Ibe Kalu", percentage: "51%" },
            contestants: [
              { name: "Zang Luka", percentage: "49%" }
            ]
          },
          {
            title: "Alumni Secretary",
            winner: { name: "Esther Kitumaini", percentage: "45%" },
            contestants: [
              { name: "Didier Maliki", percentage: "25%" },
              { name: "Tracy Yekaghe", percentage: "18%" },
              { name: "Ayuk Peterkings", percentage: "13%" }
            ]
          }
        ]
      },
      whyUs: [
        {
          title: "Truly Global Reach",
          description: "Purpose-built for international participation and rigorously tested across continents."
        },
        {
          title: "Experience Real-Time Visibility",
          description: "Monitor voting activity as it unfolds with dynamic, interactive charts that allow you to identify emerging trends instantly."
        },
        {
          title: "Multi-Account Guard",
          description: "Backed by sophisticated detection mechanisms that actively prevent duplicate or fraudulent voting attempts, safeguarding fairness, transparency, and trust at every stage."
        },
        {
          title: "One-Click Audit Reports",
          description: "Instantly generate audit-ready results in CSV, PDF, or PNG formats, enabling professional reporting, compliance reviews, and deep post-election analysis with ease."
        }
      ]
    }
  }
];
