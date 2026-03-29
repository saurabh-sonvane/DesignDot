
import AboutFirm from "./components/AboutFirm";
import Hero from "./components/Hero";
import HotTopics from "./components/HotTopics";
import Insights from "./components/Insights";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
   <>
    <Navbar />
    <Hero />
    <HotTopics />
    <AboutFirm />
    <Insights />
   </>
  );
}
