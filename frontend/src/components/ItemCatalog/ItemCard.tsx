import React from "react";
import { Item } from "../../types/item";
import Button from "../Button/Button";

interface ItemProps {
    item: Item
}

const ItemCard: React.FC<ItemProps> = ({ item }) => {
    return (
        <div>
            <img src="https://tinyurl.com/5d6mvpr5"/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <Button text="View Item"/>
        </div>
    );
};

export default ItemCard;