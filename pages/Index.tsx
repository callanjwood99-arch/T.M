import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Challenges from "@/components/Challenges";
import Guarantee from "@/components/Guarantee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <WhyChoose />
      <Challenges />
      <Guarantee />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
