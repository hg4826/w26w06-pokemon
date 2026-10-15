import { Link } from "react-router"
import type { Route } from "./+types/list";

const pokemons = [
  { id: 1, name: "이상해씨", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
  { id: 4, name: "파이리", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
  { id: 7, name: "꼬부기", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
  { id: 25, name: "피카츄", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
  { id: 29, name: "니드런♀", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png" },
  { id: 32, name: "니드런♂", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png" },
  { id: 133, name: "이브이", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" },
  { id: 150, name: "뮤츠", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" },
  { id: 151, name: "뮤", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png" },
  { id: 152, name: "치코리타", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "포켓몬" },
    { name: "description", content: "포켓몬 도감" },
  ];
}

export default function List() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-slate-800">
        포켓몬 목록
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {pokemons.map((pokemon) => (
          <Link
            to={`detail/${pokemon.id}`}
            key={pokemon.id}
            className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4
                       shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
          >
            <div className="mb-4 flex aspect-square w-full items-center justify-center rounded-xl bg-slate-100 p-3 transition-colors duration-300 group-hover:bg-yellow-50">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-xs font-semibold tracking-wider text-slate-400">
              #{String(pokemon.id).padStart(3, "0")}
            </span>
            <p className="mt-1 text-lg font-bold text-slate-700 transition-colors group-hover:text-yellow-600">
              {pokemon.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
