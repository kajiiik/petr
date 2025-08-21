import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "Vítězství v regionálním mistrovství",
      excerpt:
        "Zajistil jsem si první místo v regionálním motokrosovém mistrovství s neuvěřitelným výkonem v posledním kole.",
      date: "2024-01-15",
      category: "Výsledky závodů",
      image: "/motocross-victory-podium.png",
    },
    {
      id: 2,
      title: "Nové nastavení motorky pro sezónu 2024",
      excerpt: "Odhalení nejnovějších úprav a vylepšení mého závodního stroje pro nadcházející sezónu.",
      date: "2024-01-10",
      category: "Vybavení",
      image: "/professional-motocross-bike.png",
    },
    {
      id: 3,
      title: "Tréninkový kemp ve Španělsku",
      excerpt: "Intenzivní trénink ve španělských horách při přípravě na mezinárodní okruh.",
      date: "2024-01-05",
      category: "Trénink",
      image: "/placeholder-bqghv.png",
    },
  ]

  return (
    <section id="news" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nejnovější Novinky</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Zůstaňte v obraze s mými nejnovějšími závody, úspěchy a zákulisními momenty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{item.category}</Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />2 min čtení
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
