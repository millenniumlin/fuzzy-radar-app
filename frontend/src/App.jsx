import { MapContainer, TileLayer } from 'react-leaflet'
import './App.css'

const TAIPEI_CENTER = [25.033, 121.5654]

function App() {
  return (
    <main className="app">
      <MapContainer center={TAIPEI_CENTER} zoom={13} scrollWheelZoom={true} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
      </MapContainer>
    </main>
  )
}

export default App
