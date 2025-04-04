import Portfolio from "@/components/Portfolio";
import Profile from "@/components/Profile";
import TopPage from "@/components/TopPage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="pt-20 flex flex-col items-center gap-8 mt-5">
        <TopPage />
        <Profile />
        <Portfolio />
      </main>
      <footer className="mt-auto py-4 flex gap-[24px] flex-wrap items-center justify-center">
        <a>Go to nextjs.org →</a>
      </footer>
    </div>
  );
}
