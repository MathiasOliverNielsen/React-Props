import "./App.css";
// import { GreetingComponent } from "./components/GreetingComponent";
import ListComponent from "./components/ListComponent";

function App() {
  const favoriteFoods = ["Pizza", "Sushi", "Tacos", "Pasta", "Steak"];
  const favoriteMovies = ["Inception", "The Matrix", "Interstellar", "The Godfather", "Pulp Fiction"];
  return (
    <>
      {/* <GreetingComponent name="Mathias" />
      <GreetingComponent name="Anna" />
      <GreetingComponent name="Sofie" /> */}
      <ListComponent items={favoriteFoods} title="Mine livretter" />
      <ListComponent items={favoriteMovies} title="Mine favoritfilm" />
    </>
  );
}

export default App;
