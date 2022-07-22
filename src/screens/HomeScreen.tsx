import { BtnMyLocation, MapView, ReactLogo, SearchBar } from '../components/index';

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <SearchBar />
      <BtnMyLocation />
      <ReactLogo />
    </div>
  )
}
