import React from "react";
import { Category } from '../../types/category';

interface FeaturedCategoryProps {
    category: Category
}

const FeaturedCategory: React.FC<FeaturedCategoryProps> = ({ category }) =>{
    return (
        <div>
            <img src="https://tinyurl.com/5d6mvpr5"/>
            <h3>{category.name}</h3>
            <button>View Category</button>
        </div>
    );
};

export default FeaturedCategory;