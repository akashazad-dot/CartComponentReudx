import "./App.css";
import Navbar from "./Components/E-commerce/Navbar/Navbar";
import ProductList from "./Components/E-commerce/ProductList/ProductList";
// import Child1 from "./Components/Child1";
// import Child2 from "./Components/Child2";
import CreateNotes from "./Components/Notes/CreateNotes";
import ListNotes from "./Components/Notes/ListNotes";

function App() {
  return (
    <div>
      {/* <Child1 />
      <Child2 /> */}
      {/* <CreateNotes />
      <ListNotes />  */}
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
