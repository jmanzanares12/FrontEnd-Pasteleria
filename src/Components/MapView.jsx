import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Contact from "./Contact";
import './MapView.css';

export default function MapView() {
    return (
        <div className="map-view-container">
            <div className="contact-container">
                <Contact />
            </div>
            <div className="map-container">
                <MapContainer
                    style={{ height: '400px', width: '100%' }}
                    center={{ lat: 11.965709432290582, lng: -86.0824461588295 }}
                    zoom={5}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                </MapContainer>
            </div>
        </div>
    );
}
