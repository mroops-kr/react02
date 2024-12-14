import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "~pages/index/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<IndexPage></IndexPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
