import { useParams } from "react-router-dom";

import { RECEPIES_API } from "../shared/constants/api-constants";
import { useState } from "react";
import { useEffect } from "react";
import ItemsGrid from "../shared/components/ItemsGrid";

function Searched() {
  const [recepies, setRecepies] = useState([]);
  let params = useParams();

  const getRecepies = async (query) => {
    const api = await fetch(`${RECEPIES_API.search}${query}`);
    const data = await api.json();

    setRecepies(data.results);
  };

  useEffect(() => {
    getRecepies(params.query);
  }, [params.query]);

  return <ItemsGrid recepies={recepies}></ItemsGrid>;
}

export default Searched;
