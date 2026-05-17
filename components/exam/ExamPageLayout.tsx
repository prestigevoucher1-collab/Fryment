"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { ExamConfig } from "@/data/pte/exams";

import dynamic from "next/dynamic";

import ExamNavbar from "@/components/exam/ExamNavbar";
import ExamHero from "@/components/exam/ExamHero";

const TrustBar = dynamic(() => import("@/components/pte/TrustBar"), { ssr: true });
const ExamAdvantage = dynamic(() => import("@/components/exam/ExamAdvantage"), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/pte/TestimonialsSection"), { ssr: true });
const ProofGallery = dynamic(() => import("@/components/pte/ProofGallery"), { ssr: true });
const ComparisonSection = dynamic(() => import("@/components/pte/ComparisonSection"), { ssr: true });
const ExamBlogSection = dynamic(() => import("@/components/exam/ExamBlogSection"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/pte/FaqSection"), { ssr: true });
const Footer = dynamic(() => import("@/components/pte/Footer"), { ssr: true });
const StickyBar = dynamic(() => import("@/components/pte/StickyBar"), { ssr: false });
const PopupModal = dynamic(() => import("@/components/pte/PopupModal"), { ssr: false });

interface ExamPageLayoutProps {
  exam: ExamConfig;
}

export default function ExamPageLayout({ exam }: ExamPageLayoutProps) {
   const [showPopup, setShowPopup] = useState(false);
   const [hasShownPopup, setHasShownPopup] = useState(false);
   const [showStickyBar, setShowStickyBar] = useState(false);
   const [isStickyDismissed, setIsStickyDismissed] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [liveBlogs, setLiveBlogs] = useState<any[]>([]);

   // Scroll-based triggers
   useEffect(() => {
      const handleScroll = () => {
         const scrollHeight = document.documentElement.scrollHeight;
         const clientHeight = document.documentElement.clientHeight;
         const scrollPos = window.scrollY;
         const scrollPercentage = (scrollPos / (scrollHeight - clientHeight)) * 100;

         if (scrollPercentage >= 50 && !hasShownPopup) {
            setShowPopup(true);
            setHasShownPopup(true);
         }
         setShowStickyBar(scrollPos > 500);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [hasShownPopup]);

   // Fetch blog posts for this specific exam if categorized, otherwise fetch latest
   useEffect(() => {
      async function fetchLiveBlogs() {
         const { data } = await supabase
            .from('blogs')
            .select('title, excerpt, slug, cover_image, created_at')
            .eq('published', true)
            // .eq('category', exam.name) // Optional: filter by exam name if you have categories
            .order('created_at', { ascending: false })
            .limit(3);
         if (data) setLiveBlogs(data);
      }
      fetchLiveBlogs();
   }, [exam.name]);

   return (
      <div className="bg-white text-[#1e293b] min-h-screen font-body text-xs md:text-base selection:bg-[#1565d8] selection:text-white">
         {/* Floating WhatsApp Button */}
         <div className="fixed bottom-10 right-6 z-[100000] md:bottom-12 md:right-10">
            <a className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-110 transition-transform animate-glow-whatsapp" href="https://wa.me/919325216364" target="_blank" rel="noopener noreferrer">
               <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.031c0 2.122.541 4.192 1.572 6.014L0 24l6.105-1.601a11.871 11.871 0 005.939 1.6h.005c6.635 0 12.032-5.394 12.035-12.034a11.84 11.84 0 00-3.517-8.503z" /></svg>
            </a>
         </div>

         {/* Overlay popup */}
         {showPopup && <PopupModal onClose={() => setShowPopup(false)} />}

         {/* Navigation */}
         <ExamNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

         {/* Page content */}
         <main className={`relative z-10 overflow-hidden ${isMenuOpen ? 'hidden' : 'block'}`}>
            <ExamHero exam={exam} />
            <TrustBar />
            <ExamAdvantage exam={exam} />
            <TestimonialsSection />
            <ProofGallery />
            <ComparisonSection />
            <ExamBlogSection blogs={liveBlogs} exam={exam} />
            <FaqSection />
         </main>

         {!isMenuOpen && <Footer />}

         <StickyBar
            visible={showStickyBar && !isStickyDismissed}
            onDismiss={() => setIsStickyDismissed(true)}
         />

         <style jsx global>{`
         @keyframes glow-whatsapp { 
           0%, 100% { box-shadow: 0 0 20px rgba(37, 211, 102, 0.4); transform: scale(1); } 
           50% { box-shadow: 0 0 50px rgba(37, 211, 102, 0.9); transform: scale(1.1); } 
         }
         .animate-glow-whatsapp { animation: glow-whatsapp 3s ease-in-out infinite; }
       `}</style>
      </div>
   );
}
