import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin } from "lucide-react";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export const metadata: Metadata = {
  title: "Contact Us - ValidToT",
  description: "Get in touch with the ValidToT team for support, feedback, or inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 py-20 max-w-6xl">
        <h1 className="text-5xl font-black mb-12 text-center">Get in Touch</h1>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-white border-2 border-black p-8 brutal-shadow">
              <h2 className="text-3xl font-black mb-6">Contact Info</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white p-3 border-2 border-black">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-500 uppercase text-sm">Email Us</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <a href="mailto:support@gigimobile.com" className="text-xl font-black hover:underline">
                        support@gigimobile.com
                      </a>
                      <CopyEmailButton email="support@gigimobile.com" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-secondary text-black p-3 border-2 border-black">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-500 uppercase text-sm">Call Us</p>
                    <a href="tel:+27739039856" className="text-xl font-black hover:underline">
                      +27 73 903 9856
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-accent text-white p-3 border-2 border-black">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-500 uppercase text-sm">Location</p>
                    <p className="text-xl font-black">
                      Johannesburg, South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-blue-50 border-2 border-black border-dashed">
              <p className="font-bold text-lg text-center">
                Need quick help? Check out our FAQ or message us directly on social media for faster responses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
