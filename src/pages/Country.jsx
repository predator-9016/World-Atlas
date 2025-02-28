import { useEffect, useState, useTransition } from "react"

import { getCountryData } from "../api/PostApi"

import { Loader } from "../components/UI/Loader"
import { CountryCard } from "../components/Layout/CountryCard"
import { SearchFilter } from "../components/UI/SearchFilter"

export const Country =()=>{
    const [isPending , startTransition]= useTransition()
    const [countries,setCountries]= useState([])
    const [search , setSearch]=useState()
    const [filter, setFilter] = useState("all")
    // console.log(search, filter); //! we have set the search and filter in the searchFilter component so that we are getting the data from there


    //!THis is the only way to do the searching
    const searchCountry= (country)=>{
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase())
        }
        return true
        // return country
    }

    const filterRegion = (country)=>{
        if(filter === "all") return country;
        return country.region === filter
    }

    //todo ---->>>  Main Logic
    const filterCountries =countries.filter((country) => searchCountry(country) && filterRegion(country) );
    
    useEffect(()=>{
        startTransition(async ()=>{
            const res = await getCountryData();
            setCountries(res.data)
            console.log(res.data);
        })
    },[]);

    if(isPending) return <Loader/>

    return (
        <section className="country-section">
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
            <ul className=" grid grid-four-cols" >
                {
                    filterCountries.map((curCountry , index)=>{
                        return <CountryCard  country={curCountry} key={index} />
                    })
                }
            </ul>
        </section>
    )
}