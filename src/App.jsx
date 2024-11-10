// src/App.jsx
import TourList from "./ToursList.jsx";
import { tours } from "./toursData";
import "./App.css";

function App() {
  return (
    <main>
      <TourList tours={tours} />
    </main>
  );
}

export default App;