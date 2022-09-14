import create from "zustand";
import { combine } from "zustand/middleware";

const store = combine(
  {
    loading: false,
  },
  (set) => ({
    toggle() {
      set((state) => {
        localStorage.setItem(
          "@platos/global",
          JSON.stringify({ loading: !state.loading })
        );
        return {
          loading: !state.loading,
        };
      });
    },
  })
);

const useStore = create(store);

export { useStore };
