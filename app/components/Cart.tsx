"use client";
import { useCartStore } from "@/store";

import React from "react";

function Cart() {
  const cartStore = useCartStore();
  console.log(cartStore.isOpen);

  return <div>Cart</div>;
}

export default Cart;
