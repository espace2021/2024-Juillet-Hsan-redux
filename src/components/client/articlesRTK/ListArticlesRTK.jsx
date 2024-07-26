import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetItemsQuery } from '../../../features/rtkQueryArticle';

const ItemsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const limit = searchParams.get('limit') || 10;
  const filter = searchParams.get('filter') || '';

  const { data, error, isLoading } = useGetItemsQuery({ page, limit, filter });

  useEffect(() => {
    // Mettre à jour les paramètres de requête
    setSearchParams({ page, limit, filter });
  }, [page, limit, filter, setSearchParams]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <div>
      <div>
        <input
          type="text"
          value={filter}
          onChange={(e) => setSearchParams({ page, limit, filter: e.target.value })}
          placeholder="Filter"
        />
      </div>
      <ul>
        {data.products.map((item) => (
          <li key={item._id}>{item.designation}</li>
        ))}
      </ul>
      <div style={{ "display": "flex", "justifyContent": "right"}}> 
      <div className="limit-selector-container">
                 
                <label>
                    Afficher &nbsp;
                    <select
                value={limit}
                onChange={(e) => setSearchParams({ page, limit: e.target.value, filter })}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={100}>100</option>
              </select>
              </label>
                  </div>
        <button onClick={() => setSearchParams({ page: +page - 1, limit, filter })} disabled={page <= 1}>
          Previous
        </button>
        {Array.from({ length: data.totalPages }, (_, index) => (
        <button
         key={index}
        onClick={() =>  setSearchParams({ page: index+1, limit, filter })}
        disabled={page === index + 1}
        className={page === index + 1 ? 'page-link active' : ''}
    >
      {index + 1}
    </button>
  ))}
        <button onClick={() => setSearchParams({ page: +page + 1, limit, filter })}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ItemsList;
