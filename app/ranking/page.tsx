'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { reseñas } from '@/data/reseñas';

export default function RankingPage() {
  const [tipoRanking, setTipoRanking] = useState('general');

  let reseñasOrdenadas = [...reseñas].sort((a, b) => b.puntuaciones.global - a.puntuaciones.global);

  if (tipoRanking === 'ciudad') {
    const porCiudad = reseñas.reduce((acc, r) => {
      if (!acc[r.ciudad]) acc[r.ciudad] = [];
      acc[r.ciudad].push(r);
      return acc;
    }, {} as Record<string, typeof reseñas>);

    Object.keys(porCiudad).forEach(ciudad => {
      porCiudad[ciudad].sort((a, b) => b.puntuaciones.global - a.puntuaciones.global);
    });

    return <RankingPorCiudad porCiudad={porCiudad} />;
  }

  if (tipoRanking === 'dificultad') {
    const fácil = [...reseñas].filter(r => r.dificultad <= 3).sort((a, b) => b.puntuaciones.global - a.puntuaciones.global);
    const medio = [...reseñas].filter(r => r.dificultad >= 4 && r.dificultad <= 6).sort((a, b) => b.puntuaciones.global - a.puntuaciones.global);
    const difícil = [...reseñas].filter(r => r.dificultad >= 7).sort((a, b) => b.puntuaciones.global - a.puntuaciones.global);

    return <RankingPorDificultad fácil={fácil} medio={medio} difícil={difícil} />;
  }

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
            <li><Link href="/resenas" className="hover:text-cyan-400 transition">Reseñas</Link></li>
            <li><Link href="/ranking" className="hover:text-cyan-400 transition font-bold text-cyan-400">Ranking</Link></li>
            <li><Link href="/nosotros" className="hover:text-cyan-400 transition">Nosotros</Link></li>
            <li>
              <a href="https://www.instagram.com/escaperoneros" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* CONTENIDO */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-white mb-8">🏆 Ranking de Salas</h2>

        {/* OPCIONES DE RANKING */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setTipoRanking('general')}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              tipoRanking === 'general'
                ? 'bg-cyan-500 text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            General
          </button>
          <button
            onClick={() => setTipoRanking('ciudad')}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              tipoRanking === 'ciudad'
                ? 'bg-cyan-500 text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Por Ciudad
          </button>
          <button
            onClick={() => setTipoRanking('dificultad')}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              tipoRanking === 'dificultad'
                ? 'bg-cyan-500 text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Por Dificultad
          </button>
        </div>

        {/* RANKING GENERAL */}
        <div className="space-y-4">
          {reseñasOrdenadas.length > 0 ? (
            reseñasOrdenadas.map((reseña, index) => (
              <div key={reseña.id} className="bg-gray-800/50 rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-500/50 transition flex items-center gap-6">
                {/* Posición */}
                <div className={`text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-lg ${
                  index === 0 ? 'bg-yellow-400 text-black' :
                  index === 1 ? 'bg-gray-400 text-black' :
                  index === 2 ? 'bg-cyan-500 text-black' :
                  'bg-gray-700 text-white'
                }`}>
                  #{index + 1}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{reseña.nombre}</h3>
                  <p className="text-gray-400">{reseña.ciudad} · {reseña.tematica} · Dificultad: {reseña.dificultad}/10</p>
                </div>

                {/* Puntuación */}
                <div className="text-right">
                  <p className="text-2xl font-bold text-yellow-400">{reseña.puntuaciones.global}</p>
                  <p className="text-gray-400 text-sm">de 10</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Próximamente ranking...</p>
            </div>
          )}
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

function RankingPorCiudad({ porCiudad }: any) {
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
            <li><Link href="/ranking" className="hover:text-cyan-400 transition font-bold text-cyan-400">Ranking</Link></li>
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
        <h2 className="text-4xl font-bold text-white mb-8">Ranking por Ciudad</h2>

        {Object.entries(porCiudad).map(([ciudad, reseñasCity]: any) => (
          <div key={ciudad} className="mb-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">{ciudad}</h3>
            <div className="space-y-3">
              {reseñasCity.map((reseña: any, index: number) => (
                <div key={reseña.id} className="bg-gray-800/50 rounded-lg p-4 border border-cyan-500/20 flex items-center gap-4">
                  <span className="text-lg font-bold text-yellow-400">#{index + 1}</span>
                  <div className="flex-1">
                    <p className="text-white font-bold">{reseña.nombre}</p>
                  </div>
                  <span className="text-xl font-bold text-yellow-400">{reseña.puntuaciones.global}/10</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className="bg-black/50 border-t border-cyan-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
          <p>© 2024 Escaperoneros. Hecho por jugadores, para jugadores.</p>
        </div>
      </footer>
    </main>
  );
}

function RankingPorDificultad({ fácil, medio, difícil }: any) {
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
            <li><Link href="/ranking" className="hover:text-cyan-400 transition font-bold text-cyan-400">Ranking</Link></li>
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
        <h2 className="text-4xl font-bold text-white mb-8">Ranking por Dificultad</h2>

        {[{ título: 'Fáciles (1-3)', datos: fácil }, { título: 'Medianas (4-6)', datos: medio }, { título: 'Difíciles (7-10)', datos: difícil }].map(({ título, datos }) => (
          <div key={título} className="mb-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">{título}</h3>
            {datos.length > 0 ? (
              <div className="space-y-3">
                {datos.map((reseña: any, index: number) => (
                  <div key={reseña.id} className="bg-gray-800/50 rounded-lg p-4 border border-cyan-500/20 flex items-center gap-4">
                    <span className="text-lg font-bold text-yellow-400">#{index + 1}</span>
                    <div className="flex-1">
                      <p className="text-white font-bold">{reseña.nombre}</p>
                      <p className="text-gray-400 text-sm">{reseña.ciudad}</p>
                    </div>
                    <span className="text-xl font-bold text-yellow-400">{reseña.puntuaciones.global}/10</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No hay salas en esta categoría</p>
            )}
          </div>
        ))}
      </section>

      <footer className="bg-black/50 border-t border-cyan-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
          <p>© 2024 Escaperoneros. Hecho por jugadores, para jugadores.</p>
        </div>
      </footer>
    </main>
  );
}