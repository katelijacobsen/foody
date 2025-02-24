import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RecipePage } from "./pages/RecipePage";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <div className="bg-ourWhite w-screen h-screen p-2">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="opskrifter/:slug" element={<RecipePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
