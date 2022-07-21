import React from 'react'

import { PlacesProvider } from './context';
import { MapProvider } from './context';

import { HomeScreen } from './screens/index';


export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  )
}
