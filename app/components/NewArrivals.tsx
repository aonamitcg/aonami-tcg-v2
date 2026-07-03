import ProductCard from "./ProductCard";

const newProducts = [
  {
      image: "/cards/card1.png",
          title: "Display OP-12 Legacy",
              price: "119,99 €",
                  badge: "🔥 Nouveau",
                    },
                      {
                          image: "/cards/card2.png",
                              title: "ETB Pokémon EV10",
                                  price: "54,99 €",
                                      badge: "⭐ Best Seller",
                                        },
                                          {
                                              image: "/cards/card3.png",
                                                  title: "Deck Lorcana",
                                                      price: "19,99 €",
                                                          badge: "✨ Exclusif",
                                                            },
                                                              {
                                                                  image: "/cards/card4.png",
                                                                      title: "Dragon Shield Sleeves",
                                                                          price: "11,99 €",
                                                                              badge: "💎 Premium",
                                                                                },
                                                                                ];

                                                                                export default function NewArrivals() {
                                                                                  return (
                                                                                      <section className="max-w-7xl mx-auto px-6 py-24">

                                                                                            <div className="flex justify-between items-center mb-10">

                                                                                                    <div>

                                                                                                              <p className="text-cyan-400 uppercase tracking-[5px]">
                                                                                                                          Nouveautés
                                                                                                                                    </p>

                                                                                                                                              <h2 className="text-5xl font-black mt-2">
                                                                                                                                                          Les dernières sorties
                                                                                                                                                                    </h2>

                                                                                                                                                                            </div>

                                                                                                                                                                                    <a
                                                                                                                                                                                              href="/boutique"
                                                                                                                                                                                                        className="text-cyan-400 hover:text-cyan-300"
                                                                                                                                                                                                                >
                                                                                                                                                                                                                          Tout voir →
                                                                                                                                                                                                                                  </a>

                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                                                                                                                                                                                                                                                      {newProducts.map((product) => (
                                                                                                                                                                                                                                                                <ProductCard
                                                                                                                                                                                                                                                                            key={product.title}
                                                                                                                                                                                                                                                                                        {...product}
                                                                                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                                                                                          ))}

                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                    </section>
                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                      }