import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import FontLoader from "@/components/FontLoader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "PTE Voucher India 2026 | Save on PTE Exam Fee – Fryment",
  description: "Buy verified PTE vouchers online with instant delivery in 60 seconds. Save on your PTE Academic exam fee — trusted by 8,000+ students. Book now.",
  keywords: "PTE voucher India, buy PTE voucher online, PTE Academic exam fee, discounted PTE voucher, PTE voucher instant delivery, DET voucher India, PTE exam discount code",
  authors: [{ name: "Fryment" }],
  openGraph: {
    title: "PTE Voucher India 2026 | Save on PTE Exam Fee – Fryment",
    description: "Buy verified PTE vouchers online with instant delivery in 60 seconds. Save on your PTE Academic exam fee — trusted by 8,000+ students. Book now.",
    url: "https://www.fryment.info",
    siteName: "Fryment",
    type: "website",
    images: [
      {
        url: "https://www.fryment.info/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PTE Voucher India 2026 | Save on PTE Exam Fee – Fryment",
    description: "Buy verified PTE vouchers online with instant delivery in 60 seconds. Save on your PTE Academic exam fee.",
    images: ["https://www.fryment.info/og-image.png"],
  },
  alternates: {
    canonical: "https://www.fryment.info",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth ${inter.variable} ${outfit.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <FontLoader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.fryment.info/#organization",
              "name": "Fryment",
              "url": "https://www.fryment.info",
              "logo": "https://www.fryment.info/og-image.png",
              "description": "Fryment is an India-based platform offering verified PTE Academic and Duolingo English Test (DET) exam vouchers with instant delivery and 24/7 support.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9930635149",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": []
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.fryment.info/#webpage",
              "url": "https://www.fryment.info",
              "name": "Fryment | Official PTE Vouchers & Free Mock Tests 2026",
              "description": "Get verified PTE vouchers at discounted prices on Fryment. Instant voucher delivery, transparent pricing, and 24/7 expert support. Save on your PTE Academic exam booking today.",
              "isPartOf": { "@id": "https://www.fryment.info/#organization" },
              "datePublished": "2026-01-05",
              "dateModified": "2026-07-01",
              "inLanguage": "en-IN",
              "primaryImageOfPage": "https://www.fryment.info/og-image.png"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fryment.info" },
                { "@type": "ListItem", "position": 2, "name": "PTE Vouchers", "item": "https://www.fryment.info/pte" }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "PTE Academic Exam Voucher",
              "description": "Verified, official PTE Academic exam voucher with instant email and WhatsApp delivery, valid for 12 months at any authorized Pearson test centre.",
              "brand": { "@type": "Brand", "name": "Fryment" },
              "offers": {
                "@type": "Offer",
                "url": "https://www.fryment.info/pte",
                "priceCurrency": "INR",
                "price": "17500",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2026-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "8000"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Buy and Redeem a PTE Voucher on Fryment",
              "step": [
                { "@type": "HowToStep", "name": "Select state and quantity", "text": "Choose your state and the number of vouchers on the Fryment booking form." },
                { "@type": "HowToStep", "name": "Complete payment", "text": "Pay securely via UPI, card, or net banking on Fryment's checkout." },
                { "@type": "HowToStep", "name": "Receive voucher code", "text": "Get your code by email and WhatsApp within 60 seconds of payment." },
                { "@type": "HowToStep", "name": "Log in to Pearson", "text": "Create or log into your official account at pearsonpte.com." },
                { "@type": "HowToStep", "name": "Choose test slot", "text": "Select your test type, city, and preferred date and time." },
                { "@type": "HowToStep", "name": "Apply voucher code", "text": "Enter the code in the 'Add Voucher or Promo Code' field at checkout." },
                { "@type": "HowToStep", "name": "Confirm booking", "text": "Pay any remaining balance and save your Pearson confirmation email." }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is a PTE voucher and why do I need one?", "acceptedAnswer": { "@type": "Answer", "text": "A PTE voucher is a prepaid code that covers your PTE Academic exam registration fee. Instead of paying Pearson's full listed fee directly, you buy the voucher at a discounted rate and enter the code at checkout on the official Pearson booking page to reduce or waive the fee." } },
                { "@type": "Question", "name": "Is Fryment a legit site to buy PTE vouchers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fryment sells authorized Pearson-partnered voucher codes that work at every certified PTE test centre. The platform has served 8,000+ students with a 4.9/5 rating, and every voucher is verified before delivery, with 24/7 WhatsApp support if you run into issues." } },
                { "@type": "Question", "name": "How much can I save with a Fryment PTE voucher?", "acceptedAnswer": { "@type": "Answer", "text": "The official PTE Academic fee in India is ₹18,900 including GST. Fryment vouchers start around ₹17,500, so you save on the exam fee without international transaction charges, since the discount is applied in INR directly." } },
                { "@type": "Question", "name": "How fast will I get my PTE voucher after payment?", "acceptedAnswer": { "@type": "Answer", "text": "Fryment delivers voucher codes within 60 seconds of successful payment, sent by both email and WhatsApp. You don't need to wait hours or raise a support ticket to start your Pearson booking." } },
                { "@type": "Question", "name": "How long is a PTE voucher valid for?", "acceptedAnswer": { "@type": "Answer", "text": "A Fryment PTE voucher is valid for 12 months from the date of purchase. You can book your exam slot any time within that window, so buying early to lock in the discount is a safe move even if your test date isn't finalized yet." } },
                { "@type": "Question", "name": "Does Fryment also sell Duolingo (DET) vouchers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Alongside PTE, Fryment offers Duolingo English Test vouchers, plus TOEFL and GRE vouchers, all through the same instant-delivery process, so students preparing for multiple exams can manage everything from one platform." } },
                { "@type": "Question", "name": "Should I choose PTE or Duolingo English Test?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on your target university's requirements. PTE is more widely accepted for visa and immigration purposes, while DET is often faster, cheaper, and taken from home. Check your university's official admissions page before deciding, since acceptance varies by institution." } },
                { "@type": "Question", "name": "What payment methods does Fryment accept?", "acceptedAnswer": { "@type": "Answer", "text": "Fryment accepts UPI, debit and credit cards, and net banking for voucher purchases. All transactions are processed in INR, which avoids the foreign currency conversion charges that apply when paying Pearson directly with an international card." } }
              ]
            })
          }}
        />
      </head>
      <body className="font-body selection:bg-primary-fixed selection:text-primary">
        {children}
      </body>
    </html>
  );
}
