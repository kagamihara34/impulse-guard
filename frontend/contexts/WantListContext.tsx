import { createContext, ReactNode, useContext } from "react";
import { useWantList } from "../hooks/useWantList";
import { WantItem } from "../types";

type WantListContextType = {
    items: WantItem[];
    addItem: (url: string, name: string, price: number, reason: string, imageUrl: string) => void;
    deleteItem: (id: string) => void;
    getRemainingTime: (createdAt: Date) => number;
};

export const WantListContext = createContext<WantListContextType | null>(null);

export function WantListProvider({ children }: { children: ReactNode}) {
    const { items, addItem, deleteItem, getRemainingTime } = useWantList();

    return (
        <WantListContext.Provider value={{ items, addItem, deleteItem, getRemainingTime }}>
            { children }
        </WantListContext.Provider>
    );
}
