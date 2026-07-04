"use client";

import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../../contexts/CartContext";

type Props = {
  id: string;
    title: string;
      price: number;
        image: string;
          badge?: string;
            stock?: number;
            };

            export default function ProductCard({
              id,
                title,
                  price,
                    image,
                      badge,
                        stock = 0,
                        }: Props) {
                          const { addToCart } = useCart();

                            return (
                                <div className="group overflow-hidden rounded-3xl border border-cyan-900 bg-[#08111f] transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.2)]">

                                      <Link href={`/produit/${id}`}>

                                              <div className="relative overflow-hidden">

                                                        {badge && (
                                                                    <span className="absolute left-4 top-4 z-10 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-black">
                                                                                  {badge}
                                                                                              </span>
                                                                                                        )}

                                                                                                                  <button
                                                                                                                              type="button"
                                                                                                                                          className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2"
                                                                                                                                                    >
                                                                                                                                                                <Heart size={18} />
                                                                                                                                                                          </button>

                                                                                                                                                                                    <img
                                                                                                                                                                                                src={image}
                                                                                                                                                                                                            alt={title}
                                                                                                                                                                                                                        className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                                                                                                                                                                                                                                  />

                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                </Link>

                                                                                                                                                                                                                                                      <div className="p-6">

                                                                                                                                                                                                                                                              <h3 className="text-xl font-bold">
                                                                                                                                                                                                                                                                        {title}
                                                                                                                                                                                                                                                                                </h3>

                                                                                                                                                                                                                                                                                        <p className="mt-2 text-sm text-gray-400">
                                                                                                                                                                                                                                                                                                  Stock : {stock}
                                                                                                                                                                                                                                                                                                          </p>

                                                                                                                                                                                                                                                                                                                  <p className="mt-3 text-3xl font-black text-cyan-400">
                                                                                                                                                                                                                                                                                                                            {price.toFixed(2)} €
                                                                                                                                                                                                                                                                                                                                    </p>

                                                                                                                                                                                                                                                                                                                                            <button
                                                                                                                                                                                                                                                                                                                                                      onClick={() =>
                                                                                                                                                                                                                                                                                                                                                                  addToCart({
                                                                                                                                                                                                                                                                                                                                                                                id: Number(id),
                                                                                                                                                                                                                                                                                                                                                                                              title,
                                                                                                                                                                                                                                                                                                                                                                                                            price,
                                                                                                                                                                                                                                                                                                                                                                                                                          image,
                                                                                                                                                                                                                                                                                                                                                                                                                                      })
                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-bold text-black hover:bg-cyan-400 transition"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <ShoppingCart size={18} />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Ajouter au panier
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </button>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }