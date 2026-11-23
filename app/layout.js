import './globals.css'

export const metadata = {
  title: 'PAIE360 Académie',
  description: 'Plateforme de formation à la paie française',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header className="header">
          <div className="brand">PAIE<span>360</span> <small>ACADÉMIE</small></div>
          <nav>
            <a href="/">Accueil</a>
            <a href="/catalogue">Formations</a>
            <a href="/actualites">Actualités</a>
            <a href="/espace">Mon espace</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          PAIE360 Académie • V1 • Contenus en cours de validation réglementaire
        </footer>
      </body>
    </html>
  )
}
