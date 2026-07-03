"use client";

import Link from "next/link";
import {
  Search,
    ShoppingCart,
      User,
        Heart,
          Menu,
          } from "lucide-react";

          import { useCart } from "../../contexts/CartContext";

          export default function Navbar() {
            const { totalItems } = useCart();

              return (
                  <header className="sticky top-0 z-50 bg-[#040816]/90 backdrop-blur-xl border-b border-cyan-900">

                        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

                                {/* Logo */}

                                        <Link href="/" className="flex items-center gap-3">

                                                  <img
                                                              src="/image/logo.png"
                                                                          alt="AONAMI"
                                                                                      className="h-14 w-14 object-contain"
                                                                                                />

                                                                                                          <div>

                                                                                                                      <h1 className="font-black text-2xl text-cyan-400">
                                                                                                                                    AONAMI
                                                                                                                                                </h1>

                                                                                                                                                            <p className="text-xs text-gray-400 tracking-[4px]">
                                                                                                                                                                          TCG
                                                                                                                                                                                      </p>

                                                                                                                                                                                                </div>

                                                                                                                                                                                                        </Link>

                                                                                                                                                                                                                {/* Menu */}

                                                                                                                                                                                                                        <nav className="hidden lg:flex gap-8 font-semibold">

                                                                                                                                                                                                                                  <Link href="/">Accueil</Link>

                                                                                                                                                                                                                                            <Link href="/boutique">Boutique</Link>

                                                                                                                                                                                                                                                      <Link href="/categorie">Catégories</Link>

                                                                                                                                                                                                                                                                <Link href="/panier" className="relative">
                                                                                                                                                                                                                                                                  <ShoppingCart className="hover:text-cyan-400" size={22} />

                                                                                                                                                                                                                                                                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-black">
                                                                                                                                                                                                                                                                        {totalItems}
                                                                                                                                                                                                                                                                          </span>
                                                                                                                                                                                                                                                                          </Link>

                                                                                                                                                                                                                                                                          <Link href="/apropos">À propos</Link>

                                                                                                                                                                                                                                                                                  </nav>

                                                                                                                                                                                                                                                                                          {/* Icônes */}

                                                                                                                                                                                                                                                                                                  <div className="flex items-center gap-5">

                                                                                                                                                                                                                                                                                                            <Search
                                                                                                                                                                                                                                                                                                                        className="cursor-pointer hover:text-cyan-400"
                                                                                                                                                                                                                                                                                                                                    size={20}
                                                                                                                                                                                                                                                                                                                                              />

                                                                                                                                                                                                                                                                                                                                                        <Heart
                                                                                                                                                                                                                                                                                                                                                                    className="cursor-pointer hover:text-cyan-400"
                                                                                                                                                                                                                                                                                                                                                                                size={20}
                                                                                                                                                                                                                                                                                                                                                                                          />

                                                                                                                                                                                                                                                                                                                                                                                                    <User
                                                                                                                                                                                                                                                                                                                                                                                                                className="cursor-pointer hover:text-cyan-400"
                                                                                                                                                                                                                                                                                                                                                                                                                            size={20}
                                                                                                                                                                                                                                                                                                                                                                                                                                      />

                                                                                                                                                                                                                                                                                                                                                                                                                                                <Link href="/panier" className="relative">

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <ShoppingCart
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          className="hover:text-cyan-400"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        size={22}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    />

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-black">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              {totalItems}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </span>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </Link>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <Menu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          className="lg:hidden cursor-pointer"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      size={22}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                />

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </header>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }