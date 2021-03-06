import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

export const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const fetchColors = (pageNumber) => {
    return axios.get(
      `http://localhost:4000/colors?_limit=2&_page=${pageNumber}`
    );
  };
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  console.log(pageNumber);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id} - {color.label}
              </h2>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev page
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next page
        </button>
      </div>
      {isFetching && "Loading"}
    </>
  );
};
