export const SearchFilter =({search , setSearch , filter ,setFilter , countries , setCountries})=>{

    const handleInputChange = (event)=>{
        event.preventDefault()
        setSearch(event.target.value)
    }
    
    const handleSelectChange= (event)=> {
        event.preventDefault()
        setFilter(event.target.value)
    }

    const sortCountries = (value)=>{//! creating duplicate of the countries as we should never change the orignal data so we are creating the copy by using spread operator ...
        const sortCountry = [...countries].sort((a,b)=>{
            return value === "asc" ? a.name.common.localeCompare(b.name.common)
                                   : b.name.common.localeCompare(a.name.common)
        })
        setCountries(sortCountry)
    }

    return <section className="section-searchFilter container">
        <input type="text" placeholder="search" value={search}  onChange={handleInputChange} />

        <div>
            <button onClick={() => sortCountries("asc")}>Ascending</button>
        </div>

        <div>
            <button onClick={() => sortCountries("dec")}>Descending</button>
        </div>

        <div>
            <select className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
}

