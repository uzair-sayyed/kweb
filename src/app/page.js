// import HeroBanner from "@/components/HeroBanner"; // using absolute import
import About from "./components/About";
import BusinessVerticals from "./components/BusinessVerticals";
import HeroBanner from "./components/HeroBanner";
import History from "./components/History";
import ProductShowCase from "./components/ProductShowcase";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <About />
      {/* <ProductShowCase /> */}
      <History />
      <BusinessVerticals />
    </>
  );
}
