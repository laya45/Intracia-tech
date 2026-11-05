import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Benefits from "./pages/Benefits";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/benefits" element={<Benefits />} />

      {/* Keep your other routes here */}
    </Routes>
  );
}

export default App;