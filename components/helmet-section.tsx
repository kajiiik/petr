import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function HelmetSection() {
  return (
    <section id="helmet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-2">NA PRODEJ</h2>
          <h3 className="text-2xl font-semibold text-foreground mb-4">HONDA CRF250R 2011</h3>
          <div className="mb-4">
            <span className="text-2xl text-muted-foreground line-through mr-4">85 000 Kč</span>
            <span className="text-5xl font-bold text-primary">80 000 Kč</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Profesionální závodní motorka - připravená na další závody
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bike Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/images/petr-real-bike.jpg"
                alt="Honda CRF250R 2011 na prodej"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground text-2xl px-4 py-2">#69</Badge>
              </div>
            </div>
          </div>

          {/* Sale Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Inzerát</h3>
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="https://motorky.bazos.cz/inzerat/206826136/honda-crf250r-2011.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer hover:bg-muted/50">
                    <CardContent className="pt-6">
                      <ExternalLink className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold text-foreground mb-2 text-xl">Zobrazit inzerát</p>
                      <p className="text-primary hover:text-primary/80 text-sm underline">motorky.bazos.cz</p>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
