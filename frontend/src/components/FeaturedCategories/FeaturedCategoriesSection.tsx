import React, { useState, useEffect } from "react";
import FeaturedCategoriesList from './FeaturedCategoriesList';
import { Category } from '../../types/category';
import { dummyCategories } from "../../utils/dummyData";

const FeaturedCategoriesSection: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>(dummyCategories);

    useEffect(() =>{
        setCategories(dummyCategories);
    }, []);

    return (
        <section>
            <h2>Featured Categories</h2>
            <FeaturedCategoriesList categories={categories}/>
        </section>
    )
}

export default FeaturedCategoriesSection;