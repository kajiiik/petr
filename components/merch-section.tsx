"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Heart, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function MerchSection() {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const merchItems = [
    {
      id: 1,
      name: "Oficiální tričko #69",
      price: "850 Kč",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Černá"],
      image: "/official-racing-tshirt.png",
      images: ["/official-racing-tshirt.png", "/tshirt-back.png", "/tshirt-side.png"],
      imageLabels: ["Přední strana", "Zadní strana", "Levý bok"],
      isNew: true,
      description: "Oficiální závodní tričko s logy sponzorů včetně HRC Honda Racing, SHOWA, ACERBIS a dalších.",
    },
    {
      id: 2,
      name: "Závodní mikina týmu",
      price: "1500 Kč",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Černá", "Šedá"],
      image: null, // Removed image for hoodie
      isNew: true, // Added isNew: true for hoodie to show NOVÉ label
      comingSoon: true, // Added coming soon flag
    },
  ]

  const openModal = (item: any) => {
    setSelectedItem(item)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedItem(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedItem?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length)
    }
  }

  const prevImage = () => {
    if (selectedItem?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length)
    }
  }

  const handleAddToCart = () => {
    window.open("https://ig.me/vojtkoo.p?text=Ahoj%2C%20m%C3%A1m%20z%C3%A1jem%20o%20tri%C4%8Dko", "_blank")
  }

  return (
    <>
      <section id="merch" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Oficiální merchandise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ukažte svou podporu s oficiálním merchandise Petra Vojtka #69. Noste barvy šampiona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {merchItems.map((item) => (
              <Card
                key={item.id}
                className={`group hover:shadow-lg transition-all duration-300 overflow-hidden ${!item.comingSoon ? "cursor-pointer" : ""}`}
                onClick={() => !item.comingSoon && openModal(item)}
              >
                <div className="relative overflow-hidden">
                  {item.comingSoon ? (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      <img
                        src="/out-of-stock-stamp.png"
                        alt="Out of Stock"
                        className="max-w-[200px] max-h-[100px] object-contain"
                      />
                    </div>
                  ) : (
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
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
                  {!item.comingSoon && (
                    <>
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
                    </>
                  )}

                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={item.comingSoon}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (!item.comingSoon) {
                        handleAddToCart()
                      }
                    }}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    {item.comingSoon ? "Brzy dostupné" : "Přidat do košíku"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <Button variant="ghost" size="sm" className="absolute top-4 right-4 z-10" onClick={closeModal}>
                <X className="h-4 w-4" />
              </Button>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="relative">
                      <img
                        src={
                          selectedItem.images
                            ? selectedItem.images[currentImageIndex]
                            : selectedItem.image || "/placeholder.svg"
                        }
                        alt={selectedItem.name}
                        className="w-full h-80 object-cover rounded-lg"
                      />

                      {selectedItem.images && selectedItem.images.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                            onClick={prevImage}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                            onClick={nextImage}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>

                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                            {selectedItem.imageLabels
                              ? selectedItem.imageLabels[currentImageIndex]
                              : `${currentImageIndex + 1} / ${selectedItem.images.length}`}
                          </div>
                        </>
                      )}
                    </div>

                    {selectedItem.images && selectedItem.images.length > 1 && (
                      <div className="flex gap-2 mt-4 justify-center">
                        {selectedItem.images.map((img, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-16 h-16 rounded border-2 overflow-hidden ${
                              currentImageIndex === index ? "border-primary" : "border-gray-200"
                            }`}
                          >
                            <img
                              src={img || "/placeholder.svg"}
                              alt={`${selectedItem.name} ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{selectedItem.name}</h3>
                      <div className="text-3xl font-bold text-primary mt-2">{selectedItem.price}</div>
                    </div>

                    <p className="text-muted-foreground">{selectedItem.description}</p>

                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Dostupné velikosti:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.sizes.map((size) => (
                          <Badge
                            key={size}
                            variant="outline"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          >
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Barva:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.colors.map((color) => (
                          <Badge key={color} variant="outline">
                            {color}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={handleAddToCart}
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Přidat do košíku - {selectedItem.price}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
