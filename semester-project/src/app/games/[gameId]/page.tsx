'use client'
import React, { useEffect, useState, useCallback } from 'react';
import contentfulService, { GameListItem } from "../../../../lib/contentfulClient";
import Link from "next/link";
import styles from './gameId.module.css';
import { TypeCategory, categories } from "../gamesList";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

interface CategoryFilterProps {
  categories: TypeCategory[];
}

const GamesPage: React.FC = () => {
  const [games, setGames] = useState<GameListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await contentfulService.getAllGames();
        setGames(gamesData);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const searchParams = useSearchParams();
  const categoryFilter: string = searchParams.get("_category") || "";
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParam = useCallback(
    (name: string, value: string) => {
      const currentParams = searchParams.toString();
      const params = new URLSearchParams(currentParams);

      params.set(name, value);
      // If search params are still the same there's no need to do anything
      if (currentParams === params.toString()) return;

      router.replace(pathname + "?" + params.toString(), { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const deleteSearchParam = useCallback(
    (name: string) => {
      const currentParams = searchParams.toString();
      const params = new URLSearchParams(currentParams);

      params.delete(name);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.main}>
      <div className={styles.discoverFrame2}>
          <div className={styles.discover}>
            <h1 className={styles.discoverTitle}>
                &lt;What you came for!&gt;
            </h1>
           
          </div>
        </div>











      <div className={styles.categoriesContainer}>
        {categories.map((category: TypeCategory) => (
          <div
            className={`${styles.category} ${
              category?.label.toUpperCase() === categoryFilter.toUpperCase()
                ? styles.activeCategory
                : ''
            }`}
            key={category?.label}
            onClick={() => setSearchParam("categories", category?.label as string)}
          >
            {category?.label}
          </div>
        ))}
        {categoryFilter !== "" && (
          <div
            className={styles.resetCategory}
            onClick={() => deleteSearchParam("categories")}
          >
            Reset filter
          </div>
        )}
      </div>
      <div className={styles.destinationsContainer}>
        {games.map((game) => (
          <div key={game.name} className={styles.destinationCard}>
            <div className={styles.name}>{game.name}</div>
            <div className={styles.description}>{game.description}</div>
            <div className={styles.description}>{game.categories}</div>

            <div className={styles.imageContainer}>
              <img
                src={game.heroImage.url}
                alt={game.name}
                className={styles.destinationImage}
              />
              
            </div>
          </div>
        ))}
      </div>






      <div className={styles.discoverFrame2}>
          <div className={styles.discover}>
            <h1 className={styles.discoverTitle}> &lt;Games&gt;</h1>
            <p className={styles.discoverText}>
            Dive into the gaming realm! Immerse yourself in a world of excitement and adventure with our diverse collection of games!
            </p>
          </div>
        </div>











    </div>
  );
};

export default GamesPage;
