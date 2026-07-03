"use client";

import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../../contexts/CartContext";

type Props = {
  id: number;
    title: string;
      price: number;
        image: string;
          badge?: string;
          };

          export default function ProductCard({
            id,
              title,
                price,
                  image,
                    badge,
                    }: Props) {
                      const { addToCart } = useCart();

                        return (
                            <div className="group rounded-3xl overflow-hidden border border-cyan-900 bg-[#08111f] hover:border-cyan-400 transition-all duration-300">

                                  <Link href={`/produit/${id}`}>

                                          <div className="relative overflow-hidden">

                                                    {badge && (
                                                                <span className="absolute top-3 left-3 z-10 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-black">
                                                                              {badge}
                                                                                          </span>
                                                                                                    )}

                                                                                                              <img
                                                                                                                          src={image}
                                                                                                                                      alt={title}
                                                                                                                                                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                                                                                                            />

                                                                                                                                                                    </div>

                                                                                                                                                                          </Link>

                                                                                                                                                                                <div className="p-5">

                                                                                                                                                                                        <h3 className="text-xl font-bold text-white">
                                                                                                                                                                                                  {title}
                                                                                                                                                                                                          </h3>

                                                                                                                                                                                                                  <p className="mt-3 text-3xl font-black text-cyan-400">
                                                                                                                                                                                                                            {price.toFixed(2)} €
                                                                                                                                                                                                                                    </p>

                                                                                                                                                                                                                                            <div className="mt-6 flex gap-3">

                                                                                                                                                                                                                                                      <button
                                                                                                                                                                                                                                                                  onClick={() =>
                                                                                                                                                                                                                                                                                addToCart({
                                                                                                                                                                                                                                                                                                id,
                                                                                                                                                                                                                                                                                                                title,
                                                                                                                                                                                                                                                                                                                                price,
                                                                                                                                                                                                                                                                                                                                                image,
                                                                                                                                                                                                                                                                                                                                                              })
                                                                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                                                                                      className="flex-1 rounded-xl bg-cyan-500 py-3 font-bold text-black hover:bg-cyan-400 transition flex items-center justify-center gap-2"
                                                                                                                                                                                                                                                                                                                                                                                                >
                                                                                                                                                                                                                                                                                                                                                                                                            <ShoppingCart size={18} />
                                                                                                                                                                                                                                                                                                                                                                                                                        Ajouter
                                                                                                                                                                                                                                                                                                                                                                                                                                  </button>

                                                                                                                                                                                                                                                                                                                                                                                                                                            <button className="rounded-xl border border-cyan-700 px-4 hover:bg-cyan-500 hover:text-black transition">
                                                                                                                                                                                                                                                                                                                                                                                                                                                        <Heart size={18} />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </button>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }