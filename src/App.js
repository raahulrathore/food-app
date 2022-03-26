import Header from "./components/LAYOUTS/Header";
import Meals from "./components/MEALS/Meals";
import Cart from "./components/CART/Cart";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const overlayOpen = () => {
    setOpen(true);
  };

  const overlayClose = () => {
    setOpen(false);
  };
  console.log('current',open)
  return (
    <>
      {open && <Cart onClose={overlayClose} />}
      <Header overlayOpen={overlayOpen} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
