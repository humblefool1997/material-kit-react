import {Map, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
const Mapleaf = () => {
  return (
    <MapContainer center={[53.4002, -3.0213]} zoom={10} scrollWheelZoom={false} style={{height: 700, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[53.4002, -3.0213]}>
        <Popup>
          Link to Dash
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Mapleaf;