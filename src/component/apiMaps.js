import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function MapComponent() {
    const containerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: 43.52748, // Coordonnée de latitude
        lng: 5.431312, // Coordonnée de longitude
    };
    return (
        <LoadScript googleMapsApiKey="AIzaSyBADJRfOSJjI3tDBt_8pOJahsEXczDyBZA" >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14} >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
