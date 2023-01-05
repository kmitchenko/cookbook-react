import Pages from "./pages/Pages";
import Header from "./components/core/Header/Header";
import CategoryNav from './components/core/CategoryNav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Cookbook app</h1>
        <CategoryNav/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
