"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Zap } from "lucide-react";

export default function BlogPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasShownPopup) return;
      const scrollPos = window.scrollY;
      const scrollPercentage = (scrollPos / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage >= 35) {
        setShowPopup(true);
        setHasShownPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShownPopup]);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-primary/20 backdrop-blur-xl"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200"
          >
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-6 right-6 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-all z-50"
            >
              <X className="w-6 h-6 text-primary" />
            </button>

            <Link 
              href="/pte#purchase" 
              onClick={() => setShowPopup(false)}
              className="group block"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80" 
                  alt="Special Offer" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute bottom-10 left-10 right-10 z-20 space-y-4">
                  <div className="inline-flex items-center gap-2 bg-accent text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    <Zap className="w-3 h-3 fill-primary" />
                    Limited Time Offer
                  </div>
                  <h3 className="text-4xl font-black text-white leading-tight">Book Now & <br />Save ₹3,000 Instantly</h3>
                  <p className="text-blue-100/60 font-medium">Valid for next 100 students only. Book your slot with Fryment.</p>
                  <div className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl group-hover:bg-accent transition-colors">
                    Claim Discount <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
