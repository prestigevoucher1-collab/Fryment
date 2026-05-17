"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { EXAMS } from "@/data/pte/exams";

interface NavbarProps {
   isMenuOpen: boolean;
   setIsMenuOpen: (val: boolean) => void;
}

export default function ExamNavbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
   const pathname = usePathname();
   const examId = pathname.split('/')[1] || 'pte';
   const currentExam = EXAMS[examId] || EXAMS.pte;

   return (
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md h-14 md:h-16 flex items-center border-b border-slate-100 shadow-sm">
         <div className="max-w-[1920px] w-full mx-auto px-4 md:px-6 lg:px-16 flex items-center justify-between">
            <Link href={`/${examId}`} className="flex items-center gap-2 md:gap-3 group cursor-pointer">
               <div className="w-8 h-8 md:w-9 md:h-9 bg-[#1565d8] rounded-lg flex items-center justify-center shadow-lg"><span className="material-icons text-lg text-white font-bold">school</span></div>
               <span className="text-lg md:text-xl font-black tracking-tight text-[#091e42]">Fryment</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
               {/* Exam Dropdown */}
               <div className="relative group">
                  <button className="flex items-center gap-1 bg-slate-100 px-4 py-2 rounded-xl text-sm font-black text-[#091e42] hover:bg-slate-200 transition-colors">
                     {currentExam.name}
                     <span className="material-icons text-base">expand_more</span>
                  </button>
                  {/* Invisible hover bridge */}
                  <div className="absolute top-full left-0 w-full h-2"></div>
                  <div className="absolute top-[calc(100%+0.5rem)] left-0 w-48 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2 z-50">
                     {Object.values(EXAMS).map((exam) => (
                        <Link 
                           key={exam.id} 
                           href={`/${exam.id}`}
                           className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                              examId === exam.id 
                              ? 'bg-[#1565d8]/10 text-[#1565d8]' 
                              : 'text-slate-500 hover:bg-slate-50 hover:text-[#091e42]'
                           }`}
                        >
                           {exam.name}
                        </Link>
                     ))}
                  </div>
               </div>

               <Link className="text-sm font-bold text-[#091e42] hover:text-[#1565d8] transition-colors" href="/blog">Blog</Link>
               <a className="bg-gradient-to-r from-[#1565d8] to-[#091e42] text-white px-5 py-2.5 rounded-xl font-black text-sm tracking-wide shadow-md flex items-center gap-2 hover:opacity-90 transition-opacity" href="tel:+919325216364">
                  <span className="material-icons text-sm">phone</span>
                  +91 932521 6364
               </a>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex lg:hidden items-center gap-4">
               <button onClick={() => setIsMenuOpen(true)} className="text-[#091e42] p-1 focus:outline-none">
                  <span className="material-icons text-3xl">menu</span>
               </button>
            </div>
         </div>

         {/* Mobile Menu Drawer */}
         {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-[99999] flex flex-col lg:hidden">
               <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 shrink-0 bg-white">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-[#1565d8] rounded-lg flex items-center justify-center shadow-md"><span className="material-icons text-white text-sm">school</span></div>
                     <span className="text-xl font-black tracking-tight text-[#091e42]">Fryment</span>
                  </div>
                  <button onClick={() => setIsMenuOpen(false)} className="text-[#1565d8] hover:opacity-70 transition-opacity">
                     <span className="material-icons text-3xl">close</span>
                  </button>
               </div>

               <div className="flex-1 p-8 flex flex-col space-y-4 bg-white overflow-y-auto">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Choose Exam</p>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.values(EXAMS).map((exam) => (
                      <Link 
                        key={exam.id} 
                        href={`/${exam.id}`}
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-4 py-3 rounded-xl text-sm font-black border transition-all ${
                          examId === exam.id 
                          ? 'bg-[#1565d8]/5 border-[#1565d8] text-[#1565d8]' 
                          : 'border-slate-100 text-slate-600'
                        }`}
                      >
                        {exam.name}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-6 space-y-4 border-t border-slate-50 mt-4">
                    <Link href="/blog" className="text-lg font-bold text-[#1565d8] flex items-center gap-4 py-3 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>
                       <span className="material-icons text-xl">rss_feed</span>
                       Our Blog
                    </Link>
                    <a href="tel:+919325216364" className="text-lg font-bold text-[#1565d8] flex items-center gap-4 py-3" onClick={() => setIsMenuOpen(false)}>
                       <span className="material-icons text-xl">phone</span>
                       +91 932521 6364
                    </a>
                  </div>
               </div>
            </div>
         )}
      </nav>
   );
}
