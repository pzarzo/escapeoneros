import Link from 'next/link';
import Image from 'next/image';

const equipo = [
  { nombre: "Lucas", instagram: "https://www.instagram.com/luccaass.15" },
  { nombre: "Pablo", instagram: "https://www.instagram.com/pabloozarzo" },
  { nombre: "Adrián", instagram: "https://www.instagram.com/adriaangraneell" },
  { nombre: "Guillermo", instagram: "https://www.instagram.com/guille_hernandez10" },
];

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* HEADER */}
      <header className="bg-black/50 backdrop-blur border-b border-cyan-500/30">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image 
              src="/images/logo/escaperoneros.png" 
              alt="Escaperoneros" 
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-yellow-400">ESCAPERONEROS</h1>
          </div>
          <ul className="flex gap-8 text-white/80 text-sm">
            <li><Link href="/" className="hover:text-cyan-400 transition">Inicio</Link></li>
            <li><Link href="/reseñas" className="hover:text-cyan-400 transition">Reseñas</Link></li>
            <li><Link href="/ranking" className="hover:text-cyan-400 transition">Ranking</Link></li>
            <li><Link href="/nosotros" className="hover:text-cyan-400 transition font-bold text-cyan-400">Nosotros</Link></li>
            <li>
              <a href="https://www.instagram.com/escaperoneros" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* CONTENIDO */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Nosotros</h2>
          <p className="text-xl text-gray-300">Somos cuatro amigos apasionados por los escape rooms</p>
        </div>

        {/* QUIÉNES SOMOS */}
        <div className="bg-gray-800/50 rounded-lg p-12 border border-cyan-500/20 mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">¿Quiénes somos?</h3>
          <div className="text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              Somos un grupo de cuatro amigos de 20 años con algo en común: nos encantan los retos. 
              Siempre hemos disfrutado enfrentándonos a desafíos, resolviendo problemas y buscando planes 
              diferentes, así que un día decidimos probar un escape room. Lo que parecía una experiencia 
              puntual acabó convirtiéndose en una auténtica afición.
            </p>
            <p>
              Poco a poco empezamos a jugar más salas, a recorrer distintas ciudades y a descubrir que, 
              además de divertirnos, funcionábamos realmente bien como equipo. Cada partida era una 
              oportunidad para ponernos a prueba, mejorar nuestra forma de comunicarnos y vivir historias 
              que nos dejaban con ganas de la siguiente aventura.
            </p>
            <p>
              Con el tiempo vimos que aquello ya era mucho más que un simple hobby. Queríamos compartir 
              nuestras experiencias, recomendar salas y formar parte de la comunidad escapista. Así nació 
              Escaperoneros —quizá algunos nos recuerden por nuestro antiguo usuario @escape_ron— y que, 
              desde el 9 de septiembre de 2023, ha ido creciendo junto a nosotros.
            </p>
            <p>
              Desde entonces hemos visitado decenas de escape rooms, aprendido a valorar cada detalle de 
              una experiencia —desde la ambientación y la narrativa hasta los puzles, la inmersión o el 
              trabajo del game master— y compartido nuestras opiniones con una idea muy clara: ayudar a 
              otros jugadores a descubrir salas que realmente merezcan la pena.
            </p>
            <p>
              Hoy damos un paso más con esta web. Queremos que Escaperoneros siga creciendo y se convierta 
              en un lugar donde cualquier amante de los escape rooms pueda encontrar recomendaciones 
              sinceras, reseñas sin spoilers, rankings, noticias y todo lo relacionado con este mundo que 
              tanto nos apasiona.
            </p>
            <p>
              Porque para nosotros un escape room nunca ha sido solo escapar de una habitación. Es trabajar 
              en equipo, pensar diferente, superar retos y crear recuerdos que siempre apetece volver a vivir.
            </p>
          </div>
        </div>

        {/* MISIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/20 to-transparent rounded-lg p-8 border border-cyan-500/30">
            <h4 className="text-xl font-bold text-cyan-400 mb-4">Nuestra Misión</h4>
            <p className="text-gray-300">
              Crear la guía más fiable de escape rooms en España. 
              Reseñas honestas, rankings precisos, información útil.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/20 to-transparent rounded-lg p-8 border border-yellow-500/30">
            <h4 className="text-xl font-bold text-yellow-400 mb-4">Nuestro Compromiso</h4>
            <p className="text-gray-300">
              Solo hablamos de salas que hemos jugado. 
              Somos honestos, aunque no siempre es lo que quieren escuchar.
            </p>
          </div>
        </div>

        {/* EL EQUIPO */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-8">El Equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipo.map((persona) => (
              <div key={persona.nombre} className="bg-gray-800/50 rounded-lg p-8 border border-cyan-500/20 text-center hover:border-cyan-500/50 transition">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-yellow-500/20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👤
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{persona.nombre}</h4>
                
                  href={persona.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-yellow-400 text-black font-bold px-6 py-2 rounded-lg hover:shadow-lg transition text-sm"
                >
                  Instagram
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACTO */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-yellow-500/20 rounded-lg p-12 border border-cyan-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">¿Tienes una sala que recomendarnos?</h3>
          <p className="text-gray-300 mb-6">
            Síguenos en Instagram y cuéntanoslo. ¡Nos encanta conocer nuevas salas!
          </p>
          <a 
            href="https://www.instagram.com/escaperoneros"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-3 rounded-lg transition inline-block"
          >
            @escaperoneros
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/50 border-t border-cyan-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
          <p>© 2024 Escaperoneros. Hecho por jugadores, para jugadores.</p>
        </div>
      </footer>
    </main>
  );
}