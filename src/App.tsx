import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chat } from "./pages/Chat/Chat";
import Welcome from "./pages/Welcome/Welcome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="chat/:userId" element={<Chat />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
