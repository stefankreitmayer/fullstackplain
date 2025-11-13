import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GreetPage } from "./features/greet/GreetPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GreetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
