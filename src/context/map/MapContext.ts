import { createContext } from 'react';
import { Map, Marker } from 'maplibre-gl';

interface MapContextProps {
    isMapReady: boolean;
    map?: Map;
    markers: Marker[];
    
    // Methods
    setMap: (map: Map) => void;
}


export const MapContext = createContext({} as MapContextProps);