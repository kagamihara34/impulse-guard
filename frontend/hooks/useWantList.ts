import { useState, useEffect } from "react";
import { WantItem } from "../types";

export function useWantList() {
    const [items, setItems] = useState<WantItem[]>([]);
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, []);

    const addItem = (url: string, name: string, price: number, reason: string, imageUrl: string) => {
        if (name.trim() === '') return;
        const newItem: WantItem = {
            id: Date.now().toString(),
            url,
            name,
            price,
            reason,
            imageUrl,
            createdAt: new Date(),
        };
        setItems([...items, newItem]);
    };
    
    const deleteItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const getRemainingTime = (createdAt: Date) => {
        const hours72 = 72 * 60 * 60 * 1000;
        const deadline = new Date(createdAt.getTime() + hours72);
        const remaining = deadline.getTime() - now.getTime();       
        const hours = Math.floor(remaining / (60 * 60 * 1000));
        
        return Math.max(hours, 0);
    };
    
    return { items, addItem, deleteItem, getRemainingTime }
}
