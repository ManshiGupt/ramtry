import axios from "axios";
import React, { useEffect, useState } from "react";

const PaginationLoadMore = () => {
  const [data, setData] = useState([]);
  const [limit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const[show,setShow]= useState(false);

  const fetchData = async () => {
    try {
      const resp = await axios.get(
        `https://app.vedicpandit.in/get-pandits-by-poojaId?poojaId=668e7e9a23fea6f8abfcae47&latitudeUser=26.88305&longitudeUser=80.89934&limit=${limit}&page=${currentPage}`
      );
      if (currentPage === 1) {
        setData(resp.data.data);
        console.log("ko", resp.data.totalPages);
      } else {
        setData(prev => [...prev, ...resp.data.data]);
        console.log("kp", data);
      }

      setShow(currentPage+limit<resp.data.totalPages)

    } catch (error) {
      console.log("miugfdh");
    }
  };

  useEffect(() => {
    fetchData();
    // alert("chdg")
  }, [currentPage])

  const handleLoadMore = () => {
  
    setCurrentPage((prev) => prev + 1);
  };

  // https://app.vedicpandit.in/get-pandits-by-poojaId?poojaId=668e7e9a23fea6f8abfcae47&latitudeUser=26.88305&longitudeUser=80.89934
  return (
    <div>
      PaginationLoadMore
      {currentPage}
      <div>
        {data.map((data) => (
          <h1>{data.name}</h1>
        ))}
      </div>
    { show && <button onClick={() => handleLoadMore()}>load more</button>}
    </div>
  );
};

export default PaginationLoadMore;
