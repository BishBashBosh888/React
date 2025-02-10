import React from "react";

type PriceFilterProps = {
    priceFrom: number | "";
    setPriceFrom: (value: number | "") => void;
    priceTo: number | "";
    setPriceTo: (value: number | "") => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ priceFrom, setPriceFrom, priceTo, setPriceTo}) => (
    <div>
        <div>
            <label>Price From</label>
            <input 
                type="number" 
                value={priceFrom} 
                onChange={(e)=>setPriceFrom(e.target.value ? Number(e.target.value) : "")}
            />
        </div>
        <div>
            <label>Price To</label>
            <input
                type="number"
                value={priceTo}
                onChange={(e)=> setPriceTo(e.target.value ? Number(e.target.value) : "")}
            />
        </div>
    </div>
)

export default PriceFilter;