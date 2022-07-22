import { useEffect, useReducer } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers/getUserLocation';
import { searchApi } from '../../apis';
import { PlacesResponse, Feature } from '../../interfaces/places';

export interface PlacesState {
    isLoading: boolean;
    isLoadingPlaces: boolean;
    userLocation?: [number, number];
    places: Feature[];
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    isLoadingPlaces: false,
    userLocation: undefined,
    places: []
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
  
    const searchPlacesByTerm = async (query:string) : Promise<Feature[]> => {
        if( query.length == 0 )
            return []; // TODO: limpiar state
        if( !state.userLocation ) throw new Error("No hay ubicación del usuario");

        dispatch({type: 'setLoadingPlaces'});

        const response = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        });

        dispatch({type: "setPlaces", payload: response.data.features});
        
        return response.data.features;  
    }


    return (

      <PlacesContext.Provider value={{
          ...state,

            // Methods
            searchPlacesByTerm,
      }}>
        { children }
      </PlacesContext.Provider>
  
  )
}
