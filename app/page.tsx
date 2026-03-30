import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
    </main>
  );
}
