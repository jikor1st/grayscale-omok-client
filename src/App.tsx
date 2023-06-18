import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<>main</>} />
      <Route path="*" element={<>page not found</>} />
    </Routes>
  );
}

export default App;
