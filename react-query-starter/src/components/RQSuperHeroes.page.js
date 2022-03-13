import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchedSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const [interval, setInterval] = useState(3000);
  const onSuccess = (data) => {
    if (data?.data.length >= 4) {
      setInterval(false);
    } else {
      console.log("success", data);
    }
  };
  const onError = (error) => {
    console.log("Peform side effect after encountering error", error);
    setInterval(false);
  };
  const { isLoading, data, isError, error, refetch, isFetching } = useQuery(
    "super-heroes",
    fetchedSuperHeroes,
    {
      // staleTime: 0,
      // refetchOnMount: true,
      // refetchOnWindowFocus: true,
      refetchInterval: interval,
      // refetchIntervalInBackground: true,
      // enabled: false,
      onSuccess,
      onError,
    }
  );

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};
