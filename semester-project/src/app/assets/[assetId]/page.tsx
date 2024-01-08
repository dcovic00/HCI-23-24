"use client"
import {  games } from "../assetsList";
import styles from './gameId.module.css';
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from 'react';
import { GameListItem } from "../../../../lib/contentfulClient";


interface Params {
  gameId: number;
}

const GamesPage: React.FC<{ params: Params }> = ({ params }) => {
  const [gameList, setGameList] = useState<GameListItem[] | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await games;
        setGameList(gamesData);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  if (!gameList) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message
  }

  // Check if params.gameId is within the valid range
  const selectedGameIndex = params.gameId - 1;
  if (selectedGameIndex < 0 || selectedGameIndex >= gameList.length) {
    return <div>Game not found {params.gameId}</div>;
  }

  // Retrieve the game based on gameId
  const selectedGame = gameList[selectedGameIndex];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.name}>{selectedGame.name}</h1>
        <div className={styles.description}>{selectedGame.description}</div>
        <img src={selectedGame.heroImage.url} alt={selectedGame.name} className={styles.image} />
      </div>
    </main>
  );
};

export default GamesPage;
