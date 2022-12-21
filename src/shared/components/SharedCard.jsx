import styled from "styled-components";

export const SharedCard = styled.div`
  /* min-height: 15rem; */
  height: 100%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    object-fit: cover;
  }

  p {
    width: 100%;
    height: 100%;
    padding: 1rem;
    position: absolute;
    z-index: 100;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
