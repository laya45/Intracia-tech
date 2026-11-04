
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

// Keep your existing imports and routes for other pages here.

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Add your existing routes below without deleting them. */}
    </Routes>
  );
}

export default App;
