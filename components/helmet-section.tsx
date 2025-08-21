import { Badge } from "@/components/ui/badge"

export function HelmetSection() {
  return (
    <section id="helmet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-2">NA PRODEJ</h2>
          <h3 className="text-2xl font-semibold text-foreground mb-4">HONDA CRF250R 2011</h3>
          <div className="mb-4">
            <span className="text-2xl text-muted-foreground line-through mr-4">85 000 Kč</span>
            <span className="text-5xl font-bold text-primary">80 000 Kč</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Profesionální závodní motorka - připravená na další závody
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative max-w-2xl">
            <a
              href="https://motorky.bazos.cz/inzerat/206826136/honda-crf250r-2011.php"
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/petr-real-bike.jpg"
                  alt="Honda CRF250R 2011 na prodej - klikněte pro zobrazení inzerátu"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground text-2xl px-4 py-2">#69</Badge>
                </div>
              </div>
            </a>
            <p className="text-center text-muted-foreground mt-4 text-lg">Klikněte na fotku pro zobrazení inzerátu</p>
          </div>
        </div>
      </div>
    </section>
  )
}
