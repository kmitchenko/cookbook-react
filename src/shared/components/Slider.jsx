import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { getFromStorage, setInStorage } from "../../helpers/storage.helper";
import { SharedCard } from "../../shared/components/SharedCard";
import { RECEPIES_API } from "../constants/api-constants";

function Slider({ category, type }) {
  const [slider, setSlider] = useState([]);
  const mainRef = useRef();
  const thumbsRef = useRef();

  useEffect(() => {
    const getSliderCategory = async () => {
      const cachedRecipes = getFromStorage(category);

      if (cachedRecipes) {
        setSlider(JSON.parse(cachedRecipes));
      } else {
        const api = await fetch(
          type ? `${RECEPIES_API[category]}${type}` : RECEPIES_API[category]
        );
        const data = await api.json();
        const dataToSave = data.results ?? data.recipes;
        setSlider(dataToSave);
        setInStorage(category, JSON.stringify(dataToSave));
      }
    };

    getSliderCategory();
    if (mainRef.current && thumbsRef.current) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, [category, type]);

  const renderSlides = () => {
    return slider?.map((recipe) => {
      return (
        <SplideSlide key={recipe.id}>
          <SharedCard>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
          </SharedCard>
        </SplideSlide>
      );
    });
  };

  const mainOptions = {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
    height: "20rem",
    perPage: 1,
  };

  const thumbsOptions = {
    fixedWidth: 100,
    fixedHeight: 60,
    gap: 10,
    rewind: true,
    pagination: false,
    cover: true,
    isNavigation: true,
    focus: "center",
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  };

  return (
    <Wrapper>
      <h2>{type?.toUpperCase() ?? category.toUpperCase()}</h2>
      <Splide options={mainOptions} ref={mainRef}>
        {renderSlides()}
      </Splide>
      <div className="splide-navigation">
        <Splide options={thumbsOptions} ref={thumbsRef}>
          {renderSlides()}
        </Splide>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 700px;
  height: 500px;
  margin: 4rem auto;
`;

export default Slider;
