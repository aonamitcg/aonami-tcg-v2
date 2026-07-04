import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export type Product = {
  id: string;
    title: string;
      category: string;
        price: number;
          stock: number;
            badge: string;
              image: string;
                description: string;
                };

                export async function getProducts(): Promise<Product[]> {
                  const snapshot = await getDocs(collection(db, "products"));

                    return snapshot.docs.map((doc) => ({
                        id: doc.id,
                            ...(doc.data() as Omit<Product, "id">),
                              }));
                              }