import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import './globalStyles.css';


if( !navigator.geolocation ) {
  alert( "Tu navegador no tiene acceso a la Geolocalización" );
  throw Error("Tu navegador no tiene acceso a la Geolocalización");
}



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
