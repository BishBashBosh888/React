import React, { useState } from "react";
import Button from "../Button/Button";
import SearchBar from "./SearchBar";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import { Category } from "../../types/category";

type FilterSidebarProps = {
    categories: Category[];
    onFilterChange: (filters: {
        search: string;
        priceFrom: number | "";
        priceTo: number | ""; 
        selectedCategoryIds: number[];
    }) => void;
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({categories, onFilterChange}) =>{
    const [search, setSearch] = useState("");
    const [priceFrom, setPriceFrom] = useState<number | "">(""); 
    const [priceTo, setPriceTo] = useState<number | "">(""); 
    const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);

    const handleFilterChange = () =>{
        const parsedPriceFrom = priceFrom === "" ? "" : Number(priceFrom);
        const parsedPriceTo = priceTo === "" ? "" : Number(priceTo);
        
        onFilterChange({ search, priceFrom: parsedPriceFrom, priceTo: parsedPriceTo, selectedCategoryIds });
    }

    return (
        <div>
            <h2>Filters</h2>
            <SearchBar search={search} setSearch={setSearch} />
            <PriceFilter priceFrom={priceFrom} setPriceFrom={setPriceFrom} priceTo={priceTo} setPriceTo={setPriceTo} />
            <CategoryFilter categories={categories} selectedCategoryIds={selectedCategoryIds} setSelectedCategoryIds={setSelectedCategoryIds} /> {/* Pass IDs */}
            <Button onClick={handleFilterChange} text="Apply Filters" />
        </div>
    );
}

export default FilterSidebar;