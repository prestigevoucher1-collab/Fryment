"use client";

import Link from "next/link";
import { GraduationCap, ArrowLeft, ShieldAlert } from "lucide-react";

export default function RefundPolicy() {
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
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tight">Refund Policy</h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Transparent, fair, and student-first. Here's how we handle voucher returns and cancellations.
            </p>
          </div>

          <div className="prose prose-xl max-w-none 
            prose-headings:text-primary prose-headings:font-black prose-headings:mt-12
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-strong:text-primary prose-strong:font-black">
            
            <h2>Voucher Nature</h2>
            <p>
              PTE vouchers are digital products with immediate activation capability. Once a 12-digit code is delivered to your WhatsApp or Email, it is considered "opened" and "consumed" from our inventory.
            </p>

            <h2>Eligibility for Refund</h2>
            <p>
              Refunds are strictly provided under the following conditions:
            </p>
            <ul>
              <li><strong>Duplicate Payment:</strong> If you were charged twice for a single order due to a technical glitch.</li>
              <li><strong>Delivery Failure:</strong> If we fail to deliver a valid code within 24 hours of successful payment.</li>
              <li><strong>Invalid Code:</strong> In the rare event that a code is verified as invalid by Pearson VUE <em>before</em> your first attempt at using it.</li>
            </ul>

            <h2>Non-Refundable Scenarios</h2>
            <p>
              We cannot process refunds if:
            </p>
            <ul>
              <li>The student changes their mind after receiving the code.</li>
              <li>The student fails to attend the exam on the scheduled date.</li>
              <li>The voucher expires (validity is typically 12 months).</li>
              <li>The student books the wrong type of exam (e.g., PTE Academic instead of UKVI).</li>
            </ul>

            <h2>How to Request</h2>
            <p>
              To initiate a refund request, please email <strong>hello@fryment.com</strong> with your Order ID and payment receipt. Our compliance team will review the status of the voucher code with Pearson VUE and process eligible refunds within 5-7 working days.
            </p>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 mt-16">
              <p className="text-sm font-bold text-slate-500 italic m-0">
                Last Updated: May 2026. Fryment reserves the right to verify voucher status before processing any refund.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
