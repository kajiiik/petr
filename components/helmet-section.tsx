import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Star, Award } from "lucide-react"

export function HelmetSection() {
  return (
    <section id="helmet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Moje helma</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Profesionální závodní helma - bezpečnost a styl v jednom
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Helmet Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/motocross-helmet-red-black.png"
                alt="Závodní helma Petra Vojtka #69"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground text-2xl px-4 py-2">#69</Badge>
              </div>
            </div>
          </div>

          {/* Helmet Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Specifikace helmy</h3>
              <div className="grid grid-cols-1 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">DOT & ECE certifikace</p>
                    <p className="text-sm text-muted-foreground">Bezpečnostní standardy</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">Karbonová skořepina</p>
                    <p className="text-sm text-muted-foreground">Lehká a pevná</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground">Vlastní design</p>
                    <p className="text-sm text-muted-foreground">Jedinečná grafika #69</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
