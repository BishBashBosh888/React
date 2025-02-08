import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturedCategoriesSection from "../components/FeaturedCategories/FeaturedCategoriesSection";

const Home: React.FC = () => {
    return (
        <div>
            <HeroSection/>
            <FeaturedCategoriesSection/>
        </div>
    )
}

export default Home;
