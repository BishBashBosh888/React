import React from "react";
import { Category } from '../../types/category';
import Button from "../Button/Button";

interface FeaturedCategoryProps {
    category: Category
}

const FeaturedCategory: React.FC<FeaturedCategoryProps> = ({ category }) =>{
    return (
        <div>
            <img src="https://tinyurl.com/5d6mvpr5"/>
            <h3>{category.name}</h3>
            <Button text="View Category"/>
        </div>
    );
};

export default FeaturedCategory;