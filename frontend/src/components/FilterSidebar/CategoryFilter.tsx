import React from "react";
import { Category } from "../../types/category";

type CategoryFilterProps = {
    categories: Category[];
    selectedCategoryIds: number[];
    setSelectedCategoryIds: React.Dispatch<React.SetStateAction<number[]>>
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({categories, selectedCategoryIds, setSelectedCategoryIds}) =>{
    const handleCategoryChange = (categoryId: number) => {
        setSelectedCategoryIds((prevSelected: number[]) => {
            if (prevSelected.includes(categoryId)) {
                return prevSelected.filter((id: number) => id !== categoryId);
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