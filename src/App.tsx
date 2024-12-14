import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import IndexPage from "~pages/index/index";
import HeaderPage from "~components/common/header/Header";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <HeaderPage />
        <Routes>
          <Route index path="/" element={<IndexPage></IndexPage>}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
