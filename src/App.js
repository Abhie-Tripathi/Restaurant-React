import { useState } from "react";
import Header from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [iscartopen, setiscartopen] = useState(false);

  const opencart = () => {
    setiscartopen(true);
  };

  const closecart = () => {
    setiscartopen(false);
  };
  return (
    <CartProvider>
      {iscartopen && <Cart onclose={closecart} />}
      <Header onopencart={opencart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
