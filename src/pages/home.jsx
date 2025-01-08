import React, { useEffect, useState } from "react";
import ShopTable from "../components/ShopTable";
import { shopCloumn } from "../utils/ShopColumn";

const Home = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const getrazzakfashionData = async () => {
    try {
      setLoad(true);
      const response = await fetch("https://api.razzakfashion.com/");
      const jsonData = await response.json();
      setData(jsonData?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };
  useEffect(() => {
    getrazzakfashionData();
  }, []);
  return (
    <>
      {load ? (
        <>Loading.....</>
      ) : (
        <>
          <h1>Razzak Fashion Data</h1>
          {data.length > 0 ? (
            <ShopTable data={data} columns={shopCloumn} />
          ) : (
            <div>No data available.</div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
