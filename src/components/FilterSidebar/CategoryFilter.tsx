import React from "react";
import { Category } from "../../types/category";

type CategoryFilterProps = {
    categories: Category[];
    selectedCategoryIds: number[];
    setSelectedCategoryIds: (categoryIds: number[]) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({categories, selectedCategoryIds, setSelectedCategoryIds}) =>{
    const handleCategoryChange = (categoryId: number) => {
        setSelectedCategoryIds(prevSelected => {
            if (prevSelected.includes(categoryId)) {
                return prevSelected.filter(id => id !== categoryId); 
            }
            return [...prevSelected, categoryId]; 
        });
    };

    return (
        <div>
            <h3>Categories</h3>
            {categories.map((category) => (
                <label key={category.id}> 
                    <input
                        type="checkbox"
                        checked={selectedCategoryIds.includes(category.id)} 
                        onChange={() => handleCategoryChange(category.id)} 
                    />
                    {category.name}
                </label>
            ))}
        </div>
    );
}

export default CategoryFilter;