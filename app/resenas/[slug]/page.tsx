import Link from 'next/link';
import Image from 'next/image';
import { reseñas } from '@/data/reseñas';
import { notFound } from 'next/navigation';

export default async function ReseñaDetallePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reseña = reseñas.find(r => r.slug === slug);

  if (!reseña) {
    notFound();
  }

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
            <li><Link href="/resenas" className="hover:text-cyan-400 transition font-bold text-cyan-400">Reseñas</Link></li>
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

      <section className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/resenas" className="text-cyan-400 hover:text-cyan-300 transition mb-6 inline-block">
          ← Volver a todas las reseñas
        </Link>

        <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-yellow-500/20 rounded-lg flex items-center justify-center mb-8">
          <span className="text-gray-500 text-6xl">📷</span>
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">{reseña.provincia}</span>
          <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">{reseña.tematica}</span>
          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Dificultad: {reseña.dificultad}/10</span>
        </div>

        <h1 className="text-4xl font-bold text-white mb-6">{reseña.nombre}</h1>

        <div className="bg-gray-800/50 rounded-lg p-8 border border-cyan-500/20 mb-8">
          <p className="text-gray-300 text-lg leading-relaxed">{reseña.resena}</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-8 border border-cyan-500/20 mb-8">
          <h3 className="text-xl font-bold text-white mb-6">Puntuaciones detalladas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Ambientación</p>
              <p className="text-cyan-400 font-bold text-3xl">{reseña.puntuaciones.ambientacion}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Puzzles</p>
              <p className="text-cyan-400 font-bold text-3xl">{reseña.puntuaciones.puzzles}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Actuación</p>
              <p className="text-cyan-400 font-bold text-3xl">{reseña.puntuaciones.actuacion}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Global</p>
              <p className="text-yellow-400 font-bold text-3xl">{reseña.puntuaciones.global}</p>
            </div>
          </div>
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