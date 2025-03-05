import React from "react"
import Button from "../Button/Button"

const HeroSection: React.FC = () => {
    return (
        <section>
            <div>
                <img src="https://tinyurl.com/5d6mvpr5"/>
                <h1>Goblin's Armory</h1>
                <Button text="View Our Collection"/>
            </div>
        </section>
    )
}

export default HeroSection;