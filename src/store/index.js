import React from "react";

import { create } from "zustand";

export const useGameStore = create((set, get) => ({
  allGames: [],
  addedGames: [],
  total: 0,
  fetchGames: async () => {
    const response = await fetch("http://localhost:3000/games");
    set({ allGames: await response.json() });
  },
  addingGame: (game) => {
    const isGameAlreadyAdded = get().addedGames.some(
      (addedGame) => addedGame.id === game.id
    );
    if (!isGameAlreadyAdded) {
      set((state) => ({ addedGames: [...state.addedGames, game] }));
      get().calculateTotal();
    } else {
      console.log("This game has already been added!");
    }
  },
  removeGame: (gameId) => {
    set((state) => ({
      addedGames: state.addedGames.filter((addedGame) => addedGame.id !== gameId)
    }));
    get().calculateTotal();
  },  
  calculateTotal: () => {
    const totalPrice = get().addedGames.reduce(
      (total, game) => total + parseFloat(game.price),
      0
    );
    set({ total: totalPrice });
  },

  // let sum = 0;
  // arr.forEach(function(item) {
  //   sum += item.prise;
  // });

  //   counter: 0,
  //   plus: () => set((state) => ({ counter: state.counter + 1 })),
  //   minus: () => set((state) => ({ counter: state.counter - 1 })),
  //   reset: () => set((state) => ({ counter: 0 })),
}));

useGameStore.getState().fetchGames();
