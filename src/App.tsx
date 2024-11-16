import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to the Blog</h1>} />
    </Routes>
  );
}

export default App;
