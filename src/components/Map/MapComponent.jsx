import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const position = [41.306317, 69.236425];

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "300px", width: "100%", borderRadius: "25px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Founders Language School</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
