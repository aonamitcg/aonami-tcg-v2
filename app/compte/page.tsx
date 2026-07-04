"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useAuth } from "../../contexts/AuthContext";

export default function ComptePage() {
  const { user, logout } = useAuth();

    return (
        <>
              <Navbar />

                    <main className="min-h-screen bg-[#040816] text-white">

                            <section className="max-w-5xl mx-auto px-6 py-20">

                                      <h1 className="text-5xl font-black">
                                                  Mon compte
                                                            </h1>

                                                                      <div className="mt-10 rounded-3xl border border-cyan-900 bg-[#08111f] p-8">

                                                                                  <p className="text-gray-400">
                                                                                                Adresse e-mail
                                                                                                            </p>

                                                                                                                        <p className="mt-2 text-2xl font-bold">
                                                                                                                                      {user?.email}
                                                                                                                                                  </p>

                                                                                                                                                              <button
                                                                                                                                                                            onClick={logout}
                                                                                                                                                                                          className="mt-10 rounded-xl bg-red-600 px-8 py-4 font-bold hover:bg-red-500"
                                                                                                                                                                                                      >
                                                                                                                                                                                                                    Déconnexion
                                                                                                                                                                                                                                </button>

                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                    <div className="mt-10 rounded-3xl border border-cyan-900 bg-[#08111f] p-8">

                                                                                                                                                                                                                                                                <h2 className="text-3xl font-bold">
                                                                                                                                                                                                                                                                              Mes commandes
                                                                                                                                                                                                                                                                                          </h2>

                                                                                                                                                                                                                                                                                                      <p className="mt-4 text-gray-400">
                                                                                                                                                                                                                                                                                                                    Aucune commande pour le moment.
                                                                                                                                                                                                                                                                                                                                </p>

                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                    <div className="mt-10 rounded-3xl border border-cyan-900 bg-[#08111f] p-8">

                                                                                                                                                                                                                                                                                                                                                                <h2 className="text-3xl font-bold">
                                                                                                                                                                                                                                                                                                                                                                              Mes favoris
                                                                                                                                                                                                                                                                                                                                                                                          </h2>

                                                                                                                                                                                                                                                                                                                                                                                                      <p className="mt-4 text-gray-400">
                                                                                                                                                                                                                                                                                                                                                                                                                    Aucun favori enregistré.
                                                                                                                                                                                                                                                                                                                                                                                                                                </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                  </section>

                                                                                                                                                                                                                                                                                                                                                                                                                                                        </main>

                                                                                                                                                                                                                                                                                                                                                                                                                                                              <Footer />

                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }