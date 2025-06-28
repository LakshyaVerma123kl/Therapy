// FileName: page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
