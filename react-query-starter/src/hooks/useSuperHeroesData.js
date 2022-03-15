import { useQuery, useMutation } from "react-query";
import axios from "axios";

const fetchedSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
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
    // select: (data) => {
    //   const superHeroNames = data?.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero);
};
