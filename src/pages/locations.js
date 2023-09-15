import dynamic from "next/dynamic"
import { useState, useEffect, useMemo } from 'react'
import Sidebar from "../../components/Sidebar"
import { server } from "../../config"
import locationStylez from "../styles/LocationsPage.module.css"
import Map from '../../components/Map'
// import { map } from "leaflet"


// const DynamicImportMap = dynamic(() => import('../../components/Map'), {ssr: false})

const DEFAULT_CENTER = [38.907132, -77.036546]

const Locations = ({ locations }) => {
  // const Map = useMemo(
  //   () => dynamic(() => import("../../components/Map"), { ssr: false }),
  //   []
  // );


 const [mounted, isMounting] = useState(false)
//  useEffect(() => {
  // isMounting(true) 
//  }, [] )
//  if(mounted) {
  return (
    <>
      <section className={locationStylez.map_search_main}>
        <Sidebar locations={locations}/>
        <Map className="map" width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer 
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  A pwetty CSS3 pwopup UwU. <br /> Easily Cusomizable OwO
                </Popup>
              </Marker>
          </>
        ) }
        </Map>
      </section>
    </>
  )
//  }
  return null
}


export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/locations`)
  const locations = await res.json()

  return { props: { locations } }
}

export default Locations
