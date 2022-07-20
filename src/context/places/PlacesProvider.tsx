import { useEffect, useReducer } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers/getUserLocation';

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
}

interface Props {
    children: JSX.Element | JSX.Element[];
}


export const PlacesProvider = ({ children } : Props) => {
    
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);
  
    useEffect(() => {
        getUserLocation()
            .then( coords => dispatch({ type: 'setUserLocation', payload: coords }))
            .catch( err => console.log(err));
    }, [])
  
    return (

      <PlacesContext.Provider value={{
          ...state,
      }}>
        { children }
      </PlacesContext.Provider>
  
  )
}
