import React, { useState } from "react";
import Button from "../Button/Button";
import SearchBar from "./SearchBar";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";

type FilterSidebarProps = {
    categories: string[];
    onFilterChange: (filters: {
        search: string;
        priceFrom: number | "";
        priceTo: number | "";
        selectedCategories: string[];
    }) => void
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({categories, onFilterChange}) =>{
    const [search, setSearch] = useState("");
    const [priceFrom, setPriceFrom] = useState<number | "">("");
    const [priceTo, setPriceTo] = useState<number | "">("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleFilterChange = () =>{
        onFilterChange({search, priceFrom, priceTo, selectedCategories});
    }

    return (
        <div>
            <h2>Filters</h2>
            <SearchBar search={search} setSearch={setSearch}/>
            <PriceFilter priceFrom={priceFrom} setPriceFrom={setPriceFrom} priceTo={priceTo} setPriceTo={setPriceTo}/>
            <CategoryFilter categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
            <Button onClick={handleFilterChange} text="Apply Filters"/>
        </div>
    )
}

export default FilterSidebar;