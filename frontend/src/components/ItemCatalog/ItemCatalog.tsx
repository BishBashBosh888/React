import React, { useEffect, useState } from "react";
import { dummyItems } from "../../utils/dummyData";
import ItemsList from "./ItemsList";
import { Item } from "../../types/item";

type ItemCatalogProps = {
    filters: {
        search: string;
        priceFrom: number | "";
        priceTo: number | "";
        selectedCategoryIds: number[];
    };
};

const ItemCatalog: React.FC<ItemCatalogProps> = ({ filters }) =>{
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() =>{
        setItems(dummyItems);
    }, []);

    const filteredItems = items.filter(item => {
        const searchMatch = item.name.toLowerCase().includes(filters.search.toLowerCase());
        const priceFrom = filters.priceFrom === "" ? 0 : Number(filters.priceFrom);
        const priceTo = filters.priceTo === "" ? Infinity : Number(filters.priceTo);
        const priceMatch = item.price >= priceFrom && item.price <= priceTo;
    
    
        const categoryMatch = filters.selectedCategoryIds.length === 0 ||
            item.category_ids.some(categoryId =>
                filters.selectedCategoryIds.includes(categoryId)
            );
    
        return searchMatch && priceMatch && categoryMatch;
    });

    return (
        <div>
            <ItemsList items={filteredItems} />
        </div>
    )
}

export default ItemCatalog;