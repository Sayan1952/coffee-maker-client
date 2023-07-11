import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <h1>Vite + React</h1>

      <h1> Hot coffee {coffees.length}</h1>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
      ))}
    </>
  );
}

export default App;
