import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "Victory at Regional Championship",
      excerpt: "Secured first place in the regional motocross championship with an incredible final lap performance.",
      date: "2024-01-15",
      category: "Race Results",
      image: "/motocross-victory-podium.png",
    },
    {
      id: 2,
      title: "New Bike Setup for 2024 Season",
      excerpt: "Unveiling the latest modifications and upgrades to my racing machine for the upcoming season.",
      date: "2024-01-10",
      category: "Equipment",
      image: "/professional-motocross-bike.png",
    },
    {
      id: 3,
      title: "Training Camp in Spain",
      excerpt: "Intensive training session in Spanish mountains preparing for the international circuit.",
      date: "2024-01-05",
      category: "Training",
      image: "/placeholder-bqghv.png",
    },
  ]

  return (
    <section id="news" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest News</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with my latest races, achievements, and behind-the-scenes moments
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
                    <Clock className="h-4 w-4" />2 min read
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
