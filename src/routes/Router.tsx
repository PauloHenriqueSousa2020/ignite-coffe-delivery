import { Route, Routes } from "react-router-dom";

import { Layout } from "@/Layout";
import { Cart } from "@/pages/Cart";
import { Home } from "@/pages/Home";
import { Success } from "@/pages/Success";

export function Router () {
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
      
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  )
}