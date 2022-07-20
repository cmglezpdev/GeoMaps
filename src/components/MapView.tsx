import { useContext } from "react"
import { PlacesContext } from '../context/index';
import { Loading } from './index';

export const MapView = () => {
  
  const { isLoading, userLocation } = useContext(PlacesContext)
  
  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      { userLocation?.join(', ') }
    </div>
  )
}
