"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
    onChange: (value: string) => void;
    };

    export default function SearchBar({
      value,
        onChange,
        }: SearchBarProps) {
          return (
              <section className="max-w-7xl mx-auto px-6 py-10">

                    <div className="relative">

                            <Search
                                      size={22}
                                                className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400"
                                                        />

                                                                <input
                                                                          value={value}
                                                                                    onChange={(e) => onChange(e.target.value)}
                                                                                              type="text"
                                                                                                        placeholder="Rechercher un produit..."
                                                                                                                  className="w-full rounded-2xl border border-cyan-900 bg-[#08111f] py-5 pl-14 pr-6 text-white outline-none focus:border-cyan-400"
                                                                                                                          />

                                                                                                                                </div>

                                                                                                                                    </section>
                                                                                                                                      );
                                                                                                                                      }