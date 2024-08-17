// types.ts

export interface Item {
    id: number;
    item_id: number;
    title: string;
    price: number;
    img: string;
    amount?: number; // Optional, as it's not always available
  }
  