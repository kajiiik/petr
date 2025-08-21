import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { RacesSection } from "@/components/races-section"
import { BikeSection } from "@/components/bike-section"
import { HelmetSection } from "@/components/helmet-section"
import { MerchSection } from "@/components/merch-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <NewsSection />
      <RacesSection />
      <BikeSection />
      <HelmetSection />
      <MerchSection />
      <Footer />
    </main>
  )
}
