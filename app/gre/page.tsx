import ExamPageLayout from "@/components/exam/ExamPageLayout";
import { getExamsWithPrices } from "@/data/pte/exams";

export const revalidate = 60;

export default async function GREPage() {
  const exams = await getExamsWithPrices();
  return <ExamPageLayout exam={exams.gre} />;
}
