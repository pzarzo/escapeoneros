'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { reseñas } from '@/data/reseñas';

export default function ResenasPage() {
  const [filtroProvincia, setFiltroProvincia] = useState('Todas');
  const [filtroDificultad, setFiltroDificultad] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  const provincias = ['Todas', ...new Set(reseñas.map(r => r.provincia))];
  const dificultades = ['Todas', 'Fácil (1-3)', 'Medio (4-6)', 'Difícil (7-10)'];

  let reseñasFiltradas = reseñas.filter(r => {
    const cumpleProvincia = filtroProvincia === 'Todas' || r.provincia === filtroProvincia;

    let cumpleDificultad = true;
    if (filtroDificultad === 'Fácil (1-3)') cumpleDificultad = r.dificultad <= 3;
    if (filtroDificultad === 'Medio (4-6)') cumpleDificultad = r.dificultad >= 4 && r.dificultad <= 6;
    if (filtroDificultad === 'Difícil (7-10)') cumpleDificultad = r.dificultad >= 7;

    const cumpleBusqueda = r.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                           r.provincia.toLowerCase().includes(busqueda.toLowerCase());

    return cumpleProvincia && cumpleDificultad && cumpleBusqueda;
  });

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

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-white mb-2">Todas nuestras reseñas</h2>
        <p className="text-gray-400 mb-8">{reseñasFiltradas.length} salas encontradas</p>

        <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border border-cyan-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Buscar por nombre o provincia..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="bg-gray-700 text-white rounded-lg px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <select
              value={filtroProvincia}
              onChange={(e) => setFiltroProvincia(e.target.value)}
              className="bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {provincias.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            <select
              value={filtroDificultad}
              onChange={(e) => setFiltroDificultad(e.target.value)}
              className="bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {dificultades.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reseñasFiltradas.length > 0 ? (
            reseñasFiltradas.map((reseña) => (
              <Link
                key={reseña.id}
                href={`/resenas/${reseña.slug}`}
                className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer border border-cyan-500/20 hover:border-cyan-500/50 block"
              >
                <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-yellow-500/20 flex items-center justify-center">
                  <span className="text-gray-500 text-4xl">📷</span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{reseña.nombre}</h4>
                  <p className="text-cyan-400 text-sm mb-2">{reseña.provincia} · {reseña.tematica}</p>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{reseña.resena}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">Dificultad: {reseña.dificultad}/10</span>
                    <span className="text-2xl font-bold text-yellow-400">{reseña.puntuaciones.global}/10</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-xl">No se encontraron reseñas con esos filtros</p>
            </div>
          )}
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