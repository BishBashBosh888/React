// src/pages/Shop.tsx
import React from 'react';
import ItemCatalog from '../components/ItemCatalog/ItemCatalog';
import FilterSidebar from '../components/FilterSidebar/FilterSidebar';

const Shop: React.FC = () => {
    // const [filters, setFilters] = useState({
    //     search: '',
    //     priceFrom: '',
    //     priceTo: '',
    //     selectedCategories: [],
    // });

    const handleFilterChange = (newFilters: {
        search: string;
        priceFrom: number | "";
        priceTo: number | "";
        selectedCategories: string[];
    }) => {
        setFilters(newFilters);
    };

    const categories = ["Electronics", "Clothing", "Books"];

    return (
        <div>
            <FilterSidebar categories={categories} onFilterChange={handleFilterChange}/>
            <ItemCatalog />
        </div>
    );
};

export default Shop;
