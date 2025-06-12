import { Product } from "@/store/useProductStore";
import img1 from "@/images/Getsuren.png";
import img2 from "@/images/Honōran.png";
import img3 from "@/images/Kageshida.png";
import img4 from "@/images/Suishōbara.png";
import img5 from "@/images/Tenkū Hyacinth.png";
import img6 from "@/images/Yumezakura.png";

export const productList: Product[] = [
    {
        id: "1",
        name: "Getsuren",
        image: img1,
        price: 1800,
        description: "Редкое растение с мягким светящимся лепестком, наполняющее комнату спокойствием.",
    },
    {
        id: "2",
        name: "Honōran",
        image: img2,
        price: 2200,
        description: "Энергичное дерево с лепестками, переливающимися оттенками огня.",
    },
    {
        id: "3",
        name: "Kageshida",
        image: img3,
        price: 1500,
        description: "Успокаивающее растение, источающее нежный аромат во время цветения.",
    },
    {
        id: "4",
        name: "Suishōbara",
        image: img4,
        price: 1700,
        description: "Миниатюрный бамбук, который символизирует рост и силу духа.",
    },
    {
        id: "5",
        name: "Tenkū Hyacinth",
        image: img5,
        price: 2500,
        description: "Эфирное растение с прозрачными лепестками, сверкающими как кристаллы.",
    },
    {
        id: "6",
        name: "Yumezakura",
        image: img6,
        price: 1300,
        description: "Маленький пушистый мох, мерцающий в темноте, как ночное небо.",
    },
];