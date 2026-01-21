import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin } from "lucide-react";

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
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
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
                    <a href="mailto:support@gigimobile.com" className="text-xl font-black hover:underline">
                      support@gigimobile.com
                    </a>
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
              <p className="font-bold text-lg">
                Need quick help? Check out our FAQ or message us directly on social media for faster responses.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border-2 border-black p-8 brutal-shadow-lg transform rotate-1">
            <h2 className="text-3xl font-black mb-6">Send a Message</h2>
            <form 
              action="mailto:support@gigimobile.com" 
              method="post" 
              encType="text/plain"
              className="space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="font-bold block uppercase text-sm">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full border-2 border-black p-3 font-medium focus:outline-none focus:ring-4 focus:ring-primary/20 bg-gray-50"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="font-bold block uppercase text-sm">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full border-2 border-black p-3 font-medium focus:outline-none focus:ring-4 focus:ring-primary/20 bg-gray-50"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-bold block uppercase text-sm">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  className="w-full border-2 border-black p-3 font-medium focus:outline-none focus:ring-4 focus:ring-primary/20 bg-gray-50 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className={cn(
                  "w-full bg-black text-white font-black py-4 px-8 text-lg uppercase tracking-wide",
                  "border-2 border-transparent hover:bg-primary hover:border-black hover:text-white transition-colors brutal-shadow-sm active:translate-y-1 active:shadow-none"
                )}
              >
                Send Message
              </button>
              
              <p className="text-xs text-center text-gray-500 font-medium">
                Note: This will open your default email client.
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
