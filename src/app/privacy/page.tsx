import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - ValidToT",
  description: "Read ValidToT's Privacy Policy to understand how we protect your data and anonymity.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl font-black mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-lg leading-relaxed text-gray-800">
          <p className="text-sm text-gray-500 font-mono">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            Your privacy is at the core of ValidToT. We are an anonymous polling platform, which means we are designed 
            to collect as little personal information as possible while ensuring the integrity of our votes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-2">1. Information We Collect</h2>
          <p>
            <strong>Usage Data:</strong> We collect anonymous technical data such as browser type, device information, 
            and IP address hashes to prevent bot activity and ensure "one person, one vote."
          </p>
          <p>
            <strong>Poll Content:</strong> The questions and options you create are public. Please do not include sensitive personal information in your polls.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To verify unique votes and prevent fraud.</li>
            <li>To operate and maintain the service.</li>
            <li>To analyze aggregate usage trends to improve ValidToT.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-2">3. Data Sharing</h2>
          <p>
            We do not sell your personal data. We share aggregated, anonymous voting data publicly on the platform (that's the whole point!).
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-2">4. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@gigimobile.com" className="text-primary underline font-bold">support@gigimobile.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
