import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-xl mx-auto px-4 py-6 bg-green-100 rounded-md shadow-2xl font-primary">
        <Outlet /> {/* It's Render all the children of the app router-dom */}
      </main>
      <footer>Footer of the App</footer>
    </>
  );
}

export default App;
