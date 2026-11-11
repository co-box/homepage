import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Features from "@/components/Features";
import WhyCoBox from "@/components/WhyCoBox";
import Hardware from "@/components/Hardware";
import Security from "@/components/Security";
import Editions from "@/components/Editions";
import CloudHosting from "@/components/CloudHosting";
import Stats from "@/components/Stats";
import Company from "@/components/Company";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Tools />
        <WhyCoBox />
        <CloudHosting />
        <Editions />
        <Hardware />
        <Security />
        <Stats />
        <Company />
      </main>
      <Footer />
    </>
  );
};

export default Index;
