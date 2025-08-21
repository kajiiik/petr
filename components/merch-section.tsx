import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Heart } from "lucide-react"

export function MerchSection() {
  const merchItems = [
    {
      id: 1,
      name: "Official #69 T-Shirt",
      price: "$29",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Red", "White"],
      image: "/black-t-shirt-motocross-69.png",
      isNew: true,
    },
    {
      id: 2,
      name: "Racing Team Hoodie",
      price: "$59",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Gray"],
      image: "/black-motocross-hoodie.png",
      isNew: false,
    },
    {
      id: 3,
      name: "Signature Cap",
      price: "$24",
      sizes: ["One Size"],
      colors: ["Black", "Red", "Navy"],
      image: "/embroidered-baseball-cap.png",
      isNew: true,
    },
    {
      id: 4,
      name: "Racing Poster Set",
      price: "$19",
      sizes: ["A3"],
      colors: ["Full Color"],
      image: "/motocross-poster-69.png",
      isNew: false,
    },
  ]

  return (
    <section id="merch" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Official Merchandise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Show your support with official Petr Vojtko #69 merchandise. Wear the colors of a champion.
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
                {item.isNew && <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">New</Badge>}
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
                  <p className="text-sm font-medium text-foreground mb-2">Available Sizes:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.sizes.map((size) => (
                      <Badge key={size} variant="outline" className="text-xs">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Colors:</p>
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
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card text-card-foreground p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join the #69 Family</h3>
            <p className="text-muted-foreground mb-6">
              Get exclusive access to limited edition merchandise, early releases, and special discounts on all official
              gear.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Sign Up for Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
