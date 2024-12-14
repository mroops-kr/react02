import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexP from "~pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<IndexP></IndexP>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
