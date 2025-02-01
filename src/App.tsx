import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RecipePage } from "./pages/RecipePage";

function App() {
  return (
    <div className="bg-ourWhite w-screen h-screen p-2">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opskrifter/:slug" element={<RecipePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
