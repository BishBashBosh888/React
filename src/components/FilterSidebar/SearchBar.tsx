import React from "react";

type SearchBarProps = {
    search: string;
    setSearch: (value: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({search, setSearch}) => (
    <input type="text" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
)

export default SearchBar;