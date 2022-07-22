import axios from "axios";


const searchApi = axios.create({
    baseURL: "https://api.maptiler.com/geocoding",
    params: {
        key: 'N5vFhyrwupGWYmu0WW9J',
        language: 'es,en',
    }
})

export default searchApi;