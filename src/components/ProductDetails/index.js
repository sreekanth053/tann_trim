import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

const ProductDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://my-json-server.typicode.com/sreekanth053/api/productdetails");
        const result = await response.json();
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
    <>
    <div className="container">
      {data.map((item) => (
        <div className="productdetails-container" key={item.id}>
          <div className="product-details">
            <img src={item.bookmark} className="bookmark" style={{ backgroundImage: item.url }} alt={item.name} />
            <img src={item.url} className="product-image" alt={item.name} />
          </div>
            <h4 className="product-name">{item.name}</h4>
            <div className="price-cart">
              {/* <img src={item.price} className="price" alt="productprice" /> */}
              <h3 className="price"><FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#f9fafa",}} /> 4899 <span className="strike-price"> 8999 </span><span className="discount">(50% off)</span></h3>
              {/* <img src={item.cart} className="cart" alt={item.name} /> */}
              <FontAwesomeIcon className="cart" icon={faBagShopping} style={{color: "#fafcff",}} />
            </div>
        </div>
      ))}
    </div>
    <div className="container">
      {data.map((item) => (
        <div className="productdetails-container" key={item.id}>
          <div className="product-details">
            <img src={item.bookmark} className="bookmark" style={{ backgroundImage: item.url }} alt={item.name} />
            <img src={item.url} className="product-image" alt={item.name} />
          </div>
          <div className="product-description"></div>
            <h4 className="product-name">{item.name}</h4>
            <div className="price-cart">
              {/* <img src={item.price} className="price" alt="productprice" /> */}
              <h3 className="price"><FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#f9fafa",}} /> 4899 <span className="strike-price"> 8999 </span><span className="discount">(50% off)</span></h3>
              {/* <img src={item.cart} className="cart" alt={item.name} /> */}
              <FontAwesomeIcon className="cart" icon={faBagShopping} style={{color: "#fafcff",}} />
            </div>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default ProductDetails;
