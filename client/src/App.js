import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    logData();
  }, []);

  const logData = async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/data`);

    console.log(result.data);
  };

  return <h1>React App</h1>;
};

export default App;
