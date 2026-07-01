import ExamPageLayout from "@/components/exam/ExamPageLayout";
import { getExamsWithPrices } from "@/data/pte/exams";

export const revalidate = 60; // Revalidate every minute

export default async function PTEPage() {
  const exams = await getExamsWithPrices();
  return <ExamPageLayout exam={exams.pte} />;
}
