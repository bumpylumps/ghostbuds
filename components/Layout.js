
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'





import Meta from './Meta'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>      
        <Meta />
        <Nav />

        <div>
          <main>
              { children }
          </main>
        </div>
    </>
  )
}

export default Layout



