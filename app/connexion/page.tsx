"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { auth } from "../../lib/firebase";

export default function ConnexionPage() {
  const router = useRouter();

    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

        const [loading, setLoading] = useState(false);
          const [error, setError] = useState("");

            async function handleLogin(e: React.FormEvent) {
                e.preventDefault();

                    setLoading(true);
                        setError("");

                            try {
                                  await signInWithEmailAndPassword(auth, email, password);
                                        router.push("/");
                                            } catch {
                                                  setError("Adresse e-mail ou mot de passe incorrect.");
                                                      }

                                                          setLoading(false);
                                                            }

                                                              return (
                                                                  <>
                                                                        <Navbar />

                                                                              <main className="min-h-screen bg-[#040816] flex items-center justify-center px-6">
                                                                                      <form
                                                                                                onSubmit={handleLogin}
                                                                                                          className="w-full max-w-md rounded-3xl border border-cyan-900 bg-[#08111f] p-8"
                                                                                                                  >
                                                                                                                            <h1 className="text-4xl font-black text-white mb-8">
                                                                                                                                        Connexion
                                                                                                                                                  </h1>

                                                                                                                                                            {error && (
                                                                                                                                                                        <div className="mb-6 rounded-xl bg-red-600 p-4 text-white">
                                                                                                                                                                                      {error}
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                            )}

                                                                                                                                                                                                                      <input
                                                                                                                                                                                                                                  type="email"
                                                                                                                                                                                                                                              placeholder="Adresse e-mail"
                                                                                                                                                                                                                                                          value={email}
                                                                                                                                                                                                                                                                      onChange={(e) => setEmail(e.target.value)}
                                                                                                                                                                                                                                                                                  className="mb-4 w-full rounded-xl border border-cyan-800 bg-transparent p-4 text-white"
                                                                                                                                                                                                                                                                                              required
                                                                                                                                                                                                                                                                                                        />

                                                                                                                                                                                                                                                                                                                  <input
                                                                                                                                                                                                                                                                                                                              type="password"
                                                                                                                                                                                                                                                                                                                                          placeholder="Mot de passe"
                                                                                                                                                                                                                                                                                                                                                      value={password}
                                                                                                                                                                                                                                                                                                                                                                  onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                                                                                                                                                                                                              className="mb-6 w-full rounded-xl border border-cyan-800 bg-transparent p-4 text-white"
                                                                                                                                                                                                                                                                                                                                                                                          required
                                                                                                                                                                                                                                                                                                                                                                                                    />

                                                                                                                                                                                                                                                                                                                                                                                                              <button
                                                                                                                                                                                                                                                                                                                                                                                                                          type="submit"
                                                                                                                                                                                                                                                                                                                                                                                                                                      disabled={loading}
                                                                                                                                                                                                                                                                                                                                                                                                                                                  className="w-full rounded-xl bg-cyan-500 py-4 font-bold text-black hover:bg-cyan-400"
                                                                                                                                                                                                                                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        {loading ? "Connexion..." : "Se connecter"}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </form>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </main>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <Footer />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }