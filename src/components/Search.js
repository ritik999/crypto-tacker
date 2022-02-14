import react from "react";


const Search=(props)=>{
    
    const {onInputChange}=props
    return(
        <>
        <div className="search-section">
        <h1>Search a currency</h1>
        <input type="text" placeholder="search" onChange={(e)=>{
            onInputChange(e);
        }} />
        </div>
        </>
    )
}

export default Search;
