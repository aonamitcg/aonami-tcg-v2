import ProductCard from "./ProductCard";
import { products } from "../../data/products";

type ProductGridProps = {
  category?: string;
  };

  export default function ProductGrid({
    category,
    }: ProductGridProps) {
      const filteredProducts = category
          ? products.filter(
                  (product) => product.category === category
                        )
                            : products;

                              return (
                                  <section className="max-w-7xl mx-auto px-6 py-20">

                                        <div className="flex items-center justify-between mb-10">

                                                <div>

                                                          <p className="uppercase tracking-[6px] text-cyan-400">
                                                                      Boutique
                                                                                </p>

                                                                                          <h2 className="text-4xl lg:text-5xl font-black mt-2">
                                                                                                      Produits populaires
                                                                                                                </h2>

                                                                                                                        </div>

                                                                                                                                <p className="text-gray-400">
                                                                                                                                          {filteredProducts.length} produit(s)
                                                                                                                                                  </p>

                                                                                                                                                        </div>

                                                                                                                                                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                                                                                                                                                                      {filteredProducts.map((product) => (
                                                                                                                                                                                <ProductCard
                                                                                                                                                                                            key={product.id}
                                                                                                                                                                                                        id={product.id}
                                                                                                                                                                                                                    title={product.title}
                                                                                                                                                                                                                                price={product.price}
                                                                                                                                                                                                                                            image={product.image}
                                                                                                                                                                                                                                                        badge={product.badge}
                                                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                                                          ))}

                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                    </section>
                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                      }