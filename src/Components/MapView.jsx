import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import Contact from "./Contact";
import "./MapView.css"; // Asegúrate de importar el archivo CSS

export default function MapView() {
    const [selectedMarker, setSelectedMarker] = useState(null);
    const containerStyle = {
        width: "100%",
        height: "400px",
    };

    const position = {
        lat: 11.965709432290582,
        lng: -86.0824461588295,
    };

    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
    };

    const handleMapClick = () => {
        setSelectedMarker(null);
    };

    return (
        <div className="map-view-container">
            <div className="contact-container">
                <Contact />
            </div>
            <div className="map-container">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={position}
                    zoom={5}
                    onClick={handleMapClick}
                >
                    <Marker
                        position={position}
                        onClick={() => handleMarkerClick(position)}
                    >
                        {selectedMarker && (
                            <InfoWindow onCloseClick={() => handleMarkerClick(null)}>
                                <div>
                                    A pretty InfoWindow. <br /> Easily customizable.
                                </div>
                            </InfoWindow>
                        )}
                    </Marker>
                </GoogleMap>
            </div>
        </div>
    );
}
