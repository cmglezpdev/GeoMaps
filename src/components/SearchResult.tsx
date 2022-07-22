import { useContext } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';
import { LoadingPlaces } from './';

export const SearchResult = () => {

  const { places, isLoadingPlaces } = useContext(PlacesContext);

  if( isLoadingPlaces ) {
    return <LoadingPlaces />
  }

  if( places.length === 0 ) {
    return <></>;
  }

  return (
    <div className="list-group mt-3">

        {
            places.map(place => (

                <li 
                  key={ place.id }  
                  className="list-group-item list-group-item-action"
                >
                    <h6>{ place.text }</h6>
                    <p
                        className="text-muted"
                        style={{
                            fontSize: '12px'
                        }}  
                    >
                      { place.place_name } 
                    </p>
                </li>

            ))
        }

        <button className="btn btn-outline-primary mt-3">
                Direcciones
        </button>
    </div>
  )
}
