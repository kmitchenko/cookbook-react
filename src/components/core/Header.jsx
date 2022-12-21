import Navbar from "./Navbar";
import Search from "../features/search/components/Search";
import "./header.scss";

function Header() {
  return (
    <header>
      {/* logo */}
      <Navbar />
      <Search />
    </header>
  );
}
export default Header;
