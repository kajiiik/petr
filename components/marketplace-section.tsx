import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"

export function MarketplaceSection() {
  const products = [
    {
      id: 1,
      name: "Professional Racing Helmet",
      price: "$299",
      originalPrice: "$399",
      rating: 4.8,
      reviews: 124,
      image: "/motocross-helmet-red-black.png",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Racing Gloves Pro",
      price: "$89",
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: "/motocross-gloves-grip.png",
      badge: "New",
    },
    {
      id: 3,
      name: "Protective Chest Armor",
      price: "$199",
      originalPrice: "$249",
      rating: 4.7,
      reviews: 67,
      image: "/black-motocross-chest-protector.png",
      badge: "Sale",
    },
    {
      id: 4,
      name: "Racing Boots Elite",
      price: "$449",
      originalPrice: null,
      rating: 4.9,
      reviews: 156,
      image: "/black-and-red-motocross-boots.png",
      badge: "Premium",
    },
    {
      id: 5,
      name: "Performance Goggles",
      price: "$129",
      originalPrice: "$159",
      rating: 4.6,
      reviews: 203,
      image: "/placeholder-x6sck.png",
      badge: "Popular",
    },
    {
      id: 6,
      name: "Racing Jersey #69",
      price: "$79",
      originalPrice: null,
      rating: 4.8,
      reviews: 91,
      image: "/placeholder-c60gd.png",
      badge: "Limited",
    },
  ]

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Sale":
        return "bg-red-500 text-white"
      case "New":
        return "bg-green-500 text-white"
      case "Best Seller":
        return "bg-blue-500 text-white"
      case "Premium":
        return "bg-purple-500 text-white"
      case "Popular":
        return "bg-orange-500 text-white"
      case "Limited":
        return "bg-gray-800 text-white"
      default:
        return "bg-muted"
    }
  }

  return (
    <section id="marketplace" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Marketplace</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get the same professional gear I use on the track. Quality equipment for serious riders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 ${getBadgeVariant(product.badge)}`}>{product.badge}</Badge>
                {product.originalPrice && (
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                    Save ${Number.parseInt(product.originalPrice.slice(1)) - Number.parseInt(product.price.slice(1))}
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{product.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
