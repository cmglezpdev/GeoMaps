import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';

export const SearchBar = () => {
    
    const { searchPlacesByTerm } = useContext(PlacesContext);
    const debounceRef = useRef<NodeJS.Timeout>();
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if( debounceRef.current ) {
            clearTimeout(debounceRef.current);
        }
        debounceRef.current = setTimeout(() => {
            searchPlacesByTerm(e.target.value);
        }, 400);
    }
  
    return (
        <div className="search-container">
            <input 
                onChange={handleChange}
                type="text" 
                className="form-control"
                placeholder="Search place..."
            />
    </div>
  )
}
