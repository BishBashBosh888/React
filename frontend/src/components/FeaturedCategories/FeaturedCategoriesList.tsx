import React from "react";
import FeaturedCategory from "./FeaturedCategory";
import { Category } from "../../types/category";

interface FeaturedCategoriesListProps{
    categories: Category[];
}

const FeaturedCategoriesList: React.FC<FeaturedCategoriesListProps> = ({ categories }) => {
    return (
        <div>
            {categories.map((category) => (
                <FeaturedCategory key={category.id} category={category}/>
            ))}
        </div>
    )
}

export default FeaturedCategoriesList;