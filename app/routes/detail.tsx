import { Link } from "react-router"
import type { Route } from "./+types/detail";
import { getPokemon } from "~/api/pokemon";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  try {
    return { pokemon: await getPokemon(Number(params.id)) }
  } catch {
    return { pokemon: null }
  }
}

export function HydrateFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-400">
      불러오는 중...
    </div>
  )
}

export default function Detail({ loaderData }: Route.ComponentProps) {
  const { pokemon } = loaderData
  if (!pokemon) {
    return <div className="min-h-screen bg-slate-700 p-6">포켓몬을 찾을 수 없습니다.</div>
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <Link
        to="/"
        className="mb-3 block mx-auto w-max px-6 py-2 bg-slate-400 hover:bg-slate-700 text-white text-sm rounded-lg">
        목록으로 돌아가기
      </Link>
      <div className="bg-white rounded-xl shadow p-8 max-w-md mx-auto
                      text-center flex flex-col items-center gap-4">
        <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32" />
        <h1 className="text-3xl font-bold text-slate-800">{pokemon.name}</h1>
        <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
          No. {pokemon.id}
        </span>
        {pokemon.description && (
          <p className="text-slate-600 leading-relaxed break-keep">{pokemon.description}</p>
        )}
      </div>
    </div>
  )
}
