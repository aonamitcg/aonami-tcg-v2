const features = [
      {
          icon: "🏆",
              title: "Produits officiels",
                  text: "100% authentiques",
                    },
                      {
                          icon: "👑",
                              title: "Meilleurs prix",
                                  text: "Prix compétitifs",
                                    },
                                      {
                                          icon: "📦",
                                              title: "Expédition rapide",
                                                  text: "Sous 24/48h",
                                                    },
                                                      {
                                                          icon: "🎧",
                                                              title: "Service client",
                                                                  text: "À votre écoute 7j/7",
                                                                    },
                                                                    ];

                                                                    export default function Features() {
                                                                      return (
                                                                          <section className="max-w-7xl mx-auto px-6 py-8">
                                                                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                                                        {features.map((item) => (
                                                                                                  <div
                                                                                                              key={item.title}
                                                                                                                          className="rounded-2xl border border-cyan-900 bg-[#091223] hover:border-cyan-500 transition p-6"
                                                                                                                                    >
                                                                                                                                                <div className="text-4xl">{item.icon}</div>

                                                                                                                                                            <h3 className="mt-5 text-cyan-400 font-bold text-xl">
                                                                                                                                                                          {item.title}
                                                                                                                                                                                      </h3>

                                                                                                                                                                                                  <p className="mt-2 text-gray-400">
                                                                                                                                                                                                                {item.text}
                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                        </section>
                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                          }
