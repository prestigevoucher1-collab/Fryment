"use client";

import Link from "next/link";
import { GraduationCap, ArrowLeft, ScrollText } from "lucide-react";

export default function TermsPage() {
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
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 border border-primary/10">
              <ScrollText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tight">Terms of Service</h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              The legal framework that ensures a safe and reliable booking experience for all Fryment students.
            </p>
          </div>

          <div className="prose prose-xl max-w-none 
            prose-headings:text-primary prose-headings:font-black prose-headings:mt-12
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-strong:text-primary prose-strong:font-black">
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Fryment's platform, you agree to be bound by these terms. We provide PTE Academic vouchers as an authorized partner hub. Use of these vouchers is also subject to Pearson VUE's official examination policies.
            </p>

            <h2>2. User Responsibility</h2>
            <p>
              You are responsible for providing accurate personal details during the booking process. Any mismatch between your PTE registration and your Passport identity is your sole responsibility.
            </p>

            <h2>3. Voucher Usage</h2>
            <p>
              Vouchers provided by Fryment are:
            </p>
            <ul>
              <li>Valid for 12 months from issuance.</li>
              <li>Valid at any authorized Pearson VUE test center in India.</li>
              <li>Transferable until used, but cannot be resold commercially.</li>
            </ul>

            <h2>4. Limitation of Liability</h2>
            <p>
              Fryment is a voucher distributor. We are not responsible for exam results, technical failures at Pearson test centers, or changes in Pearson's examination policies. Our liability is limited to the cost of the voucher purchased.
            </p>

            <h2>5. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Nashik, Maharashtra.
            </p>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 mt-16">
              <p className="text-sm font-bold text-slate-500 italic m-0">
                Last Updated: May 2026. By purchasing a voucher, you confirm you have read and understood these terms.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
