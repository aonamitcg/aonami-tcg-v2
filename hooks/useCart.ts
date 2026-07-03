"use client";

import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState<any[]>([]);

    function addToCart(product: any) {
        setCart((current) => [...current, product]);
          }

            function removeFromCart(id: number) {
                setCart((current) => current.filter((p) => p.id !== id));
                  }

                    return {
                        cart,
                            addToCart,
                                removeFromCart,
                                  };
                                  }