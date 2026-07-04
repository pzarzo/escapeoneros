import Link from 'next/link';
import Image from 'next/image';
import { reseñas } from '@/data/reseñas';

export default function Home() {
  const ultimasReseñas = [...reseñas]
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
            <li><Link href="/resenas" className="hover:text-cyan-400 transition">Reseñas</Link></li>
            <li><Link href="/ranking" className="hover:text-cyan-400 transition">Ranking</Link></li>
            <li><Link href="/nosotros" className="hover:text-cyan-400 transition">Nosotros</Link></li>
            <li>
              <a href="https://www.instagram.com/escaperoneros" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Tu guía definitiva de Escape Rooms
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Reseñas detalladas, rankings y recomendaciones de jugadores para jugadores
          </p>
          <Link 
            href="/reseñas"
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-3 rounded-lg transition"
          >
            Ver todas las reseñas
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 mb-16">
        <h3 className="text-3xl font-bold text-white mb-8">📸 Últimas Reseñas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ultimasReseñas.length > 0 ? (
            ultimasReseñas.map((reseña) => (
              <div key={reseña.id} className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer border border-cyan-500/20">
                <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-yellow-500/20 flex items-center justify-center">
                  <span className="text-gray-500 text-4xl">📷</span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{reseña.nombre}</h4>
                  <p className="text-cyan-400 text-sm mb-2">{reseña.ciudad} · {reseña.tematica}</p>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{reseña.resena}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-400">{reseña.puntuaciones.global}/10</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">Próximamente reseñas...</p>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 mb-16">
        <div className="bg-gradient-to-r from-cyan-500/20 to-yellow-500/20 rounded-lg p-12 border border-cyan-500/30 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">¿Buscas las mejores salas?</h3>
          <p className="text-gray-300 mb-6">Descubre nuestro ranking de escape rooms ordenados por puntuación, ciudad y dificultad</p>
          <Link 
            href="/ranking"
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-3 rounded-lg transition inline-block"
          >
            Ir al ranking
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 mb-16">
        <div className="bg-gray-800/50 rounded-lg p-8 border border-cyan-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Síguenos en redes</h3>
          <a 
            href="https://www.instagram.com/escaperoneros" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:shadow-lg transition"
          >
            @escaperoneros en Instagram
          </a>
        </div>
      </section>

      <footer className="bg-black/50 border-t border-cyan-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
          <p>© 2024 Escaperoneros. Hecho por jugadores, para jugadores.</p>
        </div>
      </footer>
    </main>
  );
}