import React, { useEffect, useState } from "react";
import { dummyItems } from "../../utils/dummyData";
import ItemsList from "./ItemsList";
import { Item } from "../../types/item";

const ItemCatalog: React.FC = () =>{
    const [items, setItems] = useState<Item[]>(dummyItems);

    useEffect(() =>{
        setItems(dummyItems);
    }, []);

    return (
        <div>
            <ItemsList items={items}/>
        </div>
    )
}

export default ItemCatalog;