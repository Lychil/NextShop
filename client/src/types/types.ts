import { StaticImageData } from "next/image";

export type Product = {
    id: string;
    name: string;
    image: StaticImageData;
    price: number;
    description: string;
};

export type CartProduct = Product & { quantity: number; }
