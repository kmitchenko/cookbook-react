import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };
  return (
    <form onSubmit={submitHandler}>
      <SearchInput placeholder="Search">
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
          type="text"
          value={input}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </SearchInput>
    </form>
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

  button {
    background: none;
    border: none;
    width: 20%;
  }

  button:hover {
    cursor: pointer;
  }
`;

export default Search;
