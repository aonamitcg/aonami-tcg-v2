"use client";

import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import { getProducts, Product } from "../../lib/products";

type ProductGridProps = {
  search?: string;
    category?: string;
    };

    export default function ProductGrid({
      search = "",
        category,
        }: ProductGridProps) {
          const [products, setProducts] = useState<Product[]>([]);
            const [loading, setLoading] = useState(true);

              useEffect(() => {
                  async function load() {
                        const data = await getProducts();
                              setProducts(data);
                                    setLoading(false);
                                        }

                                            load();
                                              }, []);

                                                const filteredProducts = products.filter((product) => {
                                                    const matchesSearch =
                                                          product.title
                                                                  .toLowerCase()
                                                                          .includes(search.toLowerCase()) ||
                                                                                product.category
                                                                                        .toLowerCase()
                                                                                                .includes(search.toLowerCase());

                                                                                                    const matchesCategory =
                                                                                                          !category ||
                                                                                                                category === "all" ||
                                                                                                                      product.category === category;

                                                                                                                          return matchesSearch && matchesCategory;
                                                                                                                            });

                                                                                                                              if (loading) {
                                                                                                                                  return (
                                                                                                                                        <section className="py-20 text-center text-white">
                                                                                                                                                Chargement des produits...
                                                                                                                                                      </section>
                                                                                                                                                          );
                                                                                                                                                            }

                                                                                                                                                              return (
                                                                                                                                                                  <section className="max-w-7xl mx-auto px-6 py-20">

                                                                                                                                                                        <div className="flex items-center justify-between mb-10">

                                                                                                                                                                                <div>

                                                                                                                                                                                          <p className="uppercase tracking-[6px] text-cyan-400">
                                                                                                                                                                                                      Boutique
                                                                                                                                                                                                                </p>

                                                                                                                                                                                                                          <h2 className="text-5xl font-black mt-2">
                                                                                                                                                                                                                                      Produits
                                                                                                                                                                                                                                                </h2>

                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                <p className="text-gray-400">
                                                                                                                                                                                                                                                                          {filteredProducts.length} produit(s)
                                                                                                                                                                                                                                                                                  </p>

                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                                                                                                                                                                                                                                                                                                      {filteredProducts.map((product) => (
                                                                                                                                                                                                                                                                                                                <ProductCard
                                                                                                                                                                                                                                                                                                                            key={product.id}
                                                                                                                                                                                                                                                                                                                                        id={Number(product.id)}
                                                                                                                                                                                                                                                                                                                                                    title={product.title}
                                                                                                                                                                                                                                                                                                                                                                price={product.price}
                                                                                                                                                                                                                                                                                                                                                                            image={product.image}
                                                                                                                                                                                                                                                                                                                                                                                        badge={product.badge}
                                                                                                                                                                                                                                                                                                                                                                                                    stock={product.stock}
                                                                                                                                                                                                                                                                                                                                                                                                              />
                                                                                                                                                                                                                                                                                                                                                                                                                      ))}

                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                                                                                                  }