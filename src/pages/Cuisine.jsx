import { useParams } from "react-router-dom";
import { RECEPIES_API } from "../shared/constants/api-constants";
import { getFromStorage, setInStorage } from "../helpers/storage.helper";
import { useState } from "react";
import { useEffect } from "react";
import ItemsGrid from "../shared/components/ItemsGrid";

function Cuisine() {
  const [recepies, setRecepies] = useState([]);
  let params = useParams();

  const getRecepies = async (category) => {
    const cachedRecipes = getFromStorage(category);

    if (cachedRecipes) {
      setRecepies(JSON.parse(cachedRecipes));
    } else {
      const api = await fetch(`${RECEPIES_API.recepies}${category}`);
      const data = await api.json();

      setRecepies(data.results);
      setInStorage(category, JSON.stringify(data.results));
    }
  };

  useEffect(() => {
    getRecepies(params.category);
  }, [params.category]);

  return <ItemsGrid recepies={recepies}></ItemsGrid>;
}

export default Cuisine;
