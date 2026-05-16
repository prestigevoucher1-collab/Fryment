import { supabase } from "@/lib/supabase";

export interface ExamConfig {
  id: string;
  name: string;
  fullName: string;
  saveAmount: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  reviewsCount: string;
  rating: string;
}

export const EXAMS: Record<string, ExamConfig> = {
  pte: {
    id: "pte",
    name: "PTE",
    fullName: "Pearson Test of English",
    saveAmount: "₹3,000",
    price: 14200,
    originalPrice: 17200,
    description: "Authorized all-in-one platform for PTE vouchers. Instant delivery, 24/7 WhatsApp support, and 100% secure bookings.",
    features: ["Instant delivery in 60 seconds", "No hidden charges", "Valid for 12 months"],
    reviewsCount: "8,000+",
    rating: "4.9/5",
  },
  det: {
    id: "det",
    name: "Duolingo",
    fullName: "Duolingo English Test",
    saveAmount: "₹1,500",
    price: 4900,
    originalPrice: 6400,
    description: "Save on your Duolingo English Test (DET) with our verified vouchers. Fast, secure, and officially accepted worldwide.",
    features: ["Voucher code in 1 minute", "Valid for all DET sessions", "Best price in India"],
    reviewsCount: "3,500+",
    rating: "4.8/5",
  },
  toefl: {
    id: "toefl",
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    saveAmount: "₹2,500",
    price: 14900,
    originalPrice: 17400,
    description: "Official TOEFL iBT vouchers at discounted rates. Book your test slot with confidence and save more with Fryment.",
    features: ["Instant official voucher", "24/7 expert support", "100% money-back guarantee"],
    reviewsCount: "5,200+",
    rating: "4.9/5",
  },
  gre: {
    id: "gre",
    name: "GRE",
    fullName: "Graduate Record Examination",
    saveAmount: "₹3,500",
    price: 19500,
    originalPrice: 23000,
    description: "Kickstart your grad school journey with discounted GRE vouchers. Official codes, instant delivery, and dedicated support.",
    features: ["Maximum savings on GRE", "Official ETS vouchers", "Valid for General Test"],
    reviewsCount: "4,100+",
    rating: "4.9/5",
  },
};

export async function getExamsWithPrices(): Promise<Record<string, ExamConfig>> {
  const { data: prices, error } = await supabase.from('exam_prices').select('*');

  if (error || !prices) {
    return EXAMS;
  }

  const updatedExams = { ...EXAMS };
  console.log("updatedExams", updatedExams);

  prices.forEach((p: any) => {
    if (updatedExams[p.id]) {
      updatedExams[p.id] = {
        ...updatedExams[p.id],
        price: p.price,
        originalPrice: p.original_price,
        // Dynamically calculate saveAmount if needed
        saveAmount: `₹${(p.original_price - p.price).toLocaleString('en-IN')}`,
      };
    }
  });

  return updatedExams;
}
