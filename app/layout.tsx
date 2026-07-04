import "./globals.css";
import type { Metadata } from "next";

import { CartProvider } from "../contexts/CartContext";
import { AuthProvider } from "../contexts/AuthContext";

export const metadata: Metadata = {
  title: "AONAMI TCG",
    description: "Boutique officielle AONAMI TCG",
    };

    export default function RootLayout({
      children,
      }: Readonly<{
        children: React.ReactNode;
        }>) {
          return (
              <html lang="fr">
                    <body>
                            <AuthProvider>
                                      <CartProvider>
                                                  {children}
                                                            </CartProvider>
                                                                    </AuthProvider>
                                                                          </body>
                                                                              </html>
                                                                                );
                                                                                }