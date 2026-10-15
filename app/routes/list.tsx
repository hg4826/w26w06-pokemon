import { Link } from "react-router"
import type { Route } from "./+types/list";
import { getPokemonList } from "~/api/pokemon";

export async function loader() {
  return { pokemons: await getPokemonList() }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "포켓몬" },
    { name: "description", content: "포켓몬 도감" },
  ];
}

export default function List({ loaderData }: Route.ComponentProps) {
  const { pokemons } = loaderData
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
