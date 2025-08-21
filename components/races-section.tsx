import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Trophy, Calendar } from "lucide-react"

export function RacesSection() {
  const upcomingRaces = [
    {
      id: 1,
      name: "National Motocross Championship",
      date: "2024-02-15",
      location: "Thunder Valley, Colorado",
      status: "upcoming",
      position: null,
    },
    {
      id: 2,
      name: "Spring Classic",
      date: "2024-03-10",
      location: "Glen Helen, California",
      status: "upcoming",
      position: null,
    },
  ]

  const pastRaces = [
    {
      id: 3,
      name: "Winter Championship",
      date: "2024-01-15",
      location: "Daytona, Florida",
      status: "completed",
      position: 1,
    },
    {
      id: 4,
      name: "Desert Classic",
      date: "2023-12-20",
      location: "Phoenix, Arizona",
      status: "completed",
      position: 3,
    },
    {
      id: 5,
      name: "Mountain Challenge",
      date: "2023-11-25",
      location: "Denver, Colorado",
      status: "completed",
      position: 2,
    },
  ]

  const getPositionBadge = (position: number | null) => {
    if (!position) return null

    const variants = {
      1: "bg-yellow-500 text-yellow-50",
      2: "bg-gray-400 text-gray-50",
      3: "bg-amber-600 text-amber-50",
    }

    return (
      <Badge className={variants[position as keyof typeof variants] || "bg-muted"}>
        <Trophy className="h-3 w-3 mr-1" />
        {position === 1 ? "1st" : position === 2 ? "2nd" : position === 3 ? "3rd" : `${position}th`}
      </Badge>
    )
  }

  return (
    <section id="races" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Race Schedule</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow my racing journey through upcoming events and past achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Races */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Upcoming Races
            </h3>
            <div className="space-y-4">
              {upcomingRaces.map((race) => (
                <Card key={race.id} className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{race.name}</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">
                        Upcoming
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(race.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {race.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Races */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-accent" />
              Recent Results
            </h3>
            <div className="space-y-4">
              {pastRaces.map((race) => (
                <Card key={race.id} className="border-l-4 border-l-accent">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{race.name}</CardTitle>
                      {getPositionBadge(race.position)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(race.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {race.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
