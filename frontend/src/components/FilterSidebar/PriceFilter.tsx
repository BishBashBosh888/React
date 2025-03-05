import React from "react";

type PriceFilterProps = {
    priceFrom: number | "";
    setPriceFrom: (value: number | "") => void;
    priceTo: number | "";
    setPriceTo: (value: number | "") => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ priceFrom, setPriceFrom, priceTo, setPriceTo }) => {
    return (
      <div>
        <label htmlFor="priceFrom">Price From:</label>
        <input
          type="number" 
          id="priceFrom"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value === "" ? "" : Number(e.target.value))} 
        />
  
        <label htmlFor="priceTo">Price To:</label>
        <input
          type="number"
          id="priceTo"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value === "" ? "" : Number(e.target.value))}
        />
      </div>
    );
  };

export default PriceFilter;