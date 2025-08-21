import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold text-2xl">#69</div>
              <span className="font-bold text-xl">PETR VOJTKO</span>
            </div>
            <p className="text-muted-foreground">
              Profesionální motokrosový jezdec posouvající hranice na každé trati.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100076490017523"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/vojtkoo.p/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#news" className="text-muted-foreground hover:text-primary transition-colors">
                  Novinky
                </Link>
              </li>
              <li>
                <Link href="#races" className="text-muted-foreground hover:text-primary transition-colors">
                  Závody
                </Link>
              </li>
              <li>
                <Link href="#bike" className="text-muted-foreground hover:text-primary transition-colors">
                  Moje motorka
                </Link>
              </li>
              <li>
                <Link href="#helmet" className="text-muted-foreground hover:text-primary transition-colors">
                  Bazar
                </Link>
              </li>
              <li>
                <Link href="#merch" className="text-muted-foreground hover:text-primary transition-colors">
                  Merchandise
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Podpora</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground cursor-default">Kontakt</span>
              </li>
              <li>
                <span className="text-muted-foreground cursor-default">Informace o dopravě</span>
              </li>
              <li>
                <span className="text-muted-foreground cursor-default">Vrácení zboží</span>
              </li>
              <li>
                <span className="text-muted-foreground cursor-default">Průvodce velikostmi</span>
              </li>
              <li>
                <span className="text-muted-foreground cursor-default">Často kladené otázky</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Petr Vojtko. Všechna práva vyhrazena. | Závodím se vášní od prvního dne.</p>
        </div>
      </div>
    </footer>
  )
}
