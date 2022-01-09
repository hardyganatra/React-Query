import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}
export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes
  )
  if (isLoading) {
    return <h2>...LODAING</h2>
  }
  if (isError) {
    return <h2>Error is {error.message}</h2>
  }
  return (
    <>
      <h2>RQ super Heroes page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </>
  )
}
