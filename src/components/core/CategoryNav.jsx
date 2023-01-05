import {
  FaGlassMartiniAlt,
  FaCarrot,
  FaCheese,
  FaHamburger,
} from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function CategoryNav() {
  return (
    <Nav>
      <NavLink to={"/cuisine/beverages"}>
        <FaGlassMartiniAlt />
      </NavLink>
      <NavLink to={"/cuisine/vegetarian"}>
        <FaCarrot />
      </NavLink>
      <NavLink to={"/cuisine/desserts"}>
        <FaCheese />
      </NavLink>
      <NavLink to={"cuisine/fast-food"}>
        <FaHamburger />
      </NavLink>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
`;

export default CategoryNav;
