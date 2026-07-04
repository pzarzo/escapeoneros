export interface Reseña {
  id: number;
  slug: string;
  nombre: string;
  provincia: string;
  tematica: string;
  dificultad: number;
  fecha: string;
  resena: string;
  puntuaciones: {
    ambientacion: number;
    puzzles: number;
    actuacion: number;
    global: number;
  };
}

export const reseñas: Reseña[] = [
  {
    id: 1,
    slug: "el-secreto-del-faraon",
    nombre: "El Secreto del Faraón",
    provincia: "Madrid",
    tematica: "Aventura",
    dificultad: 6,
    fecha: "2024-05-10",
    resena: "Una sala con muy buena ambientación egipcia y puzzles originales. La actuación del game master añade mucho.",
    puntuaciones: { ambientacion: 9, puzzles: 8, actuacion: 9, global: 8.7 }
  },
  {
    id: 2,
    slug: "manicomio-abandonado",
    nombre: "Manicomio Abandonado",
    provincia: "Barcelona",
    tematica: "Terror",
    dificultad: 8,
    fecha: "2024-06-02",
    resena: "Tensión constante de principio a fin. Los sustos están bien medidos, no son gratuitos.",
    puntuaciones: { ambientacion: 9.5, puzzles: 7, actuacion: 8.5, global: 8.3 }
  }
];