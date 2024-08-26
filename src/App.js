import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="bg-[#141414] text-white w-screen h-screen">
      <Header />
      <Body />
    </div>
    /**
     * Header
     *  * Logo
     *  * Search Bar
     *
     * Body
     *  * SidePanel
     *    * Menu Items
     *
     *  * Main Container
     *    * ButtonsList (Suggestions - Categories)
     *    * Video Container
     *      * Video Cards
     *
     */
  );
}

export default App;
