import React, { useEffect, useState } from "react";
import ShopTable from "../components/ShopTable";
import { shopCloumn } from "../utils/shopColumn";
import Pagination from "../components/Pagination";

const Home = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const getrazzakfashionData = async () => {
    try {
      setLoad(true);
      const response = await fetch("https://api.razzakfashion.com/");
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
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      {load ? (
        <>Loading.....</>
      ) : (
        <>
          <h1>Razzak Fashion Data</h1>
          {data.length > 0 ? (
            <>
              <ShopTable data={currentData} columns={shopCloumn} />
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </>
          ) : (
            <div>No data available.</div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
