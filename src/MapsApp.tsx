import React from 'react'
import { PlacesProvider } from './context'
import { HomeScreen } from './screens/index';


export const MapsApp = () => {
  return (
    <PlacesProvider>
        <HomeScreen />
    </PlacesProvider>
  )
}
