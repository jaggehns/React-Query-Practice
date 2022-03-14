import { useQuery } from "react-query";
import axios from "axios";

const fetchedSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchedSuperHeroes, {
    // staleTime: 0,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: interval,
    // refetchIntervalInBackground: true,
    // enabled: false,
    onSuccess,
    onError,
    select: (data) => {
      const superHeroNames = data?.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
};
