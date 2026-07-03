export default function ProductPage() {
      return (
          <main className="min-h-screen bg-[#040816] text-white">

                <section className="max-w-7xl mx-auto px-6 py-20">

                        <div className="grid lg:grid-cols-2 gap-16">

                                  {/* Image */}

                                            <div className="rounded-3xl border border-cyan-900 bg-[#08111f] p-8">

                                                        <img
                                                                      src="/cards/pokemon.png"
                                                                                    alt="Produit"
                                                                                                  className="w-full rounded-2xl"
                                                                                                              />

                                                                                                                        </div>

                                                                                                                                  {/* Informations */}

                                                                                                                                            <div>

                                                                                                                                                        <span className="rounded-full bg-cyan-500 px-4 py-2 text-black font-bold">
                                                                                                                                                                      Nouveau
                                                                                                                                                                                  </span>

                                                                                                                                                                                              <h1 className="text-5xl font-black mt-6">
                                                                                                                                                                                                            Booster Pokémon EV10
                                                                                                                                                                                                                        </h1>

                                                                                                                                                                                                                                    <p className="mt-6 text-gray-400 text-lg">
                                                                                                                                                                                                                                                  Booster officiel Pokémon Écarlate & Violet EV10.
                                                                                                                                                                                                                                                                Idéal pour les collectionneurs et joueurs.
                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                        <p className="text-5xl font-black text-cyan-400 mt-8">
                                                                                                                                                                                                                                                                                                      5,99 €
                                                                                                                                                                                                                                                                                                                  </p>

                                                                                                                                                                                                                                                                                                                              <p className="mt-4 text-green-400 font-bold">
                                                                                                                                                                                                                                                                                                                                            ✔ En stock
                                                                                                                                                                                                                                                                                                                                                        </p>

                                                                                                                                                                                                                                                                                                                                                                    <div className="flex gap-4 mt-10">

                                                                                                                                                                                                                                                                                                                                                                                  <button className="flex-1 rounded-xl bg-cyan-500 py-4 text-black font-bold hover:bg-cyan-400">
                                                                                                                                                                                                                                                                                                                                                                                                  Ajouter au panier
                                                                                                                                                                                                                                                                                                                                                                                                                </button>

                                                                                                                                                                                                                                                                                                                                                                                                                              <button className="rounded-xl border border-cyan-700 px-8 hover:bg-cyan-500 hover:text-black">
                                                                                                                                                                                                                                                                                                                                                                                                                                              ❤️
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </button>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </section>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </main>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }
