"use client";

import {
  createContext,
    useContext,
      useMemo,
        useState,
          ReactNode,
          } from "react";

          export interface CartItem {
            id: number;
              title: string;
                price: number;
                  image: string;
                    quantity: number;
                    }

                    interface CartContextType {
                      cart: CartItem[];
                        addToCart: (item: Omit<CartItem, "quantity">) => void;
                          removeFromCart: (id: number) => void;
                            clearCart: () => void;
                              totalItems: number;
                                totalPrice: number;
                                }

                                const CartContext = createContext<CartContextType | null>(null);

                                export function CartProvider({
                                  children,
                                  }: {
                                    children: ReactNode;
                                    }) {
                                      const [cart, setCart] = useState<CartItem[]>([]);

                                        function addToCart(item: Omit<CartItem, "quantity">) {
                                            setCart((current) => {
                                                  const existing = current.find((p) => p.id === item.id);

                                                        if (existing) {
                                                                return current.map((p) =>
                                                                          p.id === item.id
                                                                                      ? { ...p, quantity: p.quantity + 1 }
                                                                                                  : p
                                                                                                          );
                                                                                                                }

                                                                                                                      return [...current, { ...item, quantity: 1 }];
                                                                                                                          });
                                                                                                                            }

                                                                                                                              function removeFromCart(id: number) {
                                                                                                                                  setCart((current) => current.filter((p) => p.id !== id));
                                                                                                                                    }

                                                                                                                                      function clearCart() {
                                                                                                                                          setCart([]);
                                                                                                                                            }

                                                                                                                                              const totalItems = useMemo(
                                                                                                                                                  () => cart.reduce((sum, item) => sum + item.quantity, 0),
                                                                                                                                                      [cart]
                                                                                                                                                        );

                                                                                                                                                          const totalPrice = useMemo(
                                                                                                                                                              () =>
                                                                                                                                                                    cart.reduce(
                                                                                                                                                                            (sum, item) => sum + item.price * item.quantity,
                                                                                                                                                                                    0
                                                                                                                                                                                          ),
                                                                                                                                                                                              [cart]
                                                                                                                                                                                                );

                                                                                                                                                                                                  return (
                                                                                                                                                                                                      <CartContext.Provider
                                                                                                                                                                                                            value={{
                                                                                                                                                                                                                    cart,
                                                                                                                                                                                                                            addToCart,
                                                                                                                                                                                                                                    removeFromCart,
                                                                                                                                                                                                                                            clearCart,
                                                                                                                                                                                                                                                    totalItems,
                                                                                                                                                                                                                                                            totalPrice,
                                                                                                                                                                                                                                                                  }}
                                                                                                                                                                                                                                                                      >
                                                                                                                                                                                                                                                                            {children}
                                                                                                                                                                                                                                                                                </CartContext.Provider>
                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                  export function useCart() {
                                                                                                                                                                                                                                                                                    const context = useContext(CartContext);

                                                                                                                                                                                                                                                                                      if (!context) {
                                                                                                                                                                                                                                                                                          throw new Error(
                                                                                                                                                                                                                                                                                                "useCart doit être utilisé dans CartProvider."
                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                                        return context;
                                                                                                                                                                                                                                                                                                        }