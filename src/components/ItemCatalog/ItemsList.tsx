import React from "react";
import { Item } from "../../types/item";
import ItemCard from "./ItemCard";

interface ItemsListProps{
    items: Item[];
}

const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <ItemCard key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default ItemsList;