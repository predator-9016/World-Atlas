import axios from "axios"

//! https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1"
});


// Http get method for getting the data from the axios 

export const getCountryData = () =>{
    return api.get("/all?fields=name,population,region,capital,flags")
}

// http get method for the individual country
export const getCountryIndData = (name) =>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}