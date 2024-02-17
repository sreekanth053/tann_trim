import React, {useState, useEffect } from "react";
import "./index.css";

const ProductsList = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://my-json-server.typicode.com/sreekanth053/api/productslist");
        const result = await response.json();
        // console.log(result, "demo");
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
    };
  }, []); 

  return (
    <div className="product-container">
        {data.map(item=> 
        <div className="productslist-container">
           <img src={item.url} key={item.id} className="image-bag" alt={item.name}/>
           <p className="bag-name">{item.name}</p>
        </div>
        )}
    </div>
  );
};

export default ProductsList;

