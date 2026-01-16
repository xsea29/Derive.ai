import { CreateInterviewCard } from "@/components/interview/CreateInterviewCard";
import { StatsCards } from "@/components/interview/StatsCards";
import { RecentInterviews } from "@/components/interview/RecentInterviews";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6 md:space-y-8">
        <CreateInterviewCard />
        <StatsCards />
        <RecentInterviews />
      </main>
    </div>
  );
};

export default Index;
