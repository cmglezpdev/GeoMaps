import { useContext } from 'react';
import { MapContext } from '../context/map/MapContext';
import { PlacesContext } from '../context/places/PlacesContext';

export const BtnMyLocation = () => {
  
    const { map, isMapReady } = useContext(MapContext);
    const { userLocation } = useContext(PlacesContext);


    const onClick = () => {

        if( !isMapReady ) throw new Error("Mapa no esta listo");
        if( !userLocation ) throw new Error("No hay una ubicación del usuario");

        map?.flyTo({
            zoom: 14,
            center: userLocation
        })
    }
  
    return (
        <button 
            className="btn btn-primary"
            onClick={onClick}
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 999
            }}
        >
            Mi ubicación
        </button>
  )
}
