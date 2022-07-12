import { Navbar } from "./Navbar";
import { Promo } from "./Promo";

function App() {
  return (
    <div className="bg-indigo-50 h-screen">
      <div className="container">
        <header>
          <Navbar/>
        </header>
        <main>
          <Promo/>
        </main>
      </div>
    </div>
  );
}

export default App;
