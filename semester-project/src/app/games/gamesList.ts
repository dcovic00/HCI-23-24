import React, { useState, useEffect } from 'react';
import contentfulService, { GameListItem } from "../../../lib/contentfulClient";

export interface TypeCategory {
  label: "RPG" | "FPS" | "MOBA" | "Tower defence" | "Platformer" | "Casual";
}

const Foo = (fetchFunction: () => Promise<GameListItem[]>) => {
  return async (): Promise<GameListItem[]> => {
    try {
      return await fetchFunction();
    } catch (error) {
      console.error("Error fetching games:", error);
      return [];
    }
  };
};



export const categories: TypeCategory[] = [
  {
    label: "RPG",
  },
  {
    label: "FPS",
  },
  {
    label: "MOBA",
  },
  {
    label: "Tower defence",
  },
  {
    label: "Platformer",
  },
  {
    label: "Casual",
  },
];

export const games: Promise<GameListItem[]> = Foo(contentfulService.getAllGames)();

  