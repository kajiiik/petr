import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Zap, Weight, Gauge } from "lucide-react"

export function BikeSection() {
  const bikeSpecs = [
    { icon: Zap, label: "Engine", value: "450cc 4-Stroke" },
    { icon: Weight, label: "Weight", value: "108 kg" },
    { icon: Gauge, label: "Max Power", value: "63 HP" },
    { icon: Wrench, label: "Suspension", value: "Fully Adjustable" },
  ]

  const modifications = [
    "Custom exhaust system for optimal performance",
    "Upgraded suspension with race-spec settings",
    "Lightweight carbon fiber components",
    "Performance air filter and intake",
    "Custom graphics and number plate",
    "Racing tires for maximum grip",
  ]

  return (
    <section id="bike" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Racing Machine</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the beast that carries me to victory - engineered for speed and precision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bike Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/motocross-bike-garage.png"
                alt="Petr Vojtko's Racing Bike #69"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1">#69</Badge>
              </div>
            </div>
          </div>

          {/* Bike Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
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
              <h3 className="text-2xl font-bold text-foreground mb-6">Race Modifications</h3>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-accent" />
                    Performance Upgrades
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
