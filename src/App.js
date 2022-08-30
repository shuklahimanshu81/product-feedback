import { Route, Routes } from "react-router-dom";
import SuggestionsPage from "./Pages/SuggestionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SuggestionsPage />} />
    </Routes>
  );
}

export default App;
