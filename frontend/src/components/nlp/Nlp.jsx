import React, { useState, useEffect } from "react";
import "./nlp.css";
import { getData } from "../api-gateway/api-gateway";

function Nlp() {
  const [data, setData] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    getData(controller.signal)
      .then((response) => setData(response))
      .catch((response) => {
        alert(response);
      });

    return () => {
      setTimeout(() => controller.abort(), 2000);
    };
  }, []);

  return <div>{data}</div>;
}

export default Nlp;
