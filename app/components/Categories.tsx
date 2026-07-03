const categories = [
      {
          title: "Pokémon",
              image: "/cards/pokemon.png",
                },
                  {
                      title: "One Piece",
                          image: "/cards/onepiece.png",
                            },
                              {
                                  title: "Lorcana",
                                      image: "/cards/lorcana.png",
                                        },
                                          {
                                              title: "Yu-Gi-Oh!",
                                                  image: "/cards/yugioh.png",
                                                    },
                                                      {
                                                          title: "Magic",
                                                              image: "/cards/magic.png",
                                                                },
                                                                  {
                                                                      title: "Accessoires",
                                                                          image: "/cards/accessoires.png",
                                                                            },
                                                                            ];

                                                                            export default function Categories() {
                                                                              return (
                                                                                  <section className="max-w-7xl mx-auto px-6 py-24">

                                                                                        <div className="text-center mb-14">

                                                                                                <h2 className="text-5xl font-black">
                                                                                                          Nos univers
                                                                                                                  </h2>

                                                                                                                          <p className="mt-4 text-gray-400">
                                                                                                                                    Retrouvez toutes vos licences préférées.
                                                                                                                                            </p>

                                                                                                                                                  </div>

                                                                                                                                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                                                                                                                                                                {categories.map((cat) => (

                                                                                                                                                                          <div
                                                                                                                                                                                      key={cat.title}
                                                                                                                                                                                                  className="group relative overflow-hidden rounded-3xl border border-cyan-900 bg-[#091223] cursor-pointer hover:border-cyan-400 transition"
                                                                                                                                                                                                            >

                                                                                                                                                                                                                        <img
                                                                                                                                                                                                                                      src={cat.image}
                                                                                                                                                                                                                                                    alt={cat.title}
                                                                                                                                                                                                                                                                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                                                                                                                                                                                                                                                                              />

                                                                                                                                                                                                                                                                                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                                                                                                                                                                                                                                                                                                      <div className="absolute bottom-0 left-0 p-8">

                                                                                                                                                                                                                                                                                                                    <h3 className="text-3xl font-black">
                                                                                                                                                                                                                                                                                                                                    {cat.title}
                                                                                                                                                                                                                                                                                                                                                  </h3>

                                                                                                                                                                                                                                                                                                                                                                <p className="text-cyan-400 mt-2">
                                                                                                                                                                                                                                                                                                                                                                                Découvrir →
                                                                                                                                                                                                                                                                                                                                                                                              </p>

                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                            ))}

                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                      </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                                                                        }
