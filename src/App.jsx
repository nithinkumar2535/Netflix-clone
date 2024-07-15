import Home from "./Components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./Components/pages/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={< SignUpPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
