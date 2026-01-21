import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - ValidToT",
  description: "ValidToT Terms of Service. Please read carefully before using our platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl font-black mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-lg leading-relaxed text-gray-800">
           <p className="text-sm text-gray-500 font-mono">Last Updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-bold mt-8 mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using ValidToT, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-2">2. Use of Platform</h2>
          <p>
            ValidToT is a platform for creating and voting on polls. You agree not to use the platform for any illegal purpose, 
            or to harass, abuse, or harm others. We reserve the right to remove any content that violates these standards.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-2">3. User Content</h2>
          <p>
            You retain ownership of the content you create (your polls). However, by posting content, you grant ValidToT a 
            worldwide, non-exclusive license to use, reproduce, and display that content in connection with the service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-2">4. Disclaimer</h2>
          <p>
            ValidToT is provided "as is" without warranties of any kind. We do not guarantee the accuracy of poll results 
            or that the service will be uninterrupted or error-free.
          </p>

           <h2 className="text-2xl font-bold mt-8 mb-2">5. Contact</h2>
          <p>
            For any legal inquiries, please contact <a href="mailto:support@gigimobile.com" className="text-primary underline font-bold">support@gigimobile.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
