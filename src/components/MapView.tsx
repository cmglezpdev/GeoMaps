import { useContext, useRef, useLayoutEffect } from 'react';
import { Map } from 'maplibre-gl'; // or "const maplibregl = require('maplibre-gl');"
import { PlacesContext, MapContext } from '../context/index';
import { Loading } from './index';

export const MapView = () => {
  
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);


  const mapDiv = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    
    if( !isLoading ) {
        const key = 'N5vFhyrwupGWYmu0WW9J';
        const map = new Map({
          container: mapDiv.current!, // container id
          style: `https://api.maptiler.com/maps/streets/style.json?key=${key}`, // style URL
            center: userLocation, // starting position [lng, lat]
            zoom: 14 // starting zoom
        });

        setMap(map);
    }

  }, [ isLoading ])
  
  
  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div ref={ mapDiv }
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      { userLocation?.join(', ') }
    </div>
  )
}
