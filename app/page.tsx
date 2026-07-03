import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";
import Categories from "./components/Categories";
import NewArrivals from "./components/NewArrivals";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
export default function Home() {
  return (
      <>
            <AnnouncementBar />
            <Navbar />

                  <main className="bg-[#040816] min-h-screen text-white">
                          <Hero />
                          <Categories />
                          <AboutSection />
                          <Features />
                          <Newsletter />
                                </main>
                                <Footer />
                                    </>
                                      );
                                      }