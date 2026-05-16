"use client";

import Link from "next/link";
import { GraduationCap, ArrowLeft, Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen font-body text-text-rich selection-premium">
      <nav className="h-20 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-[1000]">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/pte" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight text-primary">Fryment</span>
          </Link>
          <Link href="/pte" className="text-sm font-black text-slate-500 hover:text-primary transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Link>
        </div>
      </nav>

      <main className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-success/5 rounded-2xl flex items-center justify-center text-success mb-6 border border-success/10">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tight">Privacy Policy</h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              We value your trust. Here is how we protect your data and maintain your privacy at Fryment.
            </p>
          </div>

          <div className="prose prose-xl max-w-none 
            prose-headings:text-primary prose-headings:font-black prose-headings:mt-12
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-strong:text-primary prose-strong:font-black">
            
            <h2>Data Collection</h2>
            <p>
              We collect essential information to process your voucher booking: Name, Email, WhatsApp Number, and State. This data is used solely for voucher delivery and support.
            </p>

            <h2>Data Security</h2>
            <p>
              Your data is stored securely using industry-standard encryption on our Supabase backend. We do not store any credit card or banking information; all payments are handled by <strong>Paytm</strong>, a secure PCI-DSS compliant gateway.
            </p>

            <h2>Third-Party Sharing</h2>
            <p>
              We do not sell or rent your data to third parties. We share your information only with essential partners (like Pearson VUE) to facilitate your exam booking.
            </p>

            <h2>Cookies</h2>
            <p>
              We use minimal cookies to enhance your browsing experience and analyze site traffic via Google Analytics to improve our student experience.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to request access to your data or ask for its deletion from our active booking logs. Email us at <strong>privacy@fryment.com</strong> for any concerns.
            </p>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 mt-16">
              <p className="text-sm font-bold text-slate-500 italic m-0">
                Last Updated: May 2026. Secure data management is at the core of the Fryment platform.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
