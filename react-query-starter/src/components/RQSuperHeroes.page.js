import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    // if (data?.data.length >= 4) {
    //   setInterval(false);
    // } else {
    //   console.log("success", data);
    // }
    console.log("Success", data);
  };
  const onError = (error) => {
    console.log("Peform side effect after encountering error", error);
  };
  const { isLoading, data, isError, error, refetch, isFetching } =
    useSuperHeroesData(onSuccess, onError);

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
      {/* {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))} */}
      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </>
  );
};
