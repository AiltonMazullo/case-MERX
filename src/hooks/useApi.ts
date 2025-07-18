import { useEffect, useState } from "react";
import { getHeroes } from "@/services/api";
import { HeroesProps } from "@/types";


export function useLoadingHeroes() {
  const [loadingHeroes, setLoadingHeroes] = useState<HeroesProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const data = await getHeroes(); 
        setLoadingHeroes(data);
        setLoading(false);
        
      } catch (err) {
        console.error("Erro na requisição à API:", err);
        setLoading(false); 
      }
    }
    fetchHeroes();
  }, []);

  return { loadingHeroes, loading };
}