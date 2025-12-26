import { Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter.jsx";
import Forms from "./pages/Forms.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/form" element={<Forms />} />
    </Routes>
  );
}

export default App;
