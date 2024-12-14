import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "~pages/index/index";
import HeaderPage from "~components/common/header/Header";

function App() {
  return (
    <BrowserRouter>
      <HeaderPage />
      <Routes>
        <Route index path="/" element={<IndexPage></IndexPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
