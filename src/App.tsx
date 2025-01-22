import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageA from "./pages/page-a";
import PageB from "./pages/page-b";
import PageSlide from "./pages/page-slide";
import PageDrop from "./pages/page-drop";
import GlobalModal from "./components/GlobalModal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageA />} />
          <Route path="/page-b" element={<PageB />} />
          <Route path="/page-slide" element={<PageSlide />} />
          <Route path="/page-drop" element={<PageDrop />} />
        </Routes>
      </BrowserRouter>
      <GlobalModal />
    </div>
  );
}

export default App;
