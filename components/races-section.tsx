import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Trophy, Calendar } from "lucide-react"

export function RacesSection() {
  const upcomingRaces = [
    {
      id: 1,
      name: "Mistrovství České republiky",
      date: "2024-02-15",
      location: "Loket, Česká republika",
      status: "upcoming",
      position: null,
    },
    {
      id: 2,
      name: "Jarní klasika",
      date: "2024-03-10",
      location: "Pacov, Česká republika",
      status: "upcoming",
      position: null,
    },
  ]

  const pastRaces = [
    {
      id: 3,
      name: "Zimní mistrovství",
      date: "2024-01-15",
      location: "Holice, Česká republika",
      status: "completed",
      position: 1,
    },
    {
      id: 4,
      name: "Pouštní klasika",
      date: "2023-12-20",
      location: "Vysoké Mýto, Česká republika",
      status: "completed",
      position: 3,
    },
    {
      id: 5,
      name: "Horská výzva",
      date: "2023-11-25",
      location: "Kramolín, Česká republika",
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
        {position === 1 ? "1." : position === 2 ? "2." : position === 3 ? "3." : `${position}.`}
      </Badge>
    )
  }

  return (
    <section id="races" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Kalendář závodů</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sledujte mou závodní cestu skrze nadcházející závody a dosažené úspěchy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Races */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Nadcházející závody
            </h3>
            <div className="space-y-4">
              {upcomingRaces.map((race) => (
                <Card key={race.id} className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{race.name}</CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">
                        Nadcházející
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(race.date).toLocaleDateString("cs-CZ", {
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
              Nedávné výsledky
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
                        {new Date(race.date).toLocaleDateString("cs-CZ", {
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
