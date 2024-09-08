import { createStore } from "zustand";

export type State = {};

export type Actions = {
  clearState: () => void;
};

export const initialState: State = {};

export type Store = ReturnType<typeof createGlobalStore>;

export const createGlobalStore = (state: State = initialState) => {
  return createStore<State & Actions>()((set) => ({
    ...state,

    clearState: () => set(initialState),
  }));
};
