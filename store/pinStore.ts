import { WebsiteType } from "@/types/website";
import { create } from "zustand";

type pinType = {
  websites: WebsiteType[];
  addPinnedWebsite: (website: WebsiteType) => void;
  removePinnedWebsite: (website: WebsiteType) => void;
};

const pinStore = create<pinType>((set) => ({
  websites: [],
  addPinnedWebsite: (newWebsite) =>
    set((state) => ({
      websites: [...new Set([...state.websites, newWebsite])],
    })),
  removePinnedWebsite: (removedWebsite: WebsiteType) => set((state) => ({websites: state.websites.filter(w => w !== removedWebsite)})),
}));
