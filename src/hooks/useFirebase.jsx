import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFirebase = (categoryId) => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
        setLoading(true)
      const traerProductos = async () => {
        let querySnapshot;
        if (categoryId) {
          const q = query(
            collection(db, "componentes"),
            where("categoria", "==", categoryId)
          );
          querySnapshot = await getDocs(q);
        } else {
          querySnapshot = await getDocs(collection(db, "componentes"));
        }
        const productosFb = [];
        querySnapshot.forEach((doc) => {
          const productos = {
            id: doc.id,
            ...doc.data(),
          };
          productosFb.push(productos);
        });

        setProductos(productosFb);
        setLoading(false)
      };
      traerProductos();

    } catch (error) {
setError(error.message)

    } 
  }, [categoryId]);

  return [productos, loading, error];
};

export default useFirebase;
