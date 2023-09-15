import SidebarItem from "./SidebarItem"
import sidebarStylez from "../src/styles/Sidebar.module.css"



const Sidebar = ({ locations }) => {


  return (
    <>
      <section className={sidebarStylez.container}>
        <section className={sidebarStylez.sidebar}>
         { locations.map((location, idx) => (
              <SidebarItem 
                key={idx}
                location={location} />
            )) } 

           
        </section>
      </section>
    </>
  )
}

export default Sidebar
