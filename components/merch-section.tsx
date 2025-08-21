import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Heart } from "lucide-react"

export function MerchSection() {
  const merchItems = [
    {
      id: 1,
      name: "Oficiální tričko #69",
      price: "750 Kč",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Černá", "Červená", "Bílá"],
      image: "/black-t-shirt-motocross-69.png",
      isNew: true,
    },
    {
      id: 2,
      name: "Závodní mikina týmu",
      price: "1500 Kč",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Černá", "Šedá"],
      image: "/black-motocross-hoodie.png",
      isNew: false,
    },
    {
      id: 3,
      name: "Podpisová kšiltovka",
      price: "600 Kč",
      sizes: ["Univerzální"],
      colors: ["Černá", "Červená", "Modrá"],
      image: "/embroidered-baseball-cap.png",
      isNew: true,
    },
    {
      id: 4,
      name: "Sada závodních plakátů",
      price: "500 Kč",
      sizes: ["A3"],
      colors: ["Barevné"],
      image: "/motocross-poster-69.png",
      isNew: false,
    },
  ]

  return (
    <section id="merch" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Oficiální merchandise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ukažte svou podporu s oficiálním merchandise Petra Vojtka #69. Noste barvy šampiona.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {merchItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.isNew && <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Nové</Badge>}
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{item.name}</CardTitle>
                <div className="text-2xl font-bold text-primary">{item.price}</div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Dostupné velikosti:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.sizes.map((size) => (
                      <Badge key={size} variant="outline" className="text-xs">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Barvy:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.colors.map((color) => (
                      <Badge key={color} variant="outline" className="text-xs">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Přidat do košíku
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card text-card-foreground p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Připojte se k rodině #69</h3>
            <p className="text-muted-foreground mb-6">
              Získejte exkluzivní přístup k limitovanému merchandise, přednostním vydáním a speciálním slevám na všechno
              oficiální vybavení.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Přihlásit se k novinkám
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
