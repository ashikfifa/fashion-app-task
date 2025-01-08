import React, { useEffect, useState } from "react";
import ShopTable from "../components/ShopTable";
import { shopCloumn } from "../utils/shopColumn";

const Home = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState("");
  const [paginate, setPaginate] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const getrazzakfashionData = async () => {
    try {
      setLoad(true);
      const response = await fetch(
        `https://api.razzakfashion.com/?paginate=${paginate}&search=${search}&page=${currentPage}`
      );
      const jsonData = await response.json();
      setData(jsonData?.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getrazzakfashionData();
  }, [search, paginate, currentPage]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <h1>Razzak Fashion Data</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
          className="searchBar"
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Items per page:
          <select
            value={paginate}
            onChange={(e) => setPaginate(Number(e.target.value))}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>
      {load ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.length > 0 ? (
            <ShopTable data={data} columns={shopCloumn} />
          ) : (
            <div>No data available.</div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
