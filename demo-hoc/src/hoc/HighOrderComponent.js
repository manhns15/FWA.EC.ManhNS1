import React, { useEffect, useState } from "react";

const HighOrderComponent = (WrappedComponent, apiEndpoint) => {
  return function WithAPI(props) {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch(apiEndpoint)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }, []);
    return <WrappedComponent {...props} data={data} />;
  };
};

export default HighOrderComponent;
