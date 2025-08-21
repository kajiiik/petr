import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Zap, Weight, Gauge } from "lucide-react"

export function BikeSection() {
  const bikeSpecs = [
    { icon: Zap, label: "Motor", value: "250cc 4-takt" },
    { icon: Weight, label: "Hmotnost", value: "104 kg" },
    { icon: Gauge, label: "Max. výkon", value: "40 HP" },
    { icon: Wrench, label: "Odpružení", value: "Showa, Tommy Suspension!" },
  ]

  const modifications = [
    "Akrapovič výfukový systém pro lepší výkon",
    "Showa A-Kit odpružení přední i zadní",
    "Pro Circuit vzduchový filtr a sání",
    "Renthal řídítka a gripy",
    "Vlastní grafika s číslem #69",
    "MITAS Terra Force-MX SAND 2 závodní pneumatiky",
  ]

  return (
    <section id="bike" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Moje závodní stroj</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Honda CRF250R 2024 - spolehlivý a výkonný stroj pro každý závod
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bike Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/images/honda-crf-clean.png"
                alt="Honda CRF250R 2024 - Závodní motorka Petra Vojtka #69"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground text-2xl px-4 py-2">#69</Badge>
              </div>
            </div>
          </div>

          {/* Bike Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Technické specifikace</h3>
              <div className="grid grid-cols-2 gap-4">
                {bikeSpecs.map((spec, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <spec.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold text-foreground">{spec.value}</p>
                      <p className="text-sm text-muted-foreground">{spec.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Závodní úpravy</h3>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-accent" />
                    Výkonnostní vylepšení
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {modifications.map((mod, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{mod}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
