import { useContext } from "react";
import { useStore as useGlobalStore } from "zustand";

import { StoreContext } from "@/utils/provider";
import { Actions, State } from "@/utils/store";

export const useStore = <T>(selector: (state: State & Actions) => T): T => {
  const store = useContext(StoreContext);

  if (!store) throw new Error("Missing Context.Provider in the tree");

  return useGlobalStore(store, selector);
};
