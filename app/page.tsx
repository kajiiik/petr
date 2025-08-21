import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { RacesSection } from "@/components/races-section"
import { BikeSection } from "@/components/bike-section"
import { MarketplaceSection } from "@/components/marketplace-section"
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
      <MarketplaceSection />
      <MerchSection />
      <Footer />
    </main>
  )
}
