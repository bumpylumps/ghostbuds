import sidebarItemStylez from '../src/styles/SidebarItem.module.css'

const SidebarItem = ({ location}) => {
  return (
      <section className={sidebarItemStylez.container} > 
        <img src={location.image ? location.image : 'https://res.cloudinary.com/bumpsites/image/upload/v1688354087/os00njg0cho0vx48dqli.png'}/>
        <h3> {location.name} </h3>
        <h4>{location.streetAddress}</h4>
        <h3>{location.townOrCity}, {location.state}</h3>
      </section>
  )
}

export default SidebarItem
