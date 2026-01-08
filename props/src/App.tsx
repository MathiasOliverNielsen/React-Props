import "./App.css";
import { Card } from "./components/Card";

function App() {
  // Objekt med card data
  const cardData = {
    title: "Velkommen til vores website",
    textContent: "Dette er et eksempel på et Card component bygget med React og TypeScript. Komponenten demonstrerer hvordan props kan sendes ned gennem flere lag af components.",
    footerContent: "Oprettet den 8. januar 2026",
  };

  return (
    <>
      <Card cardData={cardData} />
      {/* Eksempel på Card uden data for at vise default values */}
      <Card />
    </>
  );
}

export default App;
