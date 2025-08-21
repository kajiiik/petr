"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Trophy, Calendar, X } from "lucide-react"
import { useState } from "react"

export function RacesSection() {
  const [selectedRace, setSelectedRace] = useState<any>(null)

  const upcomingRaces = [
    {
      id: 1,
      name: "Blanka Cup",
      date: "2025-11-01",
      location: "Kaplice, Česká republika",
      status: "upcoming",
      position: null,
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

  const openRaceModal = (race: any) => {
    setSelectedRace(race)
  }

  const closeRaceModal = () => {
    setSelectedRace(null)
  }

  return (
    <>
      <section id="races" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Kalendář závodů</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sledujte mou závodní cestu skrze nadcházející závody a dosažené úspěchy
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Kalendář závodů 2025
              </h3>
              <div className="space-y-4">
                {upcomingRaces.map((race) => (
                  <Card
                    key={race.id}
                    className="border-l-4 border-l-primary cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => openRaceModal(race)}
                  >
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
          </div>
        </div>
      </section>

      {/* Race details modal */}
      {selectedRace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <Button variant="ghost" size="sm" className="absolute top-4 right-4 z-10" onClick={closeRaceModal}>
                <X className="h-4 w-4" />
              </Button>

              <div className="p-6">
                <div className="text-center space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{selectedRace.name}</h3>
                    <p className="text-lg text-muted-foreground">
                      {new Date(selectedRace.date).toLocaleDateString("cs-CZ", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-lg text-muted-foreground flex items-center justify-center gap-2 mt-2">
                      <MapPin className="h-5 w-5" />
                      {selectedRace.location}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <img
                      src="/motocross-action-shot.jpg"
                      alt="Motocross akce"
                      className="w-full max-w-md h-96 object-cover object-top rounded-lg"
                    />
                  </div>

                  <div className="bg-red-500 text-white p-4 rounded-lg mx-auto max-w-md">
                    <h4 className="text-xl font-bold mb-2">Informace o závodu</h4>
                    <p className="text-lg">Informace budou brzy upřesněny</p>
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
