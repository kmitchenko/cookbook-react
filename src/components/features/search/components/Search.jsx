import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <SearchInput placeholder="Search">
      <input placeholder="Search" type="text" />
      <button>
        <FaSearch />
      </button>
    </SearchInput>
  );
}

const SearchInput = styled.div`
  width: 14rem;
  height: 2rem;
  padding: 0.2rem;
  border-radius: 2rem;
  background-color: #e8e5ef;

  input {
    width: 75%;
    height: 100%;
    margin-left: 10px;
    padding: 5px;
    border: none;
  }

  input:focus {
    outline: none;
  }

  input:hover {
    cursor: pointer;
  }

  button {
    background: none;
    border: none;
    width: 20%;
  }
`;

export default Search;
