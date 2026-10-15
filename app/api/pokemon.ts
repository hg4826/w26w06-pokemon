import axios from "axios"

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
})

export type Pokemon = {
  id: number
  name: string
  image: string
}

type SpeciesResponse = {
  id: number
  names: { name: string; language: { name: string } }[]
}

const imageUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

const koreanName = (species: SpeciesResponse) =>
  species.names.find((n) => n.language.name === "ko")?.name ?? String(species.id)

export async function getPokemon(id: number): Promise<Pokemon> {
  const { data } = await api.get<SpeciesResponse>(`/pokemon-species/${id}`)
  return { id: data.id, name: koreanName(data), image: imageUrl(data.id) }
}

export async function getPokemonList(limit = 20): Promise<Pokemon[]> {
  const ids = Array.from({ length: limit }, (_, i) => i + 1)
  return Promise.all(ids.map(getPokemon))
}
