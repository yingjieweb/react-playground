import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageA from "./pages/page-a";
import PageB from "./pages/page-b";
import GlobalModal from './components/GlobalModal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageA />} />
          <Route path="/page-b" element={<PageB />} />
        </Routes>
      </BrowserRouter>
      <GlobalModal />
    </div>
  );
}

export default App;
