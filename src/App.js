import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Modal showModal={showModal} />
      <AnimatePresence onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          ></Route>
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          ></Route>
          <Route
            path="/order"
            element={<Order pizza={pizza} setShowModal={setShowModal} />}
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
