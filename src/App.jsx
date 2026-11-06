import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Benefits from "./pages/Benefits";
import CallCenterServices from "./pages/CallCenterServices";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/benefits" element={<Benefits />} />

      <Route
        path="/services/call-center"
        element={<CallCenterServices />}
      />
    </Routes>
  );
}

export default App;