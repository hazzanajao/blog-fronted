import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Screens/Home";
import About from "./Screens/About";
import ArticleListScreen from "./Screens/ArticleListScreen";
import ArticleScreen from "./Screens/ArticleScreen"
import NotFound from "./Screens/NotFound"
import Footer from "./Components/Footer";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div id="page-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles" element={<ArticleListScreen />} />
              <Route path="/articles/:articleId" element={<ArticleScreen />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
