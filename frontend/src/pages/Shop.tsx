import React, { useState } from 'react';
import ItemCatalog from '../components/ItemCatalog/ItemCatalog';
import FilterSidebar from '../components/FilterSidebar/FilterSidebar';
import { dummyCategories } from '../utils/dummyData';

const Shop: React.FC = () => {
    const [filters, setFilters] = useState({
        search: '',
        priceFrom: "" as number | "",
        priceTo: "" as number | "",
        selectedCategoryIds: [] as number[],
    });

    const handleFilterChange = (newFilters: {
        search: string;
        priceFrom: number | "";
        priceTo: number | "";
        selectedCategoryIds: number[];
    }) => {
        setFilters(newFilters);
    };

    return (
        <div>
            <FilterSidebar categories={dummyCategories} onFilterChange={handleFilterChange} /> 
            <ItemCatalog filters={filters} /> 
        </div>
    );
};

export default Shop;
