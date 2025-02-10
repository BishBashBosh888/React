import React from "react";

type CategoryFilterProps = {
    categories: string[];
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({categories, selectedCategories, setSelectedCategories}) =>{
    const handleCategoryChange = (category: string) => {
        const newSelectedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category];

        setSelectedCategories(newSelectedCategories);
    };

    return (
        <div>
            <h3>Categories</h3>
            {categories.map((category) => (
                <label key={category} >
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                    />
                    {category}
                </label>
            ))}
        </div>
    )
}

export default CategoryFilter;